import {JsxEmit, ModuleKind, ModuleResolutionKind, ScriptTarget} from 'typescript'
import {log} from './logger'
import {tsCompile} from './tsCompile'

export const buildDist = (arg: {
    outdir: string
    mainExport: string
    srcdir: string
}) => {
    log(`Building files from /${arg.srcdir}`, 'yellow')

    tsCompile([`./${arg.srcdir}/${arg.mainExport}`], {
        target: ScriptTarget.ES2022,
        declaration: true,
        outDir: arg.outdir,
        jsx: JsxEmit.React,
        esModuleInterop: true,
        module: ModuleKind.ESNext,
        moduleResolution: ModuleResolutionKind.Node10,
        strict: true,
        noImplicitAny: true,
    })
}
