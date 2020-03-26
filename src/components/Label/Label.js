import React from 'react';
import cn from 'classnames';
import { Icon } from 'semantic-ui-react';

import './Label.css';

export const Label = ({ type, text, className, ...props }) => {
    return (
        <div className={cn(className, 'Label')}>
            <Icon className='Label-Icon' name={type} {...props}/>
            <span className='Label-Text'>{text}</span>
        </div>
    );
};
