export default {
    methods: {
        async sleep(ms: number): Promise<any> {
            return new Promise(resolve => setTimeout(resolve, ms))
        },
        str2arr(str: string): Uint8Array {
            const utf8 = decodeURI(encodeURIComponent(str))
            return new Uint8Array(utf8.split('').map(function (item) {
                return item.charCodeAt(0)
            }))
        },
    },
}
