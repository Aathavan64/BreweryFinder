import React from 'react';
import { StyledCustomQuery } from './StyledCustomQuery';

function CustomQuery({
    value,
    handleCustomQueryChange
}) {
    return (
        <StyledCustomQuery>
            <input aria-label="Search for Brewery by name" placeholder="Search Brewery Name" type='search' value={value} onChange={handleCustomQueryChange} className="abc" />
        </StyledCustomQuery>
    );
}

export default CustomQuery;
