export default function RoomCard({ roomImage, roomName, roomNumber, roomType, roomStatus, roomFee }) {
    let capacity = (roomType === "single room") ? "1" : "2";
    let status = (roomStatus) ? "Occupied" : "Vacant";
    let image = (roomType === "single room") ? roomImage[0] : roomImage[1];
    return (
        <div className="room-card">
            <img src={image} alt="room-image" />
            <div className="room-details">
                <h3 >{roomName}</h3>
                <div className="room-info">
                    <p>Room Number: {roomNumber}</p>
                    <p>Room Capacity: {capacity}</p>
                    <p>Room Status: {status}</p>
                    <p>Room Price: {roomFee} php</p>
                </div>
                <div className="room-actions">
                    <button>Assign a Tenant</button>
                    <button>Remove a Tenant</button>
                </div>
            </div>
        </div>
    )
}