import React from 'react';
import axios from 'axios';

export const useApi = () => {
    const airtableApiKey = 'patfdoP9fyWwrT5Sx.a9358fb956335beebc7bd8681dcee25b58ccd3d87d841dc9677ea29459ac21ac';

    const fetchBooksByCategory = async (category, setData, setError, setLoading) => {
        setLoading('Loading...');
        setError(null);
        try {
            const response = await axios.get(`https://api.airtable.com/v0/appzOKz9iL2p7wMVh/${category}`, {
                params: {
                    maxRecords: 5,
                    view: 'Grid view'
                },
                headers: {
                    Authorization: `Bearer ${airtableApiKey}`
                }
            });

            const data = response.data.records;
            setData(data);
        } catch (error) {
            setError(error);
            console.log(error);
        } finally {
            setLoading(null);
        }
    };

    const fetchBooksById = async (category, id, setData, setError, setLoading) => {
        setLoading('Loading...');
        setError(null);
    
        try {
            const response = await axios.get(`https://api.airtable.com/v0/appzOKz9iL2p7wMVh/${category}/${id}`, {
                headers: {
                    Authorization: `Bearer ${airtableApiKey}`
                }
            });
            const data = response.data;
            setData(data.fields);
            console.log(data)
        } catch (error) {
            setError(error.message || 'An error occurred');
            console.log(error);
        } finally {
            setLoading(null);
        }
    };
    

    return {
        fetchBooksByCategory,
        fetchBooksById
    };
};
