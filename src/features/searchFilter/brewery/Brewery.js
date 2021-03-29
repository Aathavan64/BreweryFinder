import React from 'react';
import { StyledBrewery } from './StyledBrewery';

function CustomQuery({
    brewery
}) {
    return (
        <StyledBrewery>
            <div className="breweryInfo">
                <div className="column column--left">
                    <p className="name">{brewery.name}</p>
                    <p className="street">{brewery.street}</p>
                    <p className="city">{brewery.city}</p>
                </div>
                <div className="column column--right">
                    <p>{brewery.phone}</p>
                    <p>{brewery.website_url}</p>
                </div>
            </div>
        </StyledBrewery>
    );
}

export default CustomQuery;
