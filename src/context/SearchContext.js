import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const updateSearchTerm = (term) => {
        setSearchTerm(term);
    };

    const value = { searchTerm, updateSearchTerm };

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => useContext(SearchContext);