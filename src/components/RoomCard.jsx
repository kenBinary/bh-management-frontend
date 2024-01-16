export default function RoomCard({ roomInfo, removeTenant, togglePopUp, popUpType, onAssign, roomImage }) {
    let capacity = (roomInfo.room_type === "single room") ? "1" : "2";
    let status = (roomInfo.room_status) ? "Occupied" : "Vacant";
    let image = (roomInfo.room_type === "single room") ? roomImage[0] : roomImage[1];
    let isFull = (roomInfo.room_type === "double room" && roomInfo.headcount < 2) ? false : true;
    return (
        <div className="room-card">
            <img src={image} alt="room-image" />
            <div className="room-details">
                <h3 >{roomInfo.room_type}</h3>
                <div className="room-info">
                    <p>Room Number: {roomInfo.room_number}</p>
                    <p>Room Capacity: {capacity}</p>
                    <p>Room Status: {status}</p>
                    <p>Room Price: {roomInfo.room_fee} php</p>
                </div>
                <div className="room-actions">
                    <button id="assign-button" onClick={(e) => {
                        onAssign(roomInfo.room_type, roomInfo.room_number, roomInfo.room_fee);
                        popUpType(e.target.id);
                        togglePopUp();
                    }}><span>Assign a Tenant</span></button>
                    <button id="remove-button" onClick={(e) => {
                        removeTenant(roomInfo.room_number);
                        popUpType(e.target.id);
                        togglePopUp();
                    }}><span>Remove a Tenant</span></button>
                </div>
            </div>
        </div >
        // <div className="room-card">
        //     <img src={image} alt="room-image" />
        //     <div className="room-details">
        //         <h3 >{roomName}</h3>
        //         <div className="room-info">
        //             <p>Room Number: {roomNumber}</p>
        //             <p>Room Capacity: {capacity}</p>
        //             <p>Room Status: {status}</p>
        //             <p>Room Price: {roomFee} php</p>
        //         </div>
        //         <div className="room-actions">
        //             <button id="assign-button" onClick={(e) => {
        //                 onAssign(roomType, roomNumber, roomFee);
        //                 popUpType(e.target.id);
        //                 togglePopUp();
        //             }}><span>Assign a Tenant</span></button>
        //             <button id="remove-button" onClick={(e) => {
        //                 removeTenant(roomNumber);
        //                 popUpType(e.target.id);
        //                 togglePopUp();
        //             }}><span>Remove a Tenant</span></button>
        //         </div>
        //     </div>
        // </div >
    );
}