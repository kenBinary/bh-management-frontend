import tenant from "/public/tenant-management/tenant.svg";
import TableData from "./TableData";
import TenantPopUp from "./TenantPopUp";
import { useEffect, useState } from "react";
export default function TenantManagement() {
    let [tenantList, setTenantList] = useState([]);
    let [tenantNecessity, setTenantNecessity] = useState([]);
    let [tenantAmenity, setTenantAmenity] = useState([]);
    let [tenantDues, setTenantDues] = useState([]);
    let [tenantPaymentHistory, setTenantPaymentHistory] = useState([]);
    let [currentTenant, setCurrentTenant] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let [showPopUp, setShowPopUp] = useState(false);
    let [popUpType, setPopUpType] = useState("");
    let [selectedTenant, setSelectedTenant] = useState("");
    function togglePopUp() {
        if (showPopUp) {
            setShowPopUp(false);
        } else {
            setShowPopUp(true);
        }
    }
    function updateSelectedTenant(tenantObject) {
        setSelectedTenant(tenantObject);
    }
    useEffect(() => {
        fetch("http://localhost:3000/tenant", {
            method: "GET"
        }).then(response => {
            return response.json()
        }).then((data) => {
            setTenantList(data)
            setCurrentTenant(data[0])
        });
        fetch("http://localhost:3000/necessity", {
            method: "GET"
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setTenantNecessity(data);
            setIsLoading(false)
        });
    }, []);
    if (isLoading) {
        return (<div>...loading</div>)
    }
    return (
        <section className="tenant-management">
            <TenantPopUp updateSelectedTenant={updateSelectedTenant} selectedTenant={selectedTenant} showPopUp={showPopUp} togglePopUp={togglePopUp} popUpType={popUpType}></TenantPopUp>
            <aside>
                <div className="tenant-list">
                    <h3>
                        Tenant List
                    </h3>
                    {
                        tenantList.map((element) => {
                            return <div key={element.tenant_id}>{element.first_name + " " + element.last_name}<button id={element.tenant_id} onClick={(e) => {
                                setSelectedTenant({
                                    tenantId: element.tenant_id,
                                    firstName: element.first_name,
                                    lastName: element.last_name,
                                    contact: element.contact_number,
                                    archiveStatus: element.archive_status,
                                    identification: element.identification_number,
                                });
                                setPopUpType("edit");
                                togglePopUp();
                                console.log(selectedTenant)
                            }}>Edit</button></div>
                        })
                    }
                </div>
                <button onClick={() => {
                    setPopUpType("add");
                    togglePopUp();
                }}>Add New Tenant</button>
            </aside>
            <section className="tenant-info">
                <img src={tenant} alt="tenant-image" />
                <div className="tenant-details">
                    <h3>Tenant Information</h3>
                    <div>Full Name: {currentTenant.first_name + " " + currentTenant.last_name}</div>
                    <div>ID Number:</div>
                    <div>Phone Number: {currentTenant.contact_number}</div>
                    <div>Assigned Room:</div>
                    <div>Room Type:</div>
                    <div>Occupancy Status:{(currentTenant.occupancy_stats) ? "Occupying" : "Left"}</div>
                </div>
            </section>
            <section className="tenant-extra-info">
                <select name="" id="">
                    <option value="">Necessities</option>
                    <option value="">Amenities</option>
                    <option value="">Upcoming Dues</option>
                    <option value="">Payment History</option>
                </select>
                <TableData tenantData={tenantNecessity}></TableData>
                {/* <table>
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
                    </tbody>
                </table> */}
            </section>
        </section>
    )
}