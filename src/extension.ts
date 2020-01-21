import * as vscode from 'vscode'
import applyTransform from '@vscodeshift/apply-jscodeshift'

/* eslint-disable @typescript-eslint/no-var-requires */

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.useStyles', () =>
      applyTransform(require('material-ui-codemorphs/useStyles'))
    )
  )
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.withStyles', () =>
      applyTransform(require('material-ui-codemorphs/withStyles'))
    )
  )
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.setupSystem', () =>
      applyTransform(require('material-ui-codemorphs/setupSystem'))
    )
  )
}

export function deactivate(): void {} // eslint-disable-line @typescript-eslint/no-empty-function
