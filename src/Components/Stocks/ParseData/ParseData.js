import {useEffect} from 'react';
import { readString } from 'react-papaparse';
import Table from '../../Table/Table'
import {textFilter} from 'react-bootstrap-table2-filter';
import Fuse from "fuse.js";

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
                    delay: 300,
                    placeholder: 'Search...',
                    onFilter: fuzzySearch
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
            { filterElement }
            { column.text }
          </div>
        );
      }
      
    function fuzzySearch(query,data){
        if (!query) {
            return data;
          }
        const fuse = new Fuse(data,{
            keys: ["Name", "Symbol"]
          });
        const result = fuse.search(query);
        const finalResult = [];
        if (result.length) {
            result.forEach((item) => {
                finalResult.push(item.item);
              });
        }
        return finalResult;
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