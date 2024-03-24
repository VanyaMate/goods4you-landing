import { useMemo } from 'react';


export const useUrlWithOptions = function (url: string, options: Record<string, string>): string {
    return useMemo(() => Object.entries(options).reduce((acc, [ key, value ]) => acc += `${ key }=${ value }&`, url), [ url, options ]);
};