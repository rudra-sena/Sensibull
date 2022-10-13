import { readString } from 'react-papaparse';
import Table from '../../Table/Table'

const ParseData = ({CSVData}) => {
    
    const parsedData=(readString(CSVData,{
        header:true,
        skipEmptyLines:true
    })) 
    const stocksData=parsedData.data;

    const columns= Object.keys(stocksData[0]).filter((key) => key!=='Validtill');
    const columnHeaders=columns.map((column) =>{
        return {
            Header: column,
            accessor: column
        }
    })

    return ( 
        <>
            <Table tableData={stocksData} tableColumns={columnHeaders}/>
        </>
     );
}
 
export default ParseData;