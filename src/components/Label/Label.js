import React from 'react';
import cn from 'classnames';
import { Icon } from 'semantic-ui-react';

import './Label.css';

export const Label = ({ type, text, className, ...props }) => {
    return (
        <div className={cn(className, 'Label')}>
            <Icon name={type}/>
            <span>{text}</span>
        </div>
    );
};
