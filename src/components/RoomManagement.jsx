import singleBed from "/room-management/single-bed.png"
import doubleBed from "/room-management/double-bed.png"
import RoomCard from "./RoomCard";
import { useEffect, useState } from "react";
function RoomManagement() {
    let [roomList, setRoomList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/room", {
            method: "GET"
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setRoomList(data);
        });
    }, []);

    return (
        <section className="room-management">
            <div className="room-filters">
                <h3>Filter The List</h3>
                <div className="filter-option">
                    <input type="radio" name="room-status" id="" />
                    <label htmlFor="">Occupied</label>
                </div>
                <div className="filter-option">
                    <input type="radio" name="room-status" id="" />
                    <label htmlFor="">Vacant</label>
                </div>
                <div className="filter-option">
                    <input type="radio" name="room-price" id="" />
                    <label htmlFor="">2500.00 php</label>
                </div>
                <div className="filter-option">
                    <input type="radio" name="room-price" id="" />
                    <label htmlFor="">3500.00 php</label>
                </div>
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
                <h3>ROOM LIST</h3>
                {
                    roomList.map((element) => {
                        return <RoomCard key={element.room_number} roomImage={[singleBed,doubleBed]} roomName={element.room_type} roomNumber={element.room_number} roomType={element.room_type} roomStatus={element.room_status} roomFee={element.room_fee}></RoomCard>
                    })
                }
            </div>
            <div className="room-analytics">
                room analytics
            </div>
        </section>
    )
}
export default RoomManagement;