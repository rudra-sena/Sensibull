import {useEffect} from 'react';
import { readString } from 'react-papaparse';
import Table from '../../Table/Table'
import {textFilter,Comparator} from 'react-bootstrap-table2-filter';

const ParseData = ({CSVData}) => {
    
    const parsedData=(readString(CSVData,{
        header:true,
        skipEmptyLines:true
    })) 
    const stocksData=parsedData.data;
    const columns= Object.keys(stocksData[0]).filter((key) => key!=='Validtill');

    const columnHeaders=columns.map((column) =>{
        if(column==='Symbol' || column==='Name'){
            return {
                dataField: column,
                text: column,
                headerFormatter: columnFormatter,
                filter: textFilter({
                    delay: 1000,
                    placeholder: 'Search...',
                })
            }
        }
        else{
            return {
                dataField: column,
                text: column
            }
        }
    })

    function columnFormatter(column, colIndex, { filterElement }) {    
        return (
          <div style={ { display: 'flex', flexDirection: 'column' } }>
            { column.text }
            { filterElement }   
          </div>
        );
      }

    useEffect(()=>{
        const labels=document.querySelectorAll('span.sr-only');
        labels.forEach((label) => {
            label.innerText = "";
        },[])
    })
    
    return ( 
        <>
            <Table tableData={stocksData} tableColumns={columnHeaders} tableType="stocksTable"/>
        </>
     );
}
 
export default ParseData;