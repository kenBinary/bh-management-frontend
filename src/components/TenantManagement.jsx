import tenant from "/public/tenant-management/tenant.svg";
export default function TenantManagement() {
    return (
        <section className="tenant-management">
            <aside>
                <div className="tenant-list">
                    <h3>
                        Tenant List
                    </h3>
                    <div>
                        1.Some Name
                        <button>Edit</button>
                    </div>
                    <div>
                        1.Some Name
                        <button>Edit</button>
                    </div>
                    <div>
                        1.Some Name
                        <button>Edit</button>
                    </div>
                </div>
                <button>Add New Tenant</button>
            </aside>
            <section className="tenant-info">
                <img src={tenant} alt="tenant-image" />
                <div className="tenant-details">
                    <h3>Tenant Information</h3>
                    <div>Full Name:</div>
                    <div>ID Number:</div>
                    <div>Phone Number</div>
                    <div>Assigned Room:</div>
                    <div>Room Type:</div>
                    <div>Occupancy Status:</div>
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
                    <thead>
                        <tr>
                            <th>some heading</th>
                            <th>some heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                        <tr>
                            <td>some data</td>
                            <td>some data</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>
    )
}