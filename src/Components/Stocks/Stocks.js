import useFetch from "../useFetch";
import ParseData from './ParseData/ParseData'
import '../../Loading.css'

const Stocks = () => {

    const { data,loading,error} =useFetch("https://prototype.sbulltech.com/api/v2/instruments")

    return ( 
        <>      
            {loading && <div className="loader">Loading...</div>}
            {error && <h2>{error}</h2>}
            {data && <ParseData CSVData= {data} />}
        </>
     );
}
 
export default Stocks;