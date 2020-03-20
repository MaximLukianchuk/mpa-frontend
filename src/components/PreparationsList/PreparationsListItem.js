import React from 'react';

import { ListItem } from '../ListItem/ListItem';
import { ListItemContent } from '../ListItemContent/ListItemContent';
import { Image } from '../Image/Image';

export const PreparationsListItem = ({
    link
}) => (
    <ListItem link={link} >
        <ListItemContent>
            <Image src='slomannaya' size='small' withPlaceholder />
        </ListItemContent>
    </ListItem>
);
