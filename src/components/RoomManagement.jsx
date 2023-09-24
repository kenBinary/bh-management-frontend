export default function RoomManagement() {
    return (
        <section className="room-management">
            <div className="room-filters">
                <h3>Filter The List</h3>
                <div className="filter-option">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Occupied</label>
                </div>
                <div className="filter-option">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Vacant</label>
                </div>
            </div>
            <div className="room-list">
                <h3>Room List</h3>
                <div className="room-card">
                    <img src="" alt="room-image" />
                    <div className="room-details">
                        <p>Single Room</p>
                        <p>Room Number: 14</p>
                    </div>
                </div>
            </div>
            <div className="room-analytics">
                room analytics
            </div>
        </section>
    )
}