import Table from '../../Table/Table'

const Prices = ({payload}) => {

    const quotesArray=Object.values(payload)[0];
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
            <h1>{Object.keys(payload)[0]}</h1>
            <Table tableData={quotesArray} tableColumns={columnHeaders}  tableType="quotesTable"/>
        </>
     );
}
 
export default Prices;