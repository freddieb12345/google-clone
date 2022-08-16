import React from 'react';
import '../styles/Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const Search = () => {
    return (
        <div className='search'>
            <div className="search__input">
                <SearchIcon className='search__input--icon'/>
                <input type="text" />
                <MicIcon />
            </div>   
        </div>
    );
}

export default Search;
