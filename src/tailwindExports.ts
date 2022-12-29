import config from "../tailwind.config.js"
import configDefault from "../tailwind.default-config"

const spacing: { [p: string]: string; [p: number]: string } = {
    // @ts-ignore
    ...config.theme.extend.spacing,
    // @ts-ignore
    ...configDefault.theme.spacing,
}

const colors: {[k:string]: any} = {
    // @ts-ignore
    ...config.theme.extend.colors,
}


const screens: {[k:string]: any} = {
    // @ts-ignore
    ...config.theme.extend.screens,
}

export {spacing, colors, screens,}
