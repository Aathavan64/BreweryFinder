import React, { useState, useEffect } from 'react';
import CustomQuery from './customQuery';
import { useSelector, useDispatch } from 'react-redux';
import { useFetchData } from '../../helpers/hooks/useFetchData';
import { URL } from '../../helpers/constants';
import { setBreweries, selectBreweries } from '../../slices';
import { DATA_FETCH_STATUS } from '../../helpers/constants';
import LOCATIONINFO from '../../LocationInfo';
import { StyledSearch } from './StyledSearch';

export function Search() {
    const [ locationInfo, setLocationInfo ] = useState(LOCATIONINFO);
    const [stateParam, setStateParam] = useState('')
    const [cityParam, setCityParam] = useState('')
    const [stateSearchUrl, setStateSearchUrl] = useState('')
    const [citySearchUrl, setCitySearchUrl] = useState('')
    const { status, data } = useFetchData(`${URL}${stateSearchUrl}${citySearchUrl}`);
    const dispatch = useDispatch();
    const breweries = useSelector(selectBreweries);
    const [breweriesList, setBreweriesList] = useState([]);
    const [customQuery, setCustomQuery] = useState('');
    const [filteredBrewsList, setFilteredBrewsList] = useState([]);

    // console.log('zz testing')

    useEffect(() => {
        // console.log('zz datazz', data)
        dispatch(setBreweries(data));
        setBreweriesList(data);
        // console.log('zz22 original', breweriesList);
        const filteredBrews = breweriesList.filter((brewery) => brewery.name.toLowerCase().includes(customQuery.toLowerCase()));
        // console.log('zz datazz', filteredBrews)
        setFilteredBrewsList (filteredBrews)
        // console.log('zz22 filtered', filteredBrewsList)
    }, [data, breweries, stateParam, cityParam, customQuery]);

    const handleCustomQueryChange = (e) => {
        setCustomQuery(e.target.value);
    };

    let stateList = locationInfo.map(state => {
        return (
            <option value={state.name}>{state.name}</option>
        )
    })

    let cities = null;

    if (stateParam !== '') {
        cities = locationInfo
        .filter(state => state.name === stateParam)[0].cities
        .map(city => {
            // console.log ('zztesing', city)
            return (
                <option 
                value={city}>
                    {city}
                </option>
            )
        })
        // console.log('zz test', cities)
    }


    // const filteredBrews = breweriesList.filter((brewery) => brewery.name.toLowerCase().includes(customQuery.toLowerCase()));
    // console.log('zz:', filteredBrews);

    const renderSearchContent = () => {
        return  (breweriesList.map((brewery) => (<p key={brewery.id}>{brewery.name}</p>)));
        // if ( status === DATA_FETCH_STATUS.FETCHING ) {
        //     return <div> Loading...</div>;
        // } else if (status === DATA_FETCH_STATUS.SUCCESS) {
        //     // render list component
        //     return  (breweriesList.map((brewery) => (<p key={brewery.id}>{brewery.name}</p>)));
        // } else {
        //     return;
        // }
    }

    let renderBreweryList = null

    if (status === DATA_FETCH_STATUS.SUCCESS && customQuery === '') {
        renderBreweryList = breweriesList.map(brewery => {
            return (<p key={brewery.id}>{brewery.name}</p>)
        })
    } else if (status === DATA_FETCH_STATUS.SUCCESS && customQuery !== '') {
        renderBreweryList = breweriesList
        .filter((brewery) => brewery.name.toLowerCase().includes(customQuery.toLowerCase()))
        .map(brewery => {
            return (<p key={brewery.id}>{brewery.name}</p>)
        })
    }

    return (
        <div>
            <StyledSearch>
            <div className="landingSection">
                <h1>Brewmato</h1>
                <h2>Find the best breweries around you</h2>
                <div className="listFilterContainer">
            </div>
                <select name="state" id="state"
                    placeholder="Search State"
                    aria-label="Filter By State"
                    onChange={
                        (e) => {
                            setStateSearchUrl(`/search?query=${e.target.value}`)
                            setCitySearchUrl(``)
                            setStateParam(e.target.value)
                            setCityParam('')
                        }
                    }
                >
                    <option value="" disabled selected>Select State</option>
                    { stateList }
                </select>
                <select 
                    name="city" 
                    id="city"
                    placeholder="Search City"
                    aria-label="Filter By City"
                    onChange={
                        (e) => {
                            setCitySearchUrl(`&query=${e.target.value}`)
                            setCityParam(e.target.value)
                        }
                    }
                >
                    <option value="" disabled selected>Select State First</option>
                    {cities}
                </select>
                <CustomQuery value={customQuery} handleCustomQueryChange={handleCustomQueryChange} />
            </div>
            <div className="breweryList">
                {renderBreweryList}
            </div>
            </StyledSearch>
        </div>
    );
}
