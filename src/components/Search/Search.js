import React from 'react';
import cn from 'classnames';

import './Seacrh.css';

export const Search = ({ className, children, ...props }) => (
    <div className={cn(className, 'Search')}>
        <input className='Search-Input' {...props} />
        {children}
    </div>
);
