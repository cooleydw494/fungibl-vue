import config from "../tailwind.config.js"
import configDefault from "../tailwind.default-config"

let spacing: { [p: string]: string; [p: number]: string }
spacing = {
    // @ts-ignore
    ...config.theme.extend.spacing,
    // @ts-ignore
    ...configDefault.theme.spacing,
};
export {spacing}

const colors: {[k:string]: any} = {
    // @ts-ignore
    ...config.theme.extend.colors,
}
export {colors}
