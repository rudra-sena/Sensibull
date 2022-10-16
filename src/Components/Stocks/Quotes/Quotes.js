import {useParams} from 'react-router-dom';
import Prices from './Prices'
import useFetch from '../../useFetch'
import '../../../Loading.css'

const Quotes = () => {

    const {id} = useParams();
    const url= `https://prototype.sbulltech.com/api/v2/quotes/${id}`

    const { data,loading,error} = useFetch(url);
        
    return ( 
        <>
            {loading && <div className="loader">Loading...</div>}
            {error && <h2>{error}</h2>}
            {data && <Prices data={data} />}
        </>
     );
}
 
export default Quotes;