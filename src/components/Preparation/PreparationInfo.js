import React from 'react';
import { Link } from 'react-router-dom';

import { Image } from '../Image/Image';
import { Label } from '../Label/Label';

import './PreparationInfo.css';

export const PreparationInfo = ({
    name,
    producer,
    activeSubstances,
    isPrescription
}) => (
    <div className='PreparationInfo'>
        <h1 className='PreparationInfo-Header'>{name}</h1>
        {isPrescription && <Label
            className='PreparationInfo-Label'
            type='attention'
            text='Рецептурный препарат'
            size='big'
        />}
    </div>
);
