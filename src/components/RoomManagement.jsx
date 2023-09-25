import singleBed from "/room-management/single-bed.png"
import doubleBed from "/room-management/double-bed.png"
export default function RoomManagement() {
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
                {}
                <div className="room-card">
                    <img src={singleBed} alt="room-image" />
                    <div className="room-details">
                        <h3>Single Room</h3>
                        <div className="room-info">
                            <p>Room Number: 14</p>
                            <p>Room Capacity: 1 </p>
                            <p>Room Status: Occupied</p>
                            <p>Room Price: 2500.00 php</p>
                        </div>
                        <div className="room-actions">
                            <button>Assign a Tenant</button>
                            <button>Remove a Tenant</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="room-analytics">
                room analytics
            </div>
        </section>
    )
}