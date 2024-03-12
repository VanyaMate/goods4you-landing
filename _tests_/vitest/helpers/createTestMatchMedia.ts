import mediaQuery from 'css-mediaquery';


export const createMatchMedia = (width: number) => (query: any): MediaQueryList => ({
    matches            : mediaQuery.match(query, { width }),
    media              : query,
    onchange           : null,
    addListener        : () => {
    },
    removeListener     : () => {
    },
    addEventListener   : () => {
    },
    removeEventListener: () => {
    },
    dispatchEvent      : () => true,
});