import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem } from '../ListItem/ListItem';
import { ListItemContent } from '../ListItemContent/ListItemContent';
import { Image } from '../Image/Image';
import { Label } from '../Label/Label';

import './PreparationsListItem.css';

export const PreparationsListItem = ({
    link,
    src,
    name,
    producer,
    activeSubstances,
    isPrescription
}) => (
    <ListItem className='PreparationsListItem' link={link}>
        <ListItemContent className='PreparationsListItem-ListItemContent'>
            <Image className='PreparationsListItem-Image' src={src || ''} size='small' withPlaceholder />
            <div className='PreparationsListItem-Info'>
                <Link
                    className='PreparationsListItem-Header'
                    size='medium'
                    to={link}
                >
                    {name}
                </Link>
                <span>{producer}</span>
                <span>Действующие вещества:</span>
                <div className='PreparationsListItem-ActiveSubstanceWrapper'>
                    {activeSubstances.map((el, i) => (
                        <Link
                            className='PreparationsListItem-ActiveSubstance'
                            to={`/preparations?mnn=${el}`}
                            key={i}
                        >
                            {el}
                        </Link>
                    ))}
                </div>
                {isPrescription &&
                <Label
                    className='PreparationsListItem-Label'
                    type='attention'
                    text='Рецептурный препарат'
                />}
            </div>
        </ListItemContent>
    </ListItem>
);
