import React, { useState, useEffect } from 'react';
import CustomQuery from './customQuery';
import { useSelector, useDispatch } from 'react-redux';
import { useFetchData } from '../../helpers/hooks/useFetchData';
import { URL } from '../../helpers/constants';
import { setBreweries, selectBreweries } from '../../slices';
import { DATA_FETCH_STATUS } from '../../helpers/constants';

export function Search() {
    const { status, data } = useFetchData(URL);
    const dispatch = useDispatch();
    const breweries = useSelector(selectBreweries);
    const [breweriesList, setBreweriesList] = useState([]);
    const [customQuery, setCustomQuery] = useState('');
    const [filteredBrewsList, setFilteredBrewsList] = useState([]);

    useEffect(() => {
        dispatch(setBreweries(data));
        // console.log('DRD z', breweriesList);
        setBreweriesList(breweries);
        const filteredBrews = breweriesList.filter((brewery) => brewery.name.toLowerCase().includes(customQuery.toLowerCase()));
        setFilteredBrewsList (filteredBrews)
    }, [data, breweries]);

    const handleCustomQueryChange = (e) => {
        setCustomQuery(e.target.value);
    };

    const filteredBrews = breweriesList.filter((brewery) => brewery.name.toLowerCase().includes(customQuery.toLowerCase()));
    console.log('DRD2:', filteredBrews);

    const renderSearchContent = () => {
        if ( status === DATA_FETCH_STATUS.FETCHING ) {
            return <div> Loading...</div>;
        } else if (status === DATA_FETCH_STATUS.SUCCESS && filteredBrewsList) {
            // render list component
            return  (filteredBrews.map((brewery) => (<p key={brewery.id}>{brewery.name}</p>)));
        } else {
            return;
        }
    }

    return (
        <>
            <h1>dsgdg</h1>
            <CustomQuery value={customQuery} handleCustomQueryChange={handleCustomQueryChange} />

            {/* {status === DATA_FETCH_STATUS.SUCCESS && filteredBrews && filteredBrews.map((brewery) => (<p key={brewery.id}>{brewery.name}</p>))} */}

        {renderSearchContent}

        </>
    );
}
