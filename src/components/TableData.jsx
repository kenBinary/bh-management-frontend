function TableRow({ dataID, tableData, tableHeadings }) {
    return (
        <tr>
            {tableHeadings.map((element, index) => {
                const regex = /\d{4}-\d{2}-\d{2}/g;
                if (typeof (tableData[element]) === "string") {
                    const found = tableData[element].match(regex);
                    let isFound = (found) ? true : false;
                    if (isFound) {
                        return <td key={tableData[dataID]}>{found[0]}</td>

                    }
                }
                return <td key={index}>{tableData[element]}</td>
            })}
            <td>
                <button onClick={() => {
                    console.log(tableData[dataID])
                }}>details</button>
            </td>
        </tr>
    )
}
export default function TableData({ tenantData }) {
    let dataKeys = Object.keys(tenantData[0]);
    let tableHeadings = dataKeys.filter((element) => {
        const regex = new RegExp('.*_id');
        if (!(regex.test(element))) {
            return true;
        }
    })
    let tableId = dataKeys.filter((element) => {
        const y = new RegExp('.*_id');
        const x = new RegExp('^(?!.*tenant).*_id$');
        if ((y.test(element))) {
            if ((x.test(element))) {
                return true;
            }
        }
    })
    return (
        <table>
            <thead>
                <tr>
                    {
                        tableHeadings.map((element) => {
                            return <th>{element}</th>
                        })
                    }
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tenantData.map((element, index) => {
                    return <TableRow dataID={tableId[0]} tableHeadings={tableHeadings} tableData={element}></TableRow>
                })}
            </tbody>
        </table>
    )
}