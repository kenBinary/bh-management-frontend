import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <nav>
            <div className="system-logo">
                <img src="./src/assets/nav-bar/system-logo.svg" alt="system logo" />
                BMS
            </div>
            <ul>
                <li>
                    <Link to="/dashboard">
                        <img src="./src/assets/nav-bar/dashboard.svg" alt="system logo" />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/rooms">
                        <img src="./src/assets/nav-bar/room.svg" alt="system logo" />
                        Rooms
                    </Link>
                </li>
                <li>
                    <Link to="/tenants">
                        <img src="./src/assets/nav-bar/tenants.svg" alt="system logo" />
                        Tenants
                    </Link>
                </li>
                <li>
                    <Link to="/payments">
                        <img src="./src/assets/nav-bar/payments.svg" alt="system logo" />
                        Payments
                    </Link>
                </li>
            </ul>
            <div className="user-actions">
                <div>
                    <img src="./src/assets/nav-bar/calendar.svg" alt="system logo" />
                </div>
                <div>
                    <img src="./src/assets/nav-bar/notification.svg" alt="system logo" />
                </div>
                <div>
                    <img src="./src/assets/nav-bar/logout.svg" alt="system logo" />
                </div>
            </div>
        </nav>
    )
}