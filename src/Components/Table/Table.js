import {useEffect,useMemo} from 'react';
import { useNavigate } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import './Table.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'


const Table = ({tableData,tableColumns,tableType}) => {

    const navigate = useNavigate();
    const columns = useMemo(()=>tableColumns,[]);
    const data = useMemo(()=>tableData,[]);

    useEffect(()=>{
        if(tableType === 'stocksTable'){
            const rows=document.querySelectorAll('tbody tr');
        rows.forEach((row)=>{
            row.addEventListener('click',()=>{
                const id=row.cells[0].innerText;
                navigate(`/quotes/${id}`)
            })
        })}
    },[tableData])
    
    return ( 
        <>
          <BootstrapTable
           bootstrap4
            keyField={tableColumns[0]}
            columns={columns}
            data={data}
            filter={filterFactory()}
            />
        </>
     );
}
 
export default Table;