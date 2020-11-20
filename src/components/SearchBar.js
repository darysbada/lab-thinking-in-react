import React from 'react';
import { data } from '../data.json'



const SearchBar = () => {


    return(
        <form>
            <h3>Search</h3>
            <label>
                <input type="text" name="name" />
            </label>
       
        </form>
    )
}

export default SearchBar;