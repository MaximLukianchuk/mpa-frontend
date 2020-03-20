import React from 'react';
import { Link } from 'react-router-dom';

import './ListItem.css';

export const ListItem = ({ link, children }) => (
    <div className='ListItem'>
        <Link className='ListItem-Link' to={link} />
        {children}
    </div>
);
