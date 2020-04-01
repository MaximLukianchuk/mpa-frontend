import React from 'react';

import { PreparationTable } from './PreparationTable';
import { Image } from '../Image/Image';
import { Breakpoint } from '../Breakpoint/Breakpoint';
import { Label } from '../Label/Label';
import { splitProperties } from '../../utils';

import './PreparationInfo.css';
import { PreparationAdditionalInfo } from './PreparationAdditionalInfo';

export const PreparationInfo = ({
    name,
    producer,
    activeSubstances,
    isPrescription,
    additionalProperties
}) => {
    const [additionalInfoLarge, additionalInfoSmall] = splitProperties(additionalProperties, 40);

    return (
        <div className='PreparationInfo'>
            <h1 className='PreparationInfo-Header'>{name}</h1>
            {isPrescription && <Label
                className='PreparationInfo-Label'
                type='attention'
                text='Рецептурный препарат'
                size='big'
            />}
            <Breakpoint desktop tablet>
                <div className='PreparationInfo-Table'>
                    <PreparationTable
                        producer={producer}
                        activeSubstances={activeSubstances}
                        additionalInfoSmall={additionalInfoSmall}
                    />
                    <Image className='PreparationInfo-Image' src={''} size='medium' withPlaceholder />
                </div>
                {<PreparationAdditionalInfo
                    additionalInfoLarge={additionalInfoLarge}
                />}
            </Breakpoint>
            <Breakpoint mobile>
                <Image className='PreparationInfo-Image' src={''} size='small' withPlaceholder />
                {<PreparationAdditionalInfo
                    additionalInfoLarge={{ ...additionalInfoSmall, ...additionalInfoLarge }}
                />}
            </Breakpoint>
        </div>
    );
};
