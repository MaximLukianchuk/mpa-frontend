import * as actionCreators from '../reducers/preparation';
// import * as service from '../../Services/patientService';

export const get = (id) => {
    return async dispatch => {
        // const preparation = await service.getPatientById(id);

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
                isPrescription: false
            }
        ];

        dispatch(actionCreators.put({ ...preparations[id - 1],
            additionalProperties: {
                'Вид товара': 'Лекарственные средства',
                'Страна происхождения': 'Индия',
                'Фармакотерапевтическая группа': 'противомикробное средство - фторхинолон',
                'Форма выпуска и упаковка': '5 таблеток в уп',
                'Температура хранения': 'от 2 °C до 25 °C',
                'Беречь от детей': 'Да',
                'Состав': `Каждая таблетка, покрытая пленочной оболочкой содержит:
                активное вещество: моксифлоксацина гидрохлорид 436,30 мг (соответствуетмоксифлоксацину - 400мг)
                вспомогательные вещества: крахмал кукурузный - 52 мг; натрия лаурилсульфат - 7,5 мг; тальк очищенный - 15 мг; магния стеарат - 6,5 мг; карбоксиметилкрахмал натрия - 20 мг; кремния диоксид коллоидный безводный - 3,5 мг; натрия кроскармеллоза - 6,5 мг; целлюлоза микрокристаллическая - 130,7 мг.оболочка: Opadry белый (85G58977) Make-Colorcon (поливиниловый спирт, титана диоксид, тальк,макрогол - 3000, лецитин (соевый)) - 17,32 мг; оксид железа красный -0,68 мг.`
            } }));
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
