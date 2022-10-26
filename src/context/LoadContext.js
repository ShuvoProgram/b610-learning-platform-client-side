import React from 'react';
import { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';

export const LoaderContext = createContext([]);

const LoadContext = ({children}) => {
    const categoryData = useLoaderData()

    return (
        <LoaderContext.Provider value={categoryData}>
            {children}
        </LoaderContext.Provider>
    );
};

export default LoadContext;