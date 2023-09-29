// import { PieChart } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const SimpleBarChart = ({ data }) => {
    return (
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    );
  };
export default function Dashboard() {
    const barChartData = [
        { name: 'Category A', value: 25 },
        { name: 'Category B', value: 30 },
        { name: 'Category C', value: 45 },
      ];
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
                    <SimpleBarChart data={barChartData}></SimpleBarChart>
                </div>
            </div>
        </section>
    )
}