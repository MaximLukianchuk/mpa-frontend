import * as actionCreaters from '../reducers/preparations';
//import * as service from '../../Services/preparationService';

export const get = (range) => {
    return async dispatch => {
        // const preparations = await service.getPreparations(range);
        const preparations = [
            {
                id: 1,
                name: 'Хайнемокс 0,4 N5 Табл П/ПЛЕН/ОБОЛОЧ',
                smallImage: 'https://apteka.ru/upload/resize_cache/iblock/af6/141_108_140cd750bba9870f18aada2478b24840a/af6046a900d38b8a95cd0fad6b7ea75c.jpg',
                producer: 'Хайнганс Лабораториз Пвт.Лтд',
                activeSubstances: ['Моксифлокасацин'],
                isPrescription: true
            },
            {
                id: 2,
                name: 'ЭКОКЛАВ 0,25+0,125 N15 ТАБЛ П/ПЛЕН ОБОЛОЧ',
                smallImage: 'https://apteka.ru/upload/resize_cache/iblock/9e0/141_108_140cd750bba9870f18aada2478b24840a/9e004582cb27943ba0c0cc896ca9f5ee.jpg',
                producer: 'АВВА РУС АО',
                activeSubstances: ['Амоксициллин', 'Клавуалоновая кислота'],
                isPrescription: true
            }
        ]

        dispatch(actionCreaters.put(preparations));
    };
};

export const clear = () => dispatch => dispatch(actionCreaters.clear());
