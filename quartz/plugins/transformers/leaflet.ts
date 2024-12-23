import { Root as HTMLRoot } from "hast"
import { toString } from "hast-util-to-string"
import { QuartzTransformerPlugin } from "../types"

export interface Options {
    descriptionLength: number
    replaceExternalLinks: boolean
  }
  
  const defaultOptions: Options = {
    descriptionLength: 150,
    replaceExternalLinks: true,
  }

export const QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
    name: Leaflet
    textTransform?: (ctx: BuildCtx, src: string | Buffer) => string | Buffer
    markdownPlugins?: (ctx: BuildCtx) => PluggableList
    htmlPlugins?: (ctx: BuildCtx) => PluggableList
    externalResources?: (ctx: BuildCtx) => Partial<StaticResources>
  }