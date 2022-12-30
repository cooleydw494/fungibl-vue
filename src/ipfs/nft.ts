import { decodeAddress } from 'algosdk'
import { CID } from 'multiformats/cid'
import {Version} from 'multiformats/src/link/interface'
import * as mfsha2 from 'multiformats/hashes/sha2'
import * as digest from 'multiformats/hashes/digest'
import {Metadata} from "./metadata"
import { getMetaFromIpfs, getMimeTypeFromIpfs } from './ipfs'
import { sha256 } from 'js-sha256'

export const ARC3_URL_SUFFIX = '#arc3'
export const METADATA_FILE = 'metadata.json'
export const JSON_TYPE = 'application/json'

export function asaURL (cid: string): string { return ipfsURL(cid) + ARC3_URL_SUFFIX }

export function ipfsURL (cid: string): string { return 'ipfs://' + cid }

export function fileURL (activeConf: number, cid: string, name: string): string { return 'https://nftstorage.link/ipfs/' + cid + '/' + name }

export function isCIDVersion(version: string): boolean {
    const versionInt = parseInt(version, 10)
    return versionInt >= 0 && versionInt <= 2
}

function parseASAUrl(url: string, reserveAddr: string): string {
    if (url.endsWith(ARC3_URL_SUFFIX))
        url = url.slice(0, url.length - ARC3_URL_SUFFIX.length)

    let chunks = url.split('://')
    // console.log('resolve protocol:', url)
    // console.log(chunks)
    // Check if prefix is template-ipfs and if {ipfscid:..} is where CID would normally be
    if (chunks[0] === 'template-ipfs' && chunks[1].startsWith('{ipfscid:')) {
        // Look for something like: template:ipfs://{ipfscid:1:raw:reserve:sha2-256} and parse into components
        chunks[0] = 'ipfs'
        const cidComponents = chunks[1].split(':')
        if (cidComponents.length !== 5) {
            // give up
            console.log('unknown ipfscid format')
            return url
        }
        const [, cidVersion, cidCodec, asaField, cidHash] = cidComponents

        if (!isCIDVersion(cidVersion)) {
            console.log('invalid CID version:', cidVersion)
            return url
        }
        if (cidHash.split('}')[0] !== 'sha2-256') {
            console.log('unsupported hash:', cidHash)
            return url
        }
        if (cidCodec !== 'raw' && cidCodec !== 'dag-pb') {
            console.log('unsupported codec:', cidCodec)
            return url
        }
        if (asaField !== 'reserve') {
            console.log('unsupported asa field:', asaField)
            return url
        }
        let cidCodecCode: number | undefined
        if (cidCodec === 'raw') {
            cidCodecCode = 0x55
        } else if (cidCodec === 'dag-pb') {
            cidCodecCode = 0x70
        }

        // get 32 bytes Uint8Array reserve address - treating it as 32-byte sha2-256 hash
        const addr = decodeAddress(reserveAddr)
        const mhdigest = digest.create(mfsha2.sha256.code, addr.publicKey)
        if (cidCodecCode === undefined) {
            throw new Error(`unsupported codec: ${cidCodec}`)
        }
        const cid = CID.create(parseInt(cidVersion, 10) as Version, cidCodecCode, mhdigest)
        console.log('switching to id:', cid.toString())
        chunks[1] = cid.toString() + '/' + chunks[1].split('/').slice(1).join('/')
        console.log('redirecting to ipfs:', chunks[1])
    }

    // No protocol specified, give up
    if (chunks.length < 2) return url

    //Switch on the protocol
    switch (chunks[0]) {
        case 'ipfs': //Its ipfs, use the configured gateway
            return 'https://nftstorage.link/ipfs/' + chunks[1]
        case 'https': //Its already http, just return it
            return url
        // TODO: Future options may include arweave or algorand
    }

    return url
}

export async function mediaIntegrity (file: File): Promise<string> {
    const buff = await file.arrayBuffer()
    const bytes = new Uint8Array(buff)
    const hash = new Uint8Array(sha256.digest(bytes))
    return 'sha256-' + Buffer.from(hash).toString('base64')
}

export class Token {
    id: number

    name: string
    unitName: string
    url: string

    metadataHash: string

    total: number
    decimals: number

    creator: string

    manager: string
    reserve: string
    clawback: string
    freeze: string

    defaultFrozen: boolean

    constructor (t: any) {
        this.id = t.id || 0
        this.name = t.name || ''
        this.unitName = t.unitName || ''
        this.url = t.url || ''

        this.metadataHash = t.metadataHash || ''

        this.total = t.total || 0
        this.decimals = t.decimals || 0

        this.creator = t.creator || ''

        this.manager = t.manager || ''
        this.reserve = t.reserve || ''
        this.clawback = t.clawback || ''
        this.freeze = t.freeze || ''

        this.defaultFrozen = t.defaultFrozen || false
    }

    static fromParams (t: any): Token {
        const p = t.params
        return new Token({
            id: t.index,
            name: p.name || '',
            unitName: p['unit-name'] || '',
            url: p.url || '',
            metadataHash: p['metadata-hash'] || '',
            total: p.total || 0,
            decimals: p.decimals || 0,
            creator: p.creator || '',
            manager: p.manager || '',
            reserve: p.reserve || '',
            clawback: p.clawback || '',
            freeze: p.freeze || '',
            defaultFrozen: p['default-frozen'] || false,
        }) as Token

    }

    valid (): boolean {
        return this.id > 0 && this.total > 0 && this.url !== ''
    }

}

export class NFT {
    token: Token = new Token({})
    metadata: Metadata = new Metadata()

    urlMimeType: string

    constructor (md: Metadata, token?: Token | any, urlMimeType?: string | any) {
        this.metadata = md
        this.token = token
        this.urlMimeType = urlMimeType
    }

    static async fromToken (t: any): Promise<NFT> {
        const token = Token.fromParams(t)
        const url = parseASAUrl(token.url, token.reserve)

        //TODO: provide getters for other storage options
        // arweave? note field?

        try {
            const urlMimeType = await getMimeTypeFromIpfs(url)

            switch (urlMimeType) {
                case JSON_TYPE:
                    return new NFT(await getMetaFromIpfs(url), token, urlMimeType)
            }

            return new NFT(Metadata.fromToken(token), token, urlMimeType)
        } catch (error) {
            return new NFT(new Metadata(), token)
        }
    }

    valid (): boolean {
        return this.token.valid() && this.metadata.valid()
    }

    name (): string {
        if (this.metadata.valid()) {
            return this.metadata.name
        }
        if (this.token.valid()) {
            return this.token.name
        }
        return ''
    }

    id (): number {
        return this.token.valid() ? this.token.id : 0
    }

    mediaURL (activeConf: number, small: boolean): string {
        if (!this.valid()) return 'https://dummyimage.com/640x360/fff/aaa'

        // Try to resolve the protocol, if one is set
        const url = parseASAUrl(this.metadata.mediaURL(small), this.metadata.reserve || '')

        // If the url is different, we resolved it correctly
        if (url !== this.metadata.mediaURL(small)) return url

        // It may be a relative url stored within the same directory as the metadata file
        // Lop off the METADATA_FILE bit and append image path
        if (this.token.url.endsWith(METADATA_FILE)) {
            const dir = this.token.url.substring(0, this.token.url.length - METADATA_FILE.length)
            return parseASAUrl(dir, this.metadata.reserve || '') + this.metadata.mediaURL(small)
        }

        // give up
        return url
    }
}

export { parseASAUrl };
