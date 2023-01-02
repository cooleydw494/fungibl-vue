import {Metadata} from './metadata'

export async function getMimeTypeFromIpfs(url: string): Promise<string | null> {
    const req = new Request(url)
    const resp = await fetch(req)
    if (resp.headers.has("Content-Type")) {
        return resp.headers.get("Content-Type")!
    } else {
        return null
    }
}



export async function getMetaFromIpfs(url: string): Promise<Metadata> {
    const req = new Request(url)
    const resp = await fetch(req)
    const body = await resp.blob()
    const text = await body.text()
    const parsed = JSON.parse(text)
    return new Metadata({"_raw":text, ...parsed})
}


