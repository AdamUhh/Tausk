//* Styles
import { Input, SearchContainer } from '../NavStylings';
//* Components

//* Hooks, React
import { useRef } from 'react'; // remove this
import SearchFilter from './SearchFilter';
import SearchResult from './SearchResult';
import React, { useState } from 'react';

//* Styled

const Searchbar = () => {
    const countref = useRef(0); // remove this
    console.log('Searchbar.js: ' + countref.current++); // remove this

    const [isFocused, setIsFocused] = useState(false);

    const [filter, setFilter] = useState({
        group: true,
        card: true,
        task: true,
    });

    const [inputValue, setInputValue] = useState('');
    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    };

    function handleOnFocus(e) {
        // Is input focused
        if (e.currentTarget === e.target && !isFocused) setIsFocused(true);
    }

    function handleOnBlur(e) {
        // Is input unfocused
        if (e.currentTarget === e.target && isFocused)
            setTimeout(() => {
                setIsFocused(false);
            }, 100);
    }

    return (
        <SearchContainer>
            <Input
                placeholder='Search'
                value={inputValue}
                onChange={handleInputValue}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
            />
            <SearchFilter filter={filter} setFilter={setFilter} />
            {isFocused && (
                <SearchResult inputValue={inputValue} filter={filter} />
            )}
        </SearchContainer>
    );
};

export default React.memo(Searchbar);
