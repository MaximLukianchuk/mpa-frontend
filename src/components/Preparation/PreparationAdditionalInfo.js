import React from 'react';

import { Breakpoint } from '../Breakpoint/Breakpoint';

import './PreparationAdditionalInfo.css';

export const PreparationAdditionalInfo = ({
    additionalInfoLarge = {}
}) => (
    <div className='PreparationAdditionalInfo'>
        <Breakpoint desktop tablet>
            <h1 className='PreparationAdditionalInfo-Header'>Дополнительная информация</h1>
        </Breakpoint>
        {Object.keys(additionalInfoLarge).map((el, i) => (
            <div className='PreparationAdditionalInfo-Element' key={i}>
                <h2 className='PreparationAdditionalInfo-Title'>{el}</h2>
                {additionalInfoLarge[el].split('\n').map((line, i) => (
                    <p key={`line-${i}`}>{line}</p>
                ))}
            </div>
        ))}
    </div>
);
