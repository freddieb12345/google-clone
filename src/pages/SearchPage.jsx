import React from 'react';
import '../styles/SearchPage.css'
import { useStateValue  } from '../stateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response'
import { Link } from "react-router-dom"
import Search from '../components/Search'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SearchPage = () => {
    const [{ term }, dispatch] = useStateValue()
    const { data } = useGoogleSearch(term)

    console.log(data)

    // const fakedata = Response;
    // console.log(fakedata)

    return (
        <div className='search-page'>
            <div className='search-page__header'>
                <Link to="/">
                    <img 
                        className='search-page__logo'
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                        alt="" />
                </Link>

                <div className='search-page__header--body'>
                    <Search hideButtons/>
                    <div className="search-page__options">
                        <div className="search-page__options--left">
                            <div className="search-page__option">
                                <SearchIcon />
                                <Link to='/'>All</Link>
                            </div>
                            <div className="search-page__option">
                                <DescriptionIcon />
                                <Link to='/news'>news</Link>
                            </div>
                            <div className="search-page__option">
                                <ImageIcon />
                                <Link to='/images'>Images</Link>
                            </div>
                            <div className="search-page__option">
                                <LocalOfferIcon />
                                <Link to='/shopping'>Shopping</Link>
                            </div>
                            <div className="search-page__option">
                                <RoomIcon />
                                <Link to='/maps'>maps</Link>
                            </div>
                            <div className="search-page__option">
                                <MoreVertIcon />
                                <Link to='/more'>more</Link>
                            </div>
                        </div>
                        <div className="search-page__options--right">
                            <div className='search-page__option'>
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className='search-page__option'>
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {term && (
                <div className='search-page__results'>
                    <p className="search-page__result--count">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>
                    {data?.items.map((item, index) => (
                        <div className='search-page__result' key={index}>
                            <a href={item.link} className="search-page__result--link">
                                {item.pagemap?.cse_thumbnail?.length > 0 &&
                                    item.pagemap?.cse_thumbnail[0]?.src && 
                                    (
                                        <img 
                                            src={item.pagemap?.cse_thumbnail[0]?.src}
                                            alt=""
                                            className='search-page__result--image' 
                                        />
                                    )
                                }
                                {item.displayLink} 	&#9661;
                            </a>
                            <a href={item.link} className="search-page__result--title">
                                <h2>{item.title}</h2>
                            </a>
                            <p className='search-page__result--snippet'>
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchPage;

