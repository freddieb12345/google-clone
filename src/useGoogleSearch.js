import {useState, useEffect} from 'react';
import API_KEY from './keys'
import axios from 'axios';

const CONTEXT_KEY = "53ce3d28bf28f4fa4"

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            setData(data)
        }

        fetchData();
    },[term])
    return { data }
}

export default useGoogleSearch;
