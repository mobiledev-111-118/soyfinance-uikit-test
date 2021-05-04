# Soy UIkit

[![Version](https://img.shields.io/npm/v/@soy-libs/uikit)](https://www.npmjs.com/settings/soyfinance/packages/@soy-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@soy-libs/uikit)](https://www.npmjs.com/settings/soyfinance/packages/@soy-libs/uikit)

Soy UIkit is a set of React components and hooks used to build pages on Soy's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @soy-libs/uikit`

## Setup

### Theme

Before using Soy UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@soy-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@soy-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://pancakeswap.github.io/pancake-uikit/)
