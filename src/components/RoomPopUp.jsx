import { useEffect, useState, useRef } from "react";
export default function RoomPopUp({ fetchRoomList, showPopUp, popUpType, roomInfo, togglePopUp, fetchRoomOverview }) {
    let [tenantList, setTenantList] = useState([]);
    let [tenantFromRoom, setTenantFromRoom] = useState([]);
    let tenantInternet = useRef(false);
    let tenantID = useRef(0);
    let tenantRoom = roomInfo.roomNumber;

    // gets tenant list for selectro input
    useEffect(() => {
        if (popUpType === "assign") {
            fetch("http://localhost:3000/tenant/new-tenants", {
                method: "GET"
            }).then(response => {
                return response.json();
            }).then((data) => {
                setTenantList(data);
                if (data.length > 0) {
                    tenantID.current = data[0].tenant_id;
                }
            });
        }
        else {
            const url = `http://localhost:3000/room/${tenantRoom}/tenant`;
            fetch(url, {
                method: "GET"
            }).then(response => {
                return response.json();
            }).then((data) => {
                setTenantFromRoom(data);
                if (data.length > 0) {
                    tenantID.current = data[0].tenant_id;
                }
                else {
                    tenantID.current = 0;
                }
            });
        }
    }, [showPopUp, popUpType, tenantRoom]);
    function assignTenant(roomNumber, tenantId, isInternetTrue) {
        const url = `http://localhost:3000/room/${roomNumber}/assign-room`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                tenantId: tenantId,
                isInternetTrue: isInternetTrue
            })
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Response not ok");
            }
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            togglePopUp();
            fetchRoomList();
            fetchRoomOverview();
        });
    }
    function removeTenant(roomNumber, tenantId) {
        const url = `http://localhost:3000/room/${roomNumber}/remove-room`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                tenantId: tenantId,
            })
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            togglePopUp();
            fetchRoomList();
            fetchRoomOverview();
        });
    }
    if (popUpType === "remove") {
        return (
            <div className={"pop-up-background" + ((showPopUp) ? " " : " hide")}>
                <div className="remove">
                    <div className="pop-up-type">
                        <h3>Remove Tenant</h3>
                        <div onClick={() => {
                            togglePopUp();
                        }}>X</div>
                    </div>
                    <select name="tenant-name" id="tenant-list" onChange={(e) => {
                        tenantID.current = e.target.value;
                        // setTenantID(e.target.value);
                    }}>
                        {
                            tenantFromRoom.map((element) => {
                                return <option key={element.tenant_id} value={element.tenant_id || ''}>{element.first_name + " " + element.last_name}</option>;
                            })
                        }
                    </select>
                    <div className="room-action">
                        <button type="button" onClick={() => {
                            removeTenant(tenantRoom, tenantID.current);
                        }}>Remove</button>
                        <button type="button" onClick={togglePopUp}>Back</button>
                    </div>
                </div>
            </div >
        );
    }
    return (
        <div className={"pop-up-background" + ((showPopUp) ? " " : " hide")}>
            <div>
                <div className="pop-up-type">
                    <h3>Assign Tenant</h3>
                    <div onClick={() => {
                        togglePopUp();
                    }}>X</div>
                </div>
                <select name="tenant-name" onChange={(e) => {
                    tenantID.current = e.target.value;
                    // setTenantID(e.target.value);
                }}>
                    {
                        tenantList.map((element) => {
                            return <option key={element.tenant_id} value={element.tenant_id || ''}>{element.first_name + " " + element.last_name}</option>;
                        })
                    }
                </select>
                <input type="text" value={roomInfo.roomType || ''} placeholder="Room Type" readOnly />
                <input type="text" value={roomInfo.roomNumber || ''} placeholder="Room Number" readOnly />
                <input type="text" value={roomInfo.roomPrice || ''} placeholder="Room Price" readOnly />
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
                        <input type="checkbox" name="internet" id="internet" value={tenantInternet.current} onChange={() => {
                            tenantInternet.current = (tenantInternet.current) ? false : true;
                        }} />
                        <label htmlFor="internet">Internet</label>
                    </div>
                </div>
                <div className="room-action">
                    <button type="button" onClick={() => {
                        assignTenant(tenantRoom, tenantID.current, tenantInternet.current);
                    }}>
                        Assign
                    </button>
                    <button type="button" onClick={togglePopUp}>Back</button>
                </div>
            </div>
        </div >
    );
}