import { get } from './fetchService';

export function getPreparations () {
    return get('getallmedicine');
}
