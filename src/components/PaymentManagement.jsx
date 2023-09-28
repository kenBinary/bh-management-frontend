import { useState, useEffect } from "react";
import TableData from "./TableData";
import PaymentPopUp from "./PaymentPopUp";
export default function PaymentManagement() {
    let [currentTable, setCurrentTable] = useState("room-table");
    let [isLoading, setIsLoading] = useState(true);
    let [tableData, setTableData] = useState([]);
    let [showPopUp, setShowPopUp] = useState(false);
    let [selectedDataDetails, setSelectedDataDetails] = useState([]);
    let [selectedData, setSelectedData] = useState("");
    let [popUpType, setPopUpType] = useState("");
    function togglePopUp() {
        setShowPopUp((showPopUp) ? false : true);
    }
    function updateSelectedData(data) {
        setSelectedData(data);
    }

    // gets all fees
    useEffect(() => {
        if (currentTable === "room-table") {
            // room fees
            fetch("http://localhost:3000/roomfee/unpaid", {
                method: "GET"
            }).then(response => {
                return response.json();;
            }).then((data) => {
                setPopUpType("room-table")
                setTableData(data);
                setIsLoading(false)
            });
        }
        else if (currentTable === "utility-table") {
            // utility fees
            fetch("http://localhost:3000/utilityfee/unpaid", {
                method: "GET"
            }).then(response => {
                return response.json();;
            }).then((data) => {
                setPopUpType("utility-table")
                setTableData(data);
                setIsLoading(false)
            });

        }
        else if (currentTable === "necessity-table") {
            // necessity fees
            fetch("http://localhost:3000/necessityfee/unpaid", {
                method: "GET"
            }).then(response => {
                return response.json();;
            }).then((data) => {
                setPopUpType("necessity-table")
                setTableData(data);
                setIsLoading(false)
            });
        }
    }, [currentTable, showPopUp]);

    // gets specific fee record
    useEffect(() => {
        // setIsLoading(true);
        if (popUpType === "room-table") {
            fetch(`http://localhost:3000/roomfee/${selectedData}`, {
                method: "GET"
            }).then(response => {
                return response.json();;
            }).then((data) => {
                setSelectedDataDetails(data[0])
                setIsLoading(false)
            });
        }
        else if (popUpType === "utility-table") {
            fetch(`http://localhost:3000/utilityfee/${selectedData}`, {
                method: "GET"
            }).then(response => {
                return response.json();;
            }).then((data) => {
                setSelectedDataDetails(data[0])
                setIsLoading(false)
            });
        }
        else if (popUpType === "necessity-table") {
            fetch(`http://localhost:3000/necessityfee/${selectedData}`, {
                method: "GET"
            }).then(response => {
                return response.json();;
            }).then((data) => {
                setSelectedDataDetails(data[0])
                setIsLoading(false)
            });
        }
    }, [selectedData]);


    if (isLoading) {
        return (<div>...loading</div>)
    }
    return (
        <section className="payment-management">
            <PaymentPopUp popUpType={popUpType} selectedData={selectedData} selectedDataDetails={selectedDataDetails} showPopUp={showPopUp} togglePopUp={togglePopUp}></PaymentPopUp>
            <div className="upcoming-dues">
                <select onChange={(e) => {
                    setCurrentTable(e.target.value);
                }} defaultValue="room-table" id="payment-type">
                    <option value="room-table">Room</option>
                    <option value="utility-table">Utility</option>
                    <option value="necessity-table">Necessity</option>
                </select>
                <h3>Unpaid Payments</h3>
                <TableData updateSelectedData={updateSelectedData} togglePopUp={togglePopUp} tenantData={tableData}></TableData>
            </div>
            <div className="payment-analytics">
                payment analytics
            </div>
            <div className="recent-payments">
                <h3>Recent Payments</h3>
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
                    </tbody>
                </table>
            </div>
            <div className="paid-analytics">
                paid analytics
            </div>
        </section>
    );
}