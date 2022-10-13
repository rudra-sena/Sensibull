import {useMemo} from 'react';
import {useTable} from 'react-table';
import './Table.css'

const Table = ({tableData,tableColumns}) => {

    const columns = useMemo(()=>tableColumns,[])
    const data = useMemo(()=>tableData,[])
    
    const tableObject = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableObject

    return ( 
        <>
            <table {...getTableProps()}>
                <thead>
                {
                headerGroups.map(headerGroup => (
                    
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                    headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>
                        {
                        column.render('Header')}
                        </th>
                    ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {
                rows.map(row => {
                    prepareRow(row)
                    return (
                    <tr {...row.getRowProps()}>
                        {
                        row.cells.map(cell => {
                        return (
                            <td {...cell.getCellProps()}>
                            {
                            cell.render('Cell')}
                            </td>
                        )
                        })}
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </>
     );
}
 
export default Table;