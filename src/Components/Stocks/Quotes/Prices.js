import NotFound from '../../../Components/NotFound/NotFound'
import Table from '../../Table/Table'

const Prices = ({data}) => {

    if(!data.success){
        return(
            <NotFound/>
        )
    }

    const quotesArray=Object.values(data.payload)[0];
    const columns=Object.keys(quotesArray[0]);    
    
    const columnHeaders=columns.map((column) =>{
        if(column==='time'){
            return {
                dataField: column,
                text: column,
                sort: true
            }
        }
        else{
            return {
                dataField: column,
                text: column,
            }
        }
    })

    return ( 
        <>
            <h1>{Object.keys(data.payload)[0]}</h1>
            <Table tableData={quotesArray} tableColumns={columnHeaders}  tableType="quotesTable"/>
        </>
     );
}
 
export default Prices;