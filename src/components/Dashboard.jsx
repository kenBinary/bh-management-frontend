import { useState, useEffect, useRef } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MyPieChart from "./MyPieChart";
import collectionIcon from "/dashboard/collection.svg"
import revenueIcon from "/dashboard/revenue.svg"
import tenantIcon from "/dashboard/tenant.svg"
import vacantIcon from "/dashboard/vacant.svg"

const MyLineChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 'dataMax+500']} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default function Dashboard() {
    let [didMount, setDidMount] = useState(false);
    let totalTenants = useRef([]);
    let rentCollection = useRef(0);
    let vacantRooms = useRef(0);
    let yearlyRevenue = useRef(0);
    let roomOverview = useRef([]);
    let monthlyRevenue = useRef([]);
    useEffect(() => {
        // get monthly revenue
        const firstPromise = fetch("http://localhost:3000/analytics/monthly-revenue", {
            method: "GET"
        }).then((response) => {
            return response.json();
        });
        const secondPromise = fetch("http://localhost:3000/analytics/yearly-revenue", {
            method: "GET"
        }).then((response) => {
            return response.json();
        })
        const thirdPromise = fetch("http://localhost:3000/analytics/total-tenants", {
            method: "GET"
        }).then((response) => {
            return response.json();
        })
        const fourthPromise = fetch("http://localhost:3000/analytics/vacant-rooms", {
            method: "GET"
        }).then((response) => {
            return response.json();
        })
        const fifthPromise = fetch("http://localhost:3000/analytics/rent-collection", {
            method: "GET"
        }).then((response) => {
            return response.json();
        })
        const sixthPromise = fetch("http://localhost:3000/analytics/room-overview", {
            method: "GET"
        }).then((response) => {
            return response.json();
        })
        Promise.allSettled([
            firstPromise, secondPromise,
            thirdPromise, fourthPromise,
            fifthPromise, sixthPromise
        ]).then((response) => {
            // console.log(response);
            // console.log(response[0].value);
            // console.log(response[1].value);
            // console.log(response[2].value);
            // console.log(response[3].value);
            // console.log(response[4].value);
            // console.log(response[5].value);
            monthlyRevenue.current = response[0].value;
            yearlyRevenue.current = response[1].value;
            totalTenants.current = response[2].value;
            vacantRooms.current = response[3].value;
            rentCollection.current = response[4].value;
            roomOverview.current = response[5].value;
        }).finally(() => {
            setDidMount(true);
        });
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
                        ₱ {monthlyRevenue.current.revenue}
                    </div>
                    <div>
                        <img className="icon" src={revenueIcon} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        Total Tenants
                    </div>
                    <div>
                        {totalTenants.current.total_tenants}
                    </div>
                    <div>
                        <img className="icon" src={tenantIcon} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        Rent Collections
                    </div>
                    <div>
                        {rentCollection.current.total}
                    </div>
                    <div>
                        <img className="icon" src={collectionIcon} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        Vacant Rooms
                    </div>
                    <div>
                        {vacantRooms.current.total_vacant}
                    </div>
                    <div>
                        <img className="icon" src={vacantIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className="tenant-room-analytics">
                <div className="line-chart">
                    <h3>Payment Overview</h3>
                    <MyLineChart data={yearlyRevenue.current}></MyLineChart>
                </div>
                <div className="occupancy-chart">
                    <h3>Room Overview</h3>
                    <MyPieChart data={roomOverview.current}></MyPieChart>
                </div>
            </div>
        </section>
    )
}