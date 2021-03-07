import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'reactstrap';

import SearchPanel from './SearchPanel';
import ViewControl from './ViewController';
import BulkController from './BulkController';
import FilterController from './FilterController';

const Controller = ({term, searchHandler, toggleForm, filterHandler, changeView, view, clearSelected, clearCompleted, reset }) =>{

    return(
        <div>
            <SearchPanel term={term}  searchHandler={searchHandler} toggleForm={toggleForm} />
            <Row className="my-4" >
                <Col md={{size: 4}}><FilterController filterHandler={filterHandler} /></Col>
                <Col md={{size: 4}}><ViewControl view={view} changeView={changeView}/></Col>
                <Col md={{size: 4}}>
                    <div className="ml-auto">
                        <BulkController clearSelected={clearSelected} clearCompleted={clearCompleted} reset={reset} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

Controller.propTpes = {
    term: PropTypes.string.isRequired,
    searchHandler: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
    filterHandler: PropTypes.func.isRequired,
    changeView: PropTypes.func.isRequired,
    view: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}
export default Controller;
