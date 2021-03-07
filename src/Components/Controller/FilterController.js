import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup} from 'reactstrap';

const FilterController =({filterHandler})=>(
    <ButtonGroup>
        <Button onClick={() => filterHandler('all')}>All</Button>
        <Button onClick={() => filterHandler('running')}>Running</Button>
        <Button onClick={() => filterHandler('completed')}>Completed</Button>
    </ButtonGroup>
);

FilterController.propTypes ={
    filterHandler: PropTypes.func.isRequired
}
export default FilterController;
