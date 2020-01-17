import * as vscode from 'vscode'
import applyTransform from '@vscodeshift/apply-jscodeshift'

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.addStyles', () =>
      applyTransform(require('material-ui-codemorphs/addStyles'))
    )
  )
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.setupSystem', () =>
      applyTransform(require('material-ui-codemorphs/setupSystem'))
    )
  )
}

export function deactivate(): void {} // eslint-disable-line @typescript-eslint/no-empty-function
