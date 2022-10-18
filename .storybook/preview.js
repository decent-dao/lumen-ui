import theme from '../design/tokens/theme';
import { docsTheme } from './theme';
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        expanded: true,
        exclude: /^_.*/,
        hideNoControlsWarning: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            method: 'alphabetical',
            order: ['Design Language', 'Design Tokens', 'Atoms', 'Organisms', 'Templates', ['Overview']],
        },
    },
    chakra: {
        theme: theme,
    },
    docs: {
        theme: docsTheme,
    },
};

