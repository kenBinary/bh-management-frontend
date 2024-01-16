import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MyPieChart from "../components/MyPieChart";
import ReportCard from "../components/dashboard/ReportCard";
// images
import collectionIcon from "/dashboard/collection.svg";
import revenueIcon from "/dashboard/revenue.svg";
import tenantIcon from "/dashboard/tenant.svg";
import vacantIcon from "/dashboard/vacant.svg";
import '../styles/dashboard-style.css';

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
    let [data, setData] = useState({
        monthlyCashIn: 0,
        totalTenants: [],
        rentCollections: 0,
        vacantRooms: 0,
        yearlyRevenue: 0,
        roomOverview: 0,
    });
    useEffect(() => {
        // get monthly revenue
        const monthlyRevenue = fetch("http://localhost:3000/analytics/monthly-revenue", {
            method: "GET"
        }).then((response) => {
            return response.json();
        });
        const yearlyRevenue = fetch("http://localhost:3000/analytics/yearly-revenue", {
            method: "GET"
        }).then((response) => {
            return response.json();
        });
        const totalTenants = fetch("http://localhost:3000/analytics/total-tenants", {
            method: "GET"
        }).then((response) => {
            return response.json();
        });
        const vacantRooms = fetch("http://localhost:3000/analytics/vacant-rooms", {
            method: "GET"
        }).then((response) => {
            return response.json();
        });
        const rentCollections = fetch("http://localhost:3000/analytics/rent-collection", {
            method: "GET"
        }).then((response) => {
            return response.json();
        });
        const roomOverview = fetch("http://localhost:3000/analytics/room-overview", {
            method: "GET"
        }).then((response) => {
            return response.json();
        });
        Promise.allSettled([
            monthlyRevenue, yearlyRevenue,
            totalTenants, vacantRooms,
            rentCollections, roomOverview
        ]).then((response) => {
            setData({
                monthlyCashIn: response[0].value.revenue,
                totalTenants: response[2].value.total_tenants,
                rentCollections: response[4].value.total,
                vacantRooms: response[3].value.total_vacant,
                yearlyRevenue: response[1].value,
                roomOverview: response[5].value,
            });
        }).finally(() => {
            setDidMount(true);
        });
    }, []);
    if (!didMount) {
        return <div>Loading...</div>;
    }
    return (
        <section className="dashboard">
            <div className="stat-summary">
                <ReportCard name={"Monthly Cash-In"} data={`₱ ${data.monthlyCashIn}`} icon={revenueIcon}></ReportCard>
                <ReportCard name={"Total Tenants"} data={data.totalTenants} icon={tenantIcon}></ReportCard>
                <ReportCard name={"Rent Collections"} data={data.rentCollections} icon={collectionIcon}></ReportCard>
                <ReportCard name={"Vacant Rooms"} data={data.vacantRooms} icon={vacantIcon}></ReportCard>
            </div>
            <div className="tenant-room-analytics">
                <div className="line-chart">
                    <h3>{new Date().getFullYear()} Payment Overview</h3>
                    <MyLineChart data={data.yearlyRevenue}></MyLineChart>
                </div>
                <div className="occupancy-chart">
                    <h3>Room Overview</h3>
                    <MyPieChart data={data.roomOverview}></MyPieChart>
                </div>
            </div>
        </section>
    );
}