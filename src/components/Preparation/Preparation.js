import React from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';

import { PreparationInfo } from './PreparationInfo';
import * as preparationThunks from '../../redux/thunks/preparation';

import './Preparation.css';

class PreparationContainer extends React.PureComponent {
    componentDidMount () {
        this.props.getPreparation(this.props.match.params.preparationId);
    }

    render () {
        const { preparation } = this.props;
        if (!preparation.id) {
            return (
                <Dimmer active inverted>
                    <Loader inverted/>
                </Dimmer>
            );
        }

        return (
            <section className="Preparation">
                <PreparationInfo
                    name={preparation.name}
                    producer={preparation.producer}
                    activeSubstances={preparation.activeSubstances}
                    isPrescription={preparation.isPrescription}
                    additionalProperties={preparation.additionalProperties}
                />
            </section>);
    }
};

export const Preparation = connect(
    store => ({
        preparation: store.preparation
    }),
    {
        getPreparation: preparationThunks.get
    }
)(PreparationContainer);
