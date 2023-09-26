import { useEffect, useState } from "react";
export default function RoomPopUp({ removeTenant, popUpType, roomInfo, isActive, togglePopUp }) {
    let [tenantList, setTenantList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/tenant", {
            method: "GET"
        }).then(response => {
            return response.json()
        }).then((data) => {
            setTenantList(data)
        });
    }, [])
    if (popUpType === "remove") {
        return (
            <div className={"pop-up-background" + ((isActive) ? " " : " hide")}>
                <div className="remove">
                    <div className="pop-up-type">
                        <h3>Remove Tenant</h3>
                        <div>X</div>
                    </div>
                    <select name="tenant-name" id="tenant-list">
                        {
                            tenantList.map((element) => {
                                return <option key={element.tenant_id} value={element.tenant_id}>{element.first_name + " " + element.last_name}</option>
                            })
                        }
                    </select>
                    <input type="text" value={roomInfo.roomNumber || ''} name="" id="" placeholder="Room Number" readOnly />
                    <div className="room-action">
                        <input type="submit" value="Remove" />
                        <button type="button" onClick={togglePopUp}>Back</button>
                    </div>
                </div>
            </div >
        )
    }
    return (
        <div className={"pop-up-background" + ((isActive) ? " " : " hide")}>
            <div>
                <div className="pop-up-type">
                    <h3>Assign Tenant</h3>
                    <div>X</div>
                </div>
                <select name="tenant-name" id="tenant-list">
                    {
                        tenantList.map((element) => {
                            return <option key={element.tenant_id} value={element.tenant_id}>{element.first_name + " " + element.last_name}</option>
                        })
                    }
                </select>
                <input type="text" value={roomInfo.roomType || ''} name="" id="" placeholder="Room Type" readOnly />
                <input type="text" value={roomInfo.roomNumber || ''} name="" id="" placeholder="Room Number" readOnly />
                <input type="text" value={roomInfo.roomPrice || ''} name="" id="" placeholder="Room Price" readOnly />
                <div className="room-utility">
                    <div>
                        <input type="checkbox" disabled="disabled" id="water" value="Water" checked />
                        <label htmlFor="water">Water</label>
                    </div>
                    <div>
                        <input type="checkbox" disabled="disabled" name="electricity" id="electricity" value="Electricity" checked />
                        <label htmlFor="electricity">Electricity</label>
                    </div>
                    <div>
                        <input type="checkbox" name="internet" id="internet" />
                        <label htmlFor="internet">Internet</label>
                    </div>
                </div>
                <div className="room-action">
                    <input type="submit" value="Assign" />
                    <button type="button" onClick={togglePopUp}>Back</button>
                </div>
            </div>
        </div >
    )
}