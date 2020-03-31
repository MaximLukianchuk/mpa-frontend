import { useLocation as useLocationBase } from 'react-router-dom';
import * as qs from 'query-string';

export const useLocation = allowedParams => {
    const { pathname, search } = useLocationBase();
    const queryParamsAll = qs.parse(search);
    const queryParams = allowedParams.reduce((a, v) => queryParamsAll[v] ? { ...a, [v]: queryParamsAll[v] } : a, {});

    return [
        {
            pathname,
            queryParams
        },
        obj => qs.stringify(Object.keys(obj).reduce((a, v) => {
            a[v] = typeof obj[v] === 'object' && !Array.isArray(obj[v]) ? obj[v].checked || obj[v].value : obj[v];
            return a;
        }, {}))
    ];
};
