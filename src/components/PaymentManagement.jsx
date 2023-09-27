import { useState, useEffect } from "react";
import TableData from "./TableData";
export default function PaymentManagement() {
    let [currentTable, setCurrentTable] = useState("room-table");
    let [isLoading, setIsLoading] = useState(true);
    let [tableData, setTableData] = useState([]);
    // gets unpaid fees
    useEffect(() => {
        if (currentTable === "room-table") {
            // room fees
            fetch("http://localhost:3000/roomfee/unpaid", {
                method: "GET"
            }).then(response => {
                return response.json();;
            }).then((data) => {
                // setRoomFees(data);
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
                // setUtilityFees(data);
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
                // setNecessityFees(data);
                setTableData(data);
                setIsLoading(false)
            });
        }
    }, [currentTable]);
    if (isLoading) {
        return (<div>...loading</div>)
    }
    return (
        <section className="payment-management">
            <div className="upcoming-dues">
                <select onChange={(e) => {
                    setCurrentTable(e.target.value);
                }} defaultValue="room-table" id="payment-type">
                    <option value="room-table">Room</option>
                    <option value="utility-table">Utility</option>
                    <option value="necessity-table">Necessity</option>
                </select>
                <h3>Unpaid Payments</h3>
                <TableData tenantData={tableData}></TableData>
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