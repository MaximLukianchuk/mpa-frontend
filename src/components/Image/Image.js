import React, { useState } from 'react';
import { Image as ImageBase } from 'semantic-ui-react';

import * as placeholders from './placeholders';

export const Image = ({ withPlaceholder, ...props }) => {
    const [isErrored, setError] = useState(false);

    const onError = e => {
        e.target.src = placeholders[props.size];
        setError(true);
    };

    return (
        <ImageBase
            {...props}
            onError={withPlaceholder && !isErrored ? onError : undefined
            } />
    );
};
