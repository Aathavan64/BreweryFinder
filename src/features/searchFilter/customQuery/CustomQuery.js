import React from 'react';
import { StyledCustomQuery } from './StyledCustomQuery';

function CustomQuery({
    value,
    handleCustomQueryChange
}) {
    return (
        <StyledCustomQuery>
            <input type='search' value={value} onChange={handleCustomQueryChange} className="abc" />
            <input type='search' value={value} onChange={handleCustomQueryChange} className="def" />
        </StyledCustomQuery>
    );
}

export default CustomQuery;
