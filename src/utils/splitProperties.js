/**
 * Разбивает объект со строчными свойствами на два по длине строк
 * @param obj {{}}
 * @param strLength {number}
 * @returns {[{}, {}]}
 */
export const splitProperties = (obj, strLength) => Object.keys(obj).reduce((a, v) => {
    let i = Number(obj[v].length < strLength);
    a[i] = { ...a[i], [v]: obj[v] };
    return a;
}, [{}, {}]);
