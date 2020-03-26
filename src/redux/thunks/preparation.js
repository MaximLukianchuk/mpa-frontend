import * as actionCreators from '../reducers/preparation';
// import * as service from '../../Services/patientService';

export const get = (id) => {
    return async dispatch => {
        // const preparation = await service.getPatientById(id);

        const preparation = {
            id: 1,
            name: 'Хайнемокс 0,4 N5 Табл П/ПЛЕН/ОБОЛОЧ',
            normalImage: 'https://apteka.ru/upload/resize_cache/iblock/af6/256_300_140cd750bba9870f18aada2478b24840a/af6046a900d38b8a95cd0fad6b7ea75c.jpg',
            producer: 'Хайнганс Лабораториз Пвт.Лтд',
            activeSubstances: ['Моксифлокасацин'],
            isPrescription: true
        };

        dispatch(actionCreators.put(preparation));
    };
};

// export const create = (data) => {
//     return async dispatch => {
//         await service.createPatient(data);
//
//         // TODO: maybe dispatch something??
//     };
// };

export const clear = () => dispatch => dispatch(actionCreators.clear());
