function TableRow({ tableData, tableHeadings }) {
    return (
        <tr>
            {tableHeadings.map(element => {
                return <td>{tableData[element]}</td>
            })}
        </tr>
    )
}
export default function TableData({ tenantData }) {
    let tableHeadings = Object.keys(tenantData[0]);
    return (
        <table>
            <thead>
                <tr>
                    {tableHeadings.map((element) => {
                        return <th>{element}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {tenantData.map((element, index) => {
                    return <TableRow tableHeadings={Object.keys(element)} tableData={element}></TableRow>
                })}
            </tbody>
        </table>
    )
}