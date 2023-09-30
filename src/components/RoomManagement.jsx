import singleBed from "/room-management/single-bed.png"
import doubleBed from "/room-management/double-bed.png"
import RoomCard from "./RoomCard";
import RoomPopUp from "./RoomPopUp";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
const SimplePieChart = ({ data }) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    fill="#8884d8"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    legendType="diamond"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};
function RoomManagement() {
    let [didMount, setDidMount] = useState(false);
    let [initialList, setInitialList] = useState([])
    let [roomList, setRoomList] = useState([]);
    let [filteredList, setFilteredList] = useState([]);
    let [filterStatus, setFilterStatus] = useState({
        room: false,
        price: false,
        type: false
    });
    let [selectedRoom, setSelectedRoom] = useState({});
    let [showPopUp, setShowPopUp] = useState(false);
    let [popUpType, setPopUpType] = useState("assign");
    let [roomStatusData, setRoomStatusData] = useState([]);
    const togglePopUp = () => {
        setShowPopUp((showPopUp) ? false : true);
    }
    const togglePopUpType = (id) => {
        if (id === "assign-button") {
            setPopUpType("assign")
        }
        else {
            setPopUpType("remove")
        }
    }
    const removeTenant = (cRoomNumber) => {
        setSelectedRoom({
            roomNumber: cRoomNumber
        });
    }
    const onAssign = (cRoomType, cRoomNumber, cRoomPrice) => {
        setSelectedRoom({
            roomType: cRoomType,
            roomNumber: cRoomNumber,
            roomPrice: cRoomPrice
        })
    }
    function filterList(data, filterType) {
        let x = [];
        // if (filterType === "double room" || filterType === "single room") {
        //     x = data.filter((element) => {
        //         return element.room_type === filterType
        //     });
        // }
        if (filterType === 2700 || filterType === 3500) {
            x = data.filter((element) => {
                return element.room_fee === filterType
            });
        }
        else if (filterType === 0 || filterType === 1) {
            x = data.filter((element) => {
                return element.room_status === filterType
            });
        }
        return x
    }
    // initial render
    useEffect(() => {
        // get room status analytics
        fetch("http://localhost:3000/room/status-analytics", {
            method: "GET"
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setRoomStatusData(data);
        });
        fetch("http://localhost:3000/room", {
            method: "GET"
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setInitialList(data);
        });
    }, []);
    // get list of rooms
    useEffect(() => {
        fetch("http://localhost:3000/room", {
            method: "GET"
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setRoomList(data);
        });
    }, [showPopUp]);

    return (
        <section className="room-management">
            <div className="room-filters">
                <h3>Filter The List</h3>
                <div className="clear-filter">
                    <button onClick={() => {
                        setRoomList(initialList);
                    }}>clear</button>
                </div>
                <h5>Room Status</h5>
                <div className="filter-option">
                    <input type="radio" name="status" id="occupied" value="1" onChange={(e) => {
                        if (filterStatus.room) {
                            let x = filterList(initialList, parseInt(e.target.value))
                            console.log(x)
                            setRoomList(x)
                        } else {
                            let x = filterList(roomList, parseInt(e.target.value))
                            setFilterStatus({
                                ...filterStatus,
                                room: true
                            })
                            setRoomList(x);
                        }
                    }} />
                    <label htmlFor="occupied">Occupied</label>
                </div>
                <div className="filter-option">
                    <input type="radio" name="status" id="vacant" value="0" onChange={(e) => {
                        if (filterStatus.room) {
                            let x = filterList(initialList, parseInt(e.target.value))
                            setRoomList(x)
                        } else {
                            let x = filterList(roomList, parseInt(e.target.value))
                            setFilterStatus({
                                ...filterStatus,
                                room: true
                            })
                            setRoomList(x);
                        }
                    }} />
                    <label htmlFor="vacant">Vacant</label>
                </div>
                <h5>Room Price</h5>
                <div className="filter-option">
                    <input type="radio" name="price" id="single-price" value="2700" onChange={(e) => {
                        if (filterStatus.price) {
                            let x = filterList(initialList, parseInt(e.target.value))
                            setRoomList(x)
                        } else {
                            let x = filterList(roomList, parseInt(e.target.value))
                            setFilterStatus({
                                ...filterStatus,
                                price: true
                            })
                            setRoomList(x);
                        }
                    }} />
                    <label htmlFor="single-price">2700.00 php</label>
                </div>
                <div className="filter-option">
                    <input type="radio" name="price" id="double-price" value="3500" onChange={(e) => {
                        if (filterStatus.price) {
                            let x = filterList(initialList, parseInt(e.target.value))
                            setRoomList(x)
                        } else {
                            let x = filterList(roomList, parseInt(e.target.value))
                            setFilterStatus({
                                ...filterStatus,
                                price: true
                            })
                            setRoomList(x);
                        }
                    }} />
                    <label htmlFor="double-price">3500.00 php</label>
                </div>
                {/* <h5>Room Type</h5> */}
                {/* <div className="filter-option">
                    <input type="radio" name="type" id="single-type" value="single room" onChange={(e) => {
                        if (filterStatus.type) {
                            let x = filterList(initialList, e.target.value);
                            setRoomList(x)
                        } else {
                            let x = filterList(roomList, e.target.value);
                            setFilterStatus({
                                ...filterStatus,
                                type: true
                            })
                            setRoomList(x);
                        }

                    }} />
                    <label htmlFor="single-type">Single Room</label>
                </div> */}
                {/* <div className="filter-option">
                    <input type="radio" name="type" id="double-type" value="double room" onChange={(e) => {
                        if (filterStatus.type) {
                            let x = filterList(initialList, e.target.value);
                            setRoomList(x)
                        } else {
                            let x = filterList(roomList, e.target.value);
                            setFilterStatus({
                                ...filterStatus,
                                type: true
                            })
                            setRoomList(x);
                        }

                    }} />
                    <label htmlFor="double-type">Double Room</label>
                </div> */}
            </div>
            <div className="room-list">
                <RoomPopUp showPopUp={showPopUp} popUpType={popUpType} roomInfo={selectedRoom} isActive={showPopUp} togglePopUp={togglePopUp}></RoomPopUp>
                <h3>ROOM LIST</h3>
                <div className="test-div">
                    {
                        roomList.map((element) => {
                            return <RoomCard removeTenant={removeTenant} togglePopUp={togglePopUp} popUpType={togglePopUpType} onAssign={onAssign} key={element.room_number} roomImage={[singleBed, doubleBed]} roomName={element.room_type} roomNumber={element.room_number} roomType={element.room_type} roomStatus={element.room_status} roomFee={element.room_fee}></RoomCard>
                        })
                    }
                </div>
            </div>
            <div className="room-analytics">
                <div className="room-status">
                    <SimplePieChart data={roomStatusData}></SimplePieChart>
                </div>
            </div>
        </section>
    )
}
export default RoomManagement;