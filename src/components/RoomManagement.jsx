import singleBed from "/room-management/single-bed.png"
import doubleBed from "/room-management/double-bed.png"
import RoomCard from "./RoomCard";
import RoomPopUp from "./RoomPopUp";
import { useEffect, useState } from "react";
function RoomManagement() {
    let [roomList, setRoomList] = useState([]);
    let [selectedRoom, setSelectedRoom] = useState({});
    let [showPopUp, setShowPopUp] = useState(false);
    let [popUpType, setPopUpType] = useState("assign");
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
    // 
    return (
        <section className="room-management">
            <div className="room-filters">
                <h3>Filter The List</h3>
                <h5>Room Status</h5>
                <div className="filter-option">
                    <input type="radio" name="room-status" id="" />
                    <label htmlFor="">Occupied</label>
                </div>
                <div className="filter-option">
                    <input type="radio" name="room-status" id="" />
                    <label htmlFor="">Vacant</label>
                </div>
                <h5>Room Price</h5>
                <div className="filter-option">
                    <input type="radio" name="room-price" id="" />
                    <label htmlFor="">2500.00 php</label>
                </div>
                <div className="filter-option">
                    <input type="radio" name="room-price" id="" />
                    <label htmlFor="">3500.00 php</label>
                </div>
                <h5>Room Type</h5>
                <div className="filter-option">
                    <input type="radio" name="room-type" id="" />
                    <label htmlFor="">Single Room</label>
                </div>
                <div className="filter-option">
                    <input type="radio" name="room-type" id="" />
                    <label htmlFor="">Double Room</label>
                </div>
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
                room analytics
            </div>
        </section>
    )
}
export default RoomManagement;