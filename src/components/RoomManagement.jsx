import singleBed from "/room-management/single-bed.png"
import doubleBed from "/room-management/double-bed.png"
import RoomCard from "./RoomCard";
import RoomPopUp from "./RoomPopUp";
import { useEffect, useState, useRef } from "react";
import MyPieChart from "./MyPieChart";
import list from "../scripts/roomList";
function RoomManagement() {
    let [didMount, setDidMount] = useState(false);
    let [roomList, setRoomList] = useState([]);
    let roomListFactory = useRef(null);
    let [getList, setGetList] = useState(true);
    let selectedRoom = useRef({});
    let [showPopUp, setShowPopUp] = useState(false);
    let [popUpType, setPopUpType] = useState("assign");
    let [roomOverview, setRoomOverview] = useState([]);
    let [inputStates, setInputStates] = useState({
        occupied: false,
        vacant: false,
        single: false,
        double: false
    });
    function toggleGetList() {
        setGetList((getList) ? false : true);
    }
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
        selectedRoom.current = ({
            roomNumber: cRoomNumber
        });
    }
    const onAssign = (cRoomType, cRoomNumber, cRoomPrice) => {
        selectedRoom.current = ({
            roomType: cRoomType,
            roomNumber: cRoomNumber,
            roomPrice: cRoomPrice
        })
    }
    // initial render
    useEffect(() => {
        // get room overview analytics
        const promise1 = fetch("http://localhost:3000/analytics/room-overview", {
            method: "GET"
        }).then((response) => {
            return response.json();
        });
        // get initial room list
        const promise2 = fetch("http://localhost:3000/room", {
            method: "GET"
        }).then((response) => {
            return response.json();
        });
        Promise.allSettled([
            promise1, promise2
        ]).then((response) => {
            roomListFactory.current = list(response[1].value);
            setRoomOverview([...response[0].value]);
            setRoomList([...response[1].value]);
            setDidMount(true);
        });
    }, []);
    useEffect(() => {
        if (didMount) {
            const promise1 = fetch("http://localhost:3000/room", {
                method: "GET"
            }).then((response) => {
                return response.json();
            });
            const promise2 = fetch("http://localhost:3000/analytics/room-overview", {
                method: "GET"
            }).then((response) => {
                return response.json();
            });
            Promise.allSettled([
                promise1, promise2
            ]).then((response) => {
                roomListFactory.current = list([...response[0].value]);
                setRoomList([...response[0].value]);
                setRoomOverview([...response[1].value]);
            });
        }
    }, [getList]);
    if (!didMount) {
        return <div>Loading...</div>
    }
    return (
        <section className="room-management">
            <div className="room-filters">
                <h3>
                    Filter
                    <button onClick={() => {
                        toggleGetList();
                        setInputStates({
                            occupied: false,
                            vacant: false,
                            single: false,
                            double: false
                        })
                    }}><span>clear</span></button>
                </h3>
                <h5>Room Status</h5>
                <div className="filter-option">
                    <input checked={inputStates.occupied} type="radio" id="occupied" onChange={(e) => {
                        roomListFactory.current.filterTypeOccupied();
                        setRoomList(roomListFactory.current.getFilteredList());
                        setInputStates({
                            ...inputStates,
                            occupied: (inputStates.occupied) ? false : true,
                            vacant: false
                        })
                    }} />
                    <label htmlFor="occupied">Occupied</label>
                </div>
                <div className="filter-option">
                    <input checked={inputStates.vacant} type="radio" id="vacant" value="0" onChange={(e) => {
                        roomListFactory.current.filterTypeVacant();
                        setRoomList(roomListFactory.current.getFilteredList());
                        setInputStates({
                            ...inputStates,
                            vacant: (inputStates.vacant) ? false : true,
                            occupied: false
                        })
                    }} />
                    <label htmlFor="vacant">Vacant</label>
                </div>
                <h5>Room Price</h5>
                <div className="filter-option">
                    <input checked={inputStates.single} type="radio" name="price" id="single-price" value="2700" onChange={(e) => {
                        roomListFactory.current.filterPrice2k();
                        setRoomList(roomListFactory.current.getFilteredList());
                        setInputStates({
                            ...inputStates,
                            single: (inputStates.single) ? false : true,
                            double: false
                        })
                    }} />
                    <label htmlFor="single-price">2700.00 php</label>
                </div>
                <div className="filter-option">
                    <input checked={inputStates.double} type="radio" name="price" id="double-price" value="3500" onChange={(e) => {
                        roomListFactory.current.filterPrice3k();
                        setRoomList(roomListFactory.current.getFilteredList());
                        setInputStates({
                            ...inputStates,
                            double: (inputStates.double) ? false : true,
                            single: false
                        })
                    }} />
                    <label htmlFor="double-price">3500.00 php</label>
                </div>
            </div>
            <div className="room-list">
                <RoomPopUp toggleGetList={toggleGetList} showPopUp={showPopUp} popUpType={popUpType} roomInfo={selectedRoom.current} togglePopUp={togglePopUp}></RoomPopUp>
                <h3>ROOM LIST</h3>
                <div className="card-container">
                    {
                        roomList.map((element) => {
                            return <RoomCard removeTenant={removeTenant} togglePopUp={togglePopUp} popUpType={togglePopUpType} onAssign={onAssign} key={element.room_number} roomImage={[singleBed, doubleBed]} roomName={element.room_type} roomNumber={element.room_number} roomType={element.room_type} roomStatus={element.room_status} roomFee={element.room_fee}></RoomCard>
                        })
                    }
                </div>
            </div>
            <div className="room-analytics">
                <h3>Room Overview</h3>
                <div className="room-status">
                    <MyPieChart data={roomOverview}></MyPieChart>
                </div>
            </div>
        </section>
    )
}
export default RoomManagement;