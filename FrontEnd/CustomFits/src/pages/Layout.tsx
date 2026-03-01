import type { ReactNode } from "react";
import "./Layout.css";
import Logo from "../assets/Logo1.png";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    const navigate = useNavigate();
    return (
        <div className="Layout">
            {/* Sidebar */}
            <aside className="sidebar">
                <img className="logo" src={Logo} alt="Logo" />
                <nav className="side-nav-content">
                    <a href="/home">Home</a>
                    <a href="/book">Book Stitching</a>
                    <a href="/measurements">Measurements</a>
                    <a href="/orders">Orders</a>
                    <a href="/profile">Profile</a>
                </nav>
            </aside>

            {/* Main Area */}
            <div className="main-area">
                <header className="header">
                    <span>Welcome, User</span>
                    <button className="logout" onClick={() => navigate("/logout")}>
                        Logout
                    </button>
                </header>

                <main className="content">{props.children}</main>

                <footer className="footer">
                    © 2026 CustomFits. All rights reserved.
                </footer>
            </div>
        </div>
    );
};
