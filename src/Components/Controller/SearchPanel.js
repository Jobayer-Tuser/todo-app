import React from 'react';
import { Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const SearchPanel = ({ term, searchHandler, toggleForm }) =>{
    return(
        <div className="d-flex">
            <Input className="mr-3" type="text" value={term} onChange={ (e) => searchHandler(e.target.value) } placeholder="Enter Search Term" />
            <Button className="btn-sm" color="success" onClick={toggleForm}> Create New</Button>
        </div>
    );
}

SearchPanel.propTypes = {
    term: PropTypes.string.isRequired,
    searchHandler: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired
}

export default SearchPanel;