import useFetch from "../useFetch";
import ParseData from './ParseData/ParseData'

const Stocks = () => {

    const { data,loading,error} =useFetch("https://prototype.sbulltech.com/api/v2/instruments")

    return ( 
        <>      
            {loading && <h2>Data is loading...</h2>}
            {error && <h2>{error}</h2>}
            {data && <ParseData CSVData= {data} />}
        </>
     );
}
 
export default Stocks;