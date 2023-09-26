import { useEffect, useState } from "react";
export default function RoomPopUp({ popUpType, roomInfo, isActive, togglePopUp }) {
    let [tenantList, setTenantList] = useState([]);
    const tenantInfo = {
        room: "0",
        id: "0",
        internet: false
    }
    tenantInfo.room = roomInfo.roomNumber;
    useEffect(() => {
        fetch("http://localhost:3000/tenant", {
            method: "GET"
        }).then(response => {
            return response.json()
        }).then((data) => {
            setTenantList(data)
        });
    }, [])
    function assignTenant(roomNumber, tenantId, internetTrue) {
        fetch("http://localhost:3000/room/assign-room", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                roomNumber: roomNumber,
                tenantId: tenantId,
                internetTrue: internetTrue
            })
        }).catch((error) => {
            console.log(error)
        });
    }
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
                <select name="tenant-name" id="tenant-list" onChange={(e) => {
                    tenantInfo.id = e.target.value;
                }}>
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
                        <input type="checkbox" name="internet" id="internet" value={false} onChange={(e) => {
                            if (tenantInfo.internet) {
                                tenantInfo.internet = false;
                            }
                            else {
                                tenantInfo.internet = true;
                            }
                        }} />
                        <label htmlFor="internet">Internet</label>
                    </div>
                </div>
                <div className="room-action">
                    <input type="submit" value="Assign" onClick={() => {
                        assignTenant(tenantInfo.room, tenantInfo.id, tenantInfo.internet);
                        togglePopUp();
                    }} />
                    <button type="button" onClick={togglePopUp}>Back</button>
                </div>
            </div>
        </div >
    )
}