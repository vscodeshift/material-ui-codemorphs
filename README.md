# @vscodeshift/extension-skeleton

[![CircleCI](https://circleci.com/gh/vscodeshift/extension-skeleton.svg?style=svg)](https://circleci.com/gh/vscodeshift/extension-skeleton)
[![Coverage Status](https://codecov.io/gh/vscodeshift/extension-skeleton/branch/master/graph/badge.svg)](https://codecov.io/gh/vscodeshift/extension-skeleton)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/vscodeshift.extension-skeleton)](https://marketplace.visualstudio.com/items?itemName=vscodeshift.extension-skeleton)

skeleton for a VSCode extension for applying JSCodeshift transforms

# Using this skeleton

It's pretty simple, just replace the command defined in `package.json`, `src/extension.ts`
and `test/suite/extension.test.ts` with the name you want, and import or implement the transform
you want in `src/extension.ts`. Add multiple commands if you want.
