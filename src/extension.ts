import * as vscode from 'vscode'
import applyTransform from '@vscodeshift/apply-jscodeshift'

const transform = (): string | void | null | undefined => {
  // REPLACE ME
}

export function activate(context: vscode.ExtensionContext): void {
  const disposable = vscode.commands.registerCommand(
    'extension.YOUR.COMMAND.HERE',
    () => applyTransform(transform)
  )

  context.subscriptions.push(disposable)
}

export function deactivate(): void {} // eslint-disable-line @typescript-eslint/no-empty-function
