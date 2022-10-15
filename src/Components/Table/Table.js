import {useState,useEffect,useMemo} from 'react';
import { useNavigate } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import './Table.css'


const Table = ({tableData,tableColumns,tableType}) => {

    const navigate = useNavigate();
    const [updatedTableData,setUpdatedTableData] = useState(tableData)

    const columns = useMemo(()=>tableColumns,[]);
    const data = useMemo(()=>updatedTableData,[updatedTableData]);

    useEffect(()=>{

        if(tableType === 'stocksTable'){
            const rows=document.querySelectorAll('tbody tr');
            rows.forEach((row)=>{
            row.addEventListener('click',()=>{
                const id=row.cells[0].innerText;
                navigate(`/quotes/${id}`)
            })
        })}
        if(tableType === 'quotesTable'){
            if(updatedTableData.length>0){
                setInterval(()=>{
                    
                    const date=new Date();
                    const now=(date.getUTCFullYear()+'-'+(date.getUTCMonth()+1)+'-'+date.getUTCDate()+' '
                            +date.getUTCHours()+':'+date.getUTCMinutes()+':'+date.getUTCSeconds());
                    const newTableData=updatedTableData.filter((row)=>{
                        const formattedValidTill = Date.parse(row.valid_till);
                        const formattedNow = Date.parse(now);
                        //console.log(now);                        
                        return (formattedValidTill>formattedNow)
                    })
                    setUpdatedTableData(newTableData);
                },1000);
            }
        }
    },[tableData])
    
    return ( 
        <>
        <div className="table-component">
            <div className="table-container">
            <BootstrapTable
            bootstrap4
                keyField={tableColumns[0]}
                columns={columns}
                data={data}
                filter={filterFactory()}
                />
            </div>
        </div>
        </>
     );
}
 
export default Table;