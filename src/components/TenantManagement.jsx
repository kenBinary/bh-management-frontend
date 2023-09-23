export default function TenantManagement() {
    return (
        <section className="tenant-management">
            <aside>
                <div className="tenant-list">
                    <div>1.Some Name</div>
                    <div>1.Some Name</div>
                    <div>1.Some Name</div>
                    <div>1.Some Name</div>
                </div>
                <button>Add New Tenant</button>
            </aside>
            <section className="tenant-info">
                <img src="" alt="tenant-image" />
                <div className="tenant-details">
                    <div>Full Name:</div>
                    <div>ID Number:</div>
                    <div>Phone Number</div>
                    <div>Assigned Room:</div>
                    <div>Room Type:</div>
                    <div>Occupancy Status</div>
                </div>
            </section>
            <section className="tenant-extra-info">
                <select name="" id="">
                    <option value="">Necessities</option>
                    <option value="">Amenities</option>
                    <option value="">Upcoming Dues</option>
                    <option value="">Payment History</option>
                </select>
                <table>
                    <tr>
                        <th>some heading</th>
                        <th>some heading</th>
                    </tr>
                    <tr>
                        <td>some data</td>
                        <td>some data</td>
                    </tr>
                </table>
            </section>
        </section>
    )
}