import { Link } from "react-router-dom";
import "../styles/nav-bar-style.css";
// images
import dashboard from '/nav-bar/dashboard.svg';
import rooms from '/nav-bar/room.svg';
import tenants from '/nav-bar/tenants.svg';
import payments from '/nav-bar/payments.svg';
import logOut from '/nav-bar/logout.svg';
import systemLogo from '/nav-bar/logo.png';
import { useState } from "react";
export default function NavBar({ updateAuth }) {
    const [selectedLink, setSelectedLink] = useState("Dashboard");
    function handleClick(e) {
        const linkName = e.target.textContent;
        if (linkName !== selectedLink) {
            setSelectedLink(linkName);
        }
    }
    return (
        <nav>
            <div className="system-logo">
                <img src={systemLogo} alt="system logo" />
                Roomster
            </div>
            <ul>
                <li className={(selectedLink === "Dashboard") ? "selected-link" : ""}>
                    <Link to="/" onClick={handleClick}>
                        <img src={dashboard} alt="system logo" />
                        Dashboard
                    </Link>
                </li>
                <li className={(selectedLink === "Rooms") ? "selected-link" : ""}>
                    <Link to="/rooms" onClick={handleClick}>
                        <img src={rooms} alt="system logo" />
                        Rooms
                    </Link>
                </li>
                <li className={(selectedLink === "Tenants") ? "selected-link" : ""}>
                    <Link to="/tenants" onClick={handleClick}>
                        <img src={tenants} alt="system logo" />
                        Tenants
                    </Link>
                </li>
                <li className={(selectedLink === "Payments") ? "selected-link" : ""}>
                    <Link to="/payments" onClick={handleClick}>
                        <img src={payments} alt="system logo" />
                        Payments
                    </Link>
                </li>
            </ul>
            <div className="user-actions">
                <div onClick={() => {
                    updateAuth(false);
                }}>
                    <img src={logOut} alt="system logo" />
                </div>
            </div>
        </nav>
    );
}