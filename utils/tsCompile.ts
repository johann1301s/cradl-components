import ts, {CompilerOptions} from 'typescript'
import {log} from './logger'

export const tsCompile = (fileNames: string[], options: CompilerOptions): void => {
  let program = ts.createProgram(fileNames, options)
  let emitResult = program.emit()

  let allDiagnostics = ts
    .getPreEmitDiagnostics(program)
    .concat(emitResult.diagnostics)

  allDiagnostics.forEach(diagnostic => {
    if (diagnostic.file) {
      let {line, character} = ts.getLineAndCharacterOfPosition(diagnostic.file, diagnostic.start!)
      let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')
      log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`, 'red')
    } else {
      log(ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'), 'red')
    }
  })

  if (allDiagnostics.length === 0) {
    log(`Build successful`, 'green')
  } else {
    log(`Build unsuccessful`, 'red')
  }
}
