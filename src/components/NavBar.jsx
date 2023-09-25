import { Link } from "react-router-dom";
import systemLogo from "/nav-bar/system-logo.svg";
import dashboard from '/nav-bar/dashboard.svg';
import rooms from '/nav-bar/room.svg';
import tenants from '/nav-bar/tenants.svg';
import payments from '/nav-bar/payments.svg';
import calendar from '/nav-bar/calendar.svg';
import notification from '/nav-bar/notification.svg';
import logOut from '/nav-bar/logout.svg';
export default function NavBar() {
    return (
        <nav>
            <div className="system-logo">
                <img src={systemLogo} alt="system logo" />
                BMS
            </div>
            <ul>
                <li>
                    <Link to="/">
                        <img src={dashboard} alt="system logo" />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/rooms">
                        <img src={rooms} alt="system logo" />
                        Rooms
                    </Link>
                </li>
                <li>
                    <Link to="/tenants">
                        <img src={tenants} alt="system logo" />
                        Tenants
                    </Link>
                </li>
                <li>
                    <Link to="/payments">
                        <img src={payments} alt="system logo" />
                        Payments
                    </Link>
                </li>
            </ul>
            <div className="user-actions">
                <div>
                    <img src={calendar} alt="system logo" />
                </div>
                <div>
                    <img src={notification} alt="system logo" />
                </div>
                <div>
                    <img src={logOut} alt="system logo" />
                </div>
            </div>
        </nav>
    )
}