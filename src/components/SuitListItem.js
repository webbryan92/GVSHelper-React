import React from 'react';
import { Link } from 'react-router-dom';

//use grid-container to set the grid with css
const SuitListItem = (props) => (
    <div>        
        <Link to={`/suits/${props.cost}/bob`} >I am the Suititem</Link>      
    </div>
);

export default SuitListItem;