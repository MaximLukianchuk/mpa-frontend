import React from 'react';
import cn from 'classnames';

import './Breakpoint.css';

export const Breakpoint = ({ children, mobile, tablet, desktop, print }) => {
    const classNames = ['Breakpoint', { Mobile: mobile, Tablet: tablet, Desktop: desktop, Print: print }];

    return (
        <div className={cn(classNames)}>
            {children}
        </div>
    );
};
