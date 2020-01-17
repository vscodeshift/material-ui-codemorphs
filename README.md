# @vscodeshift/material-ui-codemorphs

[![CircleCI](https://circleci.com/gh/vscodeshift/material-ui-codemorphs.svg?style=svg)](https://circleci.com/gh/vscodeshift/material-ui-codemorphs)
[![Coverage Status](https://codecov.io/gh/vscodeshift/material-ui-codemorphs/branch/master/graph/badge.svg)](https://codecov.io/gh/vscodeshift/material-ui-codemorphs)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/vscodeshift.material-ui-codemorphs)

sweet codemod commands for everyday work with Material UI ✨

# Commands

## Wrap in withStyles

Position the cursor inside a funcitonal component before running this command.
Wraps the functional component in `withStyles`,
adds a `const styles = (theme: Theme) => ({ })` declaration,
and adds a `classes` type annotation and prop destructuring if possible.

Supports Flow, TypeScript, and plain JS!

![withStyles screencap](withStyles.gif)

## Box (Set up @material-ui/system)

Creates/updates the declaration for `Box` based upon which props you pass to
`<Box>` elements in your code.

![box screencap](box.gif)
