import {useParams} from 'react-router-dom';
import Prices from './Prices'
import useFetch from '../../useFetch'

const Quotes = () => {

    const {id} = useParams();
    const url= `https://prototype.sbulltech.com/api/v2/quotes/${id}`

    const { data,loading,error} = useFetch(url);
        
    return ( 
        <>
            {loading && <h2>Data is loading...</h2>}
            {error && <h2>{error}</h2>}
            {data?<Prices payload={data.payload} id={id}/>:<p>No Data</p>}
        </>
     );
}
 
export default Quotes;