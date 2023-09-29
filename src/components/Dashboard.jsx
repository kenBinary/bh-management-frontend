import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Label } from 'recharts';


const SimpleLineChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>

    );
};
function SimplePieChart({ data }) {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer >
    );
};

export default function Dashboard() {
    let [didMount, setDidMount] = useState(false);
    let [monthlyRevenue, setMonthlyRevenue] = useState(0);
    let [totalTenants, setTotalTenants] = useState([]);
    let [vacantRooms, setVacantRooms] = useState(0)
    let [rentCollection, setRentCollection] = useState(0)
    const lineChartData = [
        { name: 'Jan', value: 25 },
        { name: 'Feb', value: 30 },
        { name: 'Mar', value: 45 },
        { name: 'Apr', value: 28 },
        { name: 'May', value: 35 },
    ];
    const pieChartData = [
        { name: 'Category A', value: 25 },
        { name: 'Category B', value: 30 },
        { name: 'Category C', value: 45 },
    ];
    // initial render
    useEffect(() => {
        // get monthly revenue
        fetch("http://localhost:3000/dashboard/monthly-revenue", {
            method: "GET"
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setMonthlyRevenue(data);
        });

        fetch("http://localhost:3000/dashboard/total-tenants", {
            method: "GET"
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setTotalTenants(data);
        });
        fetch("http://localhost:3000/dashboard/vacant-rooms", {
            method: "GET"
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setVacantRooms(data);
        });
        fetch("http://localhost:3000/dashboard/rent-collection", {
            method: "GET"
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data)
            setRentCollection(data);
        });
        setDidMount(true);
    }, [])
    if (!didMount) {
        return <div>Loading...</div>
    }
    return (
        <section className="dashboard">
            <div>
                <h2>Dashboard</h2>
            </div>
            <div className="stat-summary">
                <div>
                    <div>
                        Monthly Revenue
                    </div>
                    <div>
                        ₱ {monthlyRevenue.revenue}
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        Total Tenants
                    </div>
                    <div>
                        {totalTenants.total_tenants}
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        Rent Collections
                    </div>
                    <div>
                        {rentCollection.total}
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        Vacant Rooms:
                    </div>
                    <div>
                        {vacantRooms.total_vacant}
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <div className="tenant-room-analytics">
                <div className="line-chart">
                    <SimpleLineChart data={lineChartData}></SimpleLineChart>
                </div>
                <div className="occupancy-chart">
                    <SimplePieChart data={pieChartData}></SimplePieChart>
                </div>
            </div>
        </section>
    )
}