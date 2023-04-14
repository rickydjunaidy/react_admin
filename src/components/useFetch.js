import axios from "axios";
import { useState, useEffect } from "react";
import APICONFIG  from '../config_api.js';

// API CALL and process JSON
function useFetch(url){
    console.log(APICONFIG()+url)
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true)
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false)
        })
    }, [url])

    return {data, loading, error};
}

export default useFetch