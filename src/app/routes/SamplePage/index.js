import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

import { CardText, Card, CardBody, CardTitle, Input, Alert, Button } from 'reactstrap';
import RegularExpressionCard from '../../../components/FmComponents/RegularExpressionCard'
import TransitionTableCard from '../../../components/FmComponents/TransitionTableCard'
import RecognizeSentenceCard from '../../../components/FmComponents/RecognizeSentenceCard'
import RegularGrammarCard from '../../../components/FmComponents/RegularGrammarCard'

class SamplePage extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <div className="row">
                    <div className="col-8">
                        <TransitionTableCard></TransitionTableCard>
                    </div>
                    <div className="col">
                        <RecognizeSentenceCard></RecognizeSentenceCard>
                    </div>
                </div>
                <div className="row">
                    <div className="row col-8">
                        <div className="col-6">
                            <RegularExpressionCard></RegularExpressionCard>
                        </div>
                        <div className="col-6">
                            <RegularGrammarCard></RegularGrammarCard>
                        </div>
                    </div>
                    <div className="col-4">
                    </div>
                </div>
            </div>
        );
    }
}


export default SamplePage;