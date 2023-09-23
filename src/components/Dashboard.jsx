export default function Dashboard(params) {
    return (
        <section className="dashboard">
            <div className="stat-summary">
                <div>Previous Month Revenue:</div>
                <div>Number of Tenants:</div>
                <div>Rent Collections:</div>
                <div>Vacant Rooms:</div>
            </div>
            <div className="tenant-room-analytics">
                <table>
                    <tr>
                        <th>some heading</th>
                        <th>some heading</th>
                    </tr>
                    <tr>
                        <td>some data</td>
                        <td>some data</td>
                    </tr>
                </table>
                <div className="occupancy-chart">
                    some chart
                </div>
            </div>
        </section>
    )
}