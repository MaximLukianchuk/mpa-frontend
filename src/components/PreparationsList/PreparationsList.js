import React from 'react';
import { connect } from 'react-redux';

import { PreparationsListItem } from './PreparationsListItem';
import * as preparationsThunks from '../../redux/thunks/preparations';

import './PreparationsList.css';

class PreparationsListContainer extends React.Component {
    componentDidMount () {
        this.props.getPreparations();
    }

    render () {
        const { preparations } = this.props;

        return (
            <section className={'PreparationsList'}>
                <h2>Preparations</h2>
                <div className={'PreparationsList-List'}>
                    {preparations.map(({ id, name, smallImage, producer, activeSubstances, isPrescription }) => (
                        <PreparationsListItem
                            link={`/preparations/${id}`}
                            name={name}
                            src={smallImage}
                            producer={producer}
                            activeSubstances={activeSubstances}
                            isPrescription={isPrescription}
                            key={id}
                        />
                    ))}
                </div>
            </section>
        );
    }
}

export const PreparationsList = connect(
    store => ({
        preparations: store.preparations || []
    }),
    {
        getPreparations: preparationsThunks.get
    }
)(PreparationsListContainer);
