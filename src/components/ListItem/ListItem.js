import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import './ListItem.css';

export const ListItem = ({ link, children, className }) => (
    <div className={cn(className, 'ListItem')}>
        <Link className='ListItem-Link' to={link} />
        {children}
    </div>
);
