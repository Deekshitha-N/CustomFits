import "./Layout.css";
import SidebarMenu from "../components/layout/SidebarMenu";
import { Outlet } from "react-router-dom";
import Logo from "../../public/Logo.png";
import { useState } from "react";
import { useUser } from "../context/UserContext";

export default function Layout() {
    const [collapsed, setCollapsed] = useState(false);
    const userContext = useUser();

    return (
        userContext.user ? (
            <div className="Layout">
                <aside className={`sidebar${collapsed ? " collapsed" : ""}`}>
                    <div className="logo-container">
                        <img className="logo" src={Logo} alt="Company Logo" />
                    </div>
                    <nav className="side-nav-content">
                        <SidebarMenu />
                    </nav>
                    <div className="sidebar-footer">
                    <button className="logout-btn">Logout</button>
                </div>
            </aside>

            <div className="main-container">
                <header className="top-header">
                    <h1 className="welcome-text">Welcome back, {userContext.user?.name}</h1>
                    <div className="user-profile">
                        {/* Avatar placeholder */}
                        <div className="avatar">U</div>
                    </div>
                </header>

                <main className="content-viewport">
                    <Outlet />
                </main>
            </div>
        </div>
        ) : <></>
    );
};
