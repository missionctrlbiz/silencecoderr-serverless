// AppContext.js
import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';

const initialState = {
    reviews: [],
    portfolio: [],
    education: [],
    experience: [],
    heroData: {},
    services: [],
    loading: true,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { ...state, ...action.payload, loading: false };
        case 'FETCH_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://silencecoderr-serverless.vercel.app/api/fetch-data');
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: {
                        reviews: response.data.record.reviews,
                        portfolio: response.data.record.recent_works,
                        heroData: response.data.record,
                        services: response.data.record.services,
                        education: response.data.record.education,
                        experience: response.data.record.experience,
                    },
                });
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR', payload: error });
            }
        };

        fetchData();
    }, []);

    if (state.loading) {
        return (
            <div className="spinner-container">
                <TailSpin
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="loading"
                />
            </div>
        );
    }

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
