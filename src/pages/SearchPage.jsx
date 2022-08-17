import React from 'react';
import '../styles/SearchPage.css'
import { useStateValue  } from '../stateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response'

const SearchPage = () => {
    const [{ term }, dispatch] = useStateValue()
    // const { data } = useGoogleSearch(term) LIVE API CALL

    const data = Response;
    console.log(data)

    return (
        <div className='search-page'>
            <div className='search-page__header'>
                <h1>{term}</h1>
            </div>

            <div className='searchPage__results'>

            </div>
        </div>
    );
}

export default SearchPage;

