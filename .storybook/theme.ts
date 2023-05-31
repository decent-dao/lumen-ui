import { create } from '@storybook/theming';

const logo = require("./assets/logo.svg") as string;
const isLocalhost = globalThis.location?.toString().includes('localhost');

export const theme = create({
    base: 'dark',
    brandTitle: isLocalhost ? 'Lumen Local' : 'Lumen',
    brandImage: logo,
    brandUrl: '/',
    brandTarget: '_self',

    colorPrimary: '#000c2eff',
    colorSecondary: '#0032b4ff',

    // Typography
    fontBase: 'IBM Plex Sans',
    fontCode: 'IBM Plex Mono, monospace',

    // UI
    appBorderRadius: 4,
    appContentBg: '#fcffff'
});

export const docsTheme = create({
    base: "light",
    appContentBg: "#fcffff",
    fontBase: 'IBM Plex Sans',
    fontCode: 'IBM Plex Mono, monospace',
    textColor: "#000",
})