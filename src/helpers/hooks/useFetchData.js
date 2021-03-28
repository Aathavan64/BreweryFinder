import { useState, useEffect } from 'react';
import axios from 'axios';
import { DATA_FETCH_STATUS } from '../constants';

export const useFetchData = (url) => {
    const [status, setStatus] = useState(DATA_FETCH_STATUS.IDLE);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                setStatus(DATA_FETCH_STATUS.FETCHING);
                const response = await axios.get(url);
                console.log('DRD response:', response);
                setData(response.data);
                setStatus(DATA_FETCH_STATUS.SUCCESS);
            } catch (error) {
                console.debug(error);
                setStatus(DATA_FETCH_STATUS.ERROR);
            }
        };

        fetchData();
    }, []);

    return { status, data };
};

// example usage
//  const { status, data } = useFetchData(url); 