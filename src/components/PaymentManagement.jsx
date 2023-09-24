export default function PaymentManagement() {
    return (
        <section className="payment-management">
            <div className="upcoming-dues">
                <p>Upcoming Dues</p>
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
            </div>
            <div className="payment-analytics">
                payment analytics
            </div>
            <div className="recent-payments">
                <p>Recent Payments</p>
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
            </div>
            <div className="paid-analytics">
                paid analytics
            </div>
        </section>
    );
}