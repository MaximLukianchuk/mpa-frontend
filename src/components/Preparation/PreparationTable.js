import React from 'react';

import './PreparationTable.css';

export const PreparationTable = ({
    producer,
    activeSubstances,
    additionalInfoSmall = {}
}) => (
    <table className='PreparationTable'>
        <tbody>
            <tr>
                <td className='PreparationTable-Title'>Производитель:</td>
                <td>{producer}</td>
            </tr>
            <tr>
                <td className='PreparationTable-Title'>Действующее вещества:</td>
                <td>{activeSubstances.join(', ')}</td>
            </tr>
            {Object.keys(additionalInfoSmall).map((el, i) => (
                <tr key={i}>
                    <td className='PreparationTable-Title'>{el}:</td>
                    <td>{additionalInfoSmall[el]}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
