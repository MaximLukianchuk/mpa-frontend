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
                isPrescription: false
            },
            {
                id: 2,
                name: 'Аугментин 0,2/0,0285/5мл 7,7 пор д/сусп',
                producer: 'СмитКляин Бичем ПиЭлСи ',
                activeSubstances: ['Клавуалоновая кислота', 'Амоксициллин'],
                isPrescription: true
            },
            {
                id: 3,
                name: 'ЭКОКЛАВ 0,25+0,125 N15 ТАБЛ П/ПЛЕН ОБОЛОЧ',
                smallImage: 'https://apteka.ru/upload/resize_cache/iblock/9e0/141_108_140cd750bba9870f18aada2478b24840a/9e004582cb27943ba0c0cc896ca9f5ee.jpg',
                producer: 'АВВА РУС АО',
                activeSubstances: ['Амоксициллин', 'Клавуалоновая кислота'],
                isPrescription: false
            },
            {
                id: 4,
                name: 'бисептол 480 0,096/мл 5мл n10 амп конц д/р-ра д/ин',
                smallImage: 'https://apteka.ru/upload/resize_cache/iblock/5d3/141_108_140cd750bba9870f18aada2478b24840a/5d3d5df3a0fdacfe4d7cb7f54b0195c3.jpg',
                producer: 'Польфа, Варшавский фармацевтический завод АО',
                activeSubstances: ['Ко-тримоксазол'],
                isPrescription: true
            },
            {
                id: 5,
                name: 'бисциллин-3 600000ед n50 флак пор/сусп в/м',
                producer: 'Синтез АКОМПиИ, ОАО (\'Синтез\' ОАО)',
                activeSubstances: ['*'],
                isPrescription: true
            },
            {
                id: 6,
                name: 'бисциллин-5 1500000ед n50 флак пор/сусп в/м',
                producer: 'Синтез АКОМПиИ, ОАО (\'Синтез\' ОАО)',
                activeSubstances: [
                    'Бензатина бензилпенициллин',
                    'Бензилдиметил [3-(миристоиламино)пропил] аммоний хлорид моногидрат',
                    'Бензилпенициллин прокаина'
                ],
                isPrescription: true
            }
        ]

        dispatch(actionCreaters.put(preparations));
    };
};

export const clear = () => dispatch => dispatch(actionCreaters.clear());
