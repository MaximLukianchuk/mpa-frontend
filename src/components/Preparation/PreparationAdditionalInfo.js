import React from 'react';

import './PreparationAdditionalInfo.css';

export const PreparationAdditionalInfo = ({
    additionalInfoLarge = {}
}) => (
    <div className='PreparationAdditionalInfo'>
        <h1 className='PreparationAdditionalInfo-Header'>Дополнительная информация</h1>
        {Object.keys(additionalInfoLarge).map((el, i) => (
            <div key={i}>
                <h2 className='PreparationAdditionalInfo-Title'>{el}</h2>
                {additionalInfoLarge[el].split('\n').map((line, i) => (
                    <p key={`line-${i}`}>{line}</p>
                ))}
            </div>
        ))}
    </div>
);
