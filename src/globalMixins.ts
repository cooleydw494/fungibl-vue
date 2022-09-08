import {spacing, colors} from "./tailwindExports"
import {formatNumberShort} from "@jackcom/reachduck";

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
        // use a numeric rem key from Tailwind to get pixels
        spacingToPixels(spacingKey: number): number {
            const tailwindVal = spacing[spacingKey]
            const remIndex = tailwindVal.indexOf('rem')
            if (remIndex === -1)
                throw new Error(
                    'spacingToPixels only works for numeric Tailwind rem keys'
                )
            const rem = parseFloat(tailwindVal.substr(0, remIndex))
            const fontSize = getComputedStyle(document.documentElement).fontSize
            return rem * parseFloat(fontSize)
        },
        themeColor(color: string): string {
            return colors[color]
        },
        isStaging(): boolean {
            return window.location.host.includes('staging')
        },
        oop(err: any, alertTxt: string|null = null, consoleText: string|null = null) {
            if (alertTxt) alert(`${alertTxt}. Check console and file bug report.`)
            if (consoleText) console.log(consoleText)
            console.log(alertTxt)
        },
    },
}
