import React, { useRef } from 'react';

// Import Utils
import { fetchHeroes } from "../utils/utils"

export default function SearchBar({ setter }) {
    let input = useRef('') 
    // he explains useRef() is more convenient than useState() because atm, we are binding it. 

    const handleClick = async (evnt) => {
        evnt.preventDefault();
        let value = input.current.value;
        if (value === "") return;
    
    try {
        let heroes = await fetchHeroes(value)
        // this ^ function takes in the values/details of heroes data (e.g., name)
        setter(heroes)
    } catch (err) {
        return console.error(err);
    }
}
    return (
        <form className="searchForm_container">
            <input type="text" placeholder="Search" ref={input}/>
            <button onClick={handleClick}>Search</button>
        </form>
    );
}