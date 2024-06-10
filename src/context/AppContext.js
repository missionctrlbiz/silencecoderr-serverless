// src/AppContext.js
import React, { createContext, useReducer, useEffect } from 'react';

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
                const response = await fetch('/api/fetch-data');
                const data = await response.json();
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: {
                        reviews: data.record.reviews,
                        portfolio: data.record.recent_works,
                        heroData: data.record,
                        services: data.record.services,
                        education: data.record.education,
                        experience: data.record.experience,
                    },
                });
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR', payload: error });
            }
        };

        fetchData();
    }, []);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
