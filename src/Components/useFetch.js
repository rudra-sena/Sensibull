import axios from 'axios';
import { useState,useEffect } from 'react';

const useFetch = (url) => {

    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    
    useEffect(()=>{

        const abortFetch = new AbortController();
        setLoading(true);
        axios
            .get(url,{
                signal: abortFetch.signal
            })
            .then((res)=>{
                setData(res.data)
            })
            .catch((err)=>{
                if(!(err.name === 'AbortError')){
                    setError(err);
                }
            })
            .finally(()=>{
                setLoading(false);
            })

            return () => abortFetch.abort();
    },[url]);
    
    return {data,loading,error};
}
 
export default useFetch;