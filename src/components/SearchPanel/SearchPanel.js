import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import { useLocation } from '../../hooks';
import { Search } from '../Search/Search';

import './SearchPanel.css';

// TODO: сделать SearchPanel изолированным и переиспользуемым компонентом
// TODO: попробовать заюзать здесь useForm, сейчас не хватает более гибкого setState в нем
// TODO: разбить на мелнки компоненты
export const SearchPanel = ({ className, allowedParams }) => {
    const [{ queryParams: { search, mnn, forReceipt } }, parse] = useLocation(allowedParams);
    const [state, setState] = useState({
        search: { value: search || '' },
        mnn: { value: mnn || '' },
        forReceipt: { checked: forReceipt || false }
    });
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        setState({
            search: { value: '' },
            mnn: { value: '' },
            forReceipt: { checked: false }
        });
    };

    useEffect(() => {
        history.push(
            `/preparations?${parse(state)}`
        );
    }, [state]);

    useEffect(() => {
        setState({ ...state,
            mnn: {
                value: mnn || ''
            } });
    }, [mnn]);

    return (
        <div className={cn(className, 'SearchPanel')}>
            <form className='SearchPanel-Form' onSubmit={handleSubmit}>
                <Search
                    className='SearchPanel-Search'
                    name='search'
                    placeholder='Поиск'
                    onChange={e => setState({ ...state, [e.target.name]: { value: e.target.value } })}
                    value={state.search.value}
                />
                <div className='SearchPanel-Filters'>
                    <label className='Filters-Element'><input
                        className='Filters-ForReceipt'
                        name='forReceipt'
                        type='checkbox'
                        onChange={e => setState({ ...state, [e.target.name]: { checked: e.target.checked } })}
                        checked={Boolean(state.forReceipt.checked)}
                    />Рецептурный препарат</label>
                    <label className='Filters-Element'>Действующее вещество:<Search
                        className='Filters-Mnn'
                        name='mnn'
                        type='text'
                        onChange={e => setState({ ...state, [e.target.name]: { value: e.target.value } })}
                        value={state.mnn.value}
                    /></label>
                </div>
                <Button className='SearchPanel-Submit' type='submit'>сбросить фильтры</Button>
            </form>
        </div>
    );
};
