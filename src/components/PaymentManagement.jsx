export default function PaymentManagement() {
    return (
        <section className="payment-management">
            <div className="upcoming-dues">
                <h3>Upcoming Dues</h3>
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