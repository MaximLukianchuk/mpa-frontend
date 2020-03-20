import React from 'react';
import cn from 'classnames';

import './ListItemContent.css';

export const ListItemContent = ({ children, className }) => (
    <div className={cn(className, 'ListItemContent')}>
        {children}
    </div>
);
