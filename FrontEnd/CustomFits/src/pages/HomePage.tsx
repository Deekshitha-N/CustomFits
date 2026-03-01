import React from "react";
import "./HomePage.css";

export default function HomePage() {
    return (
        <div className="HomePage">

            {/* Welcome */}
            <div className="welcome">
                <h2>Welcome back 👋</h2>
                <p>What would you like to do today?</p>
            </div>

            {/* Quick Actions */}
            <div className="actions">
                <div className="action-card">📏 Add Measurements</div>
                <div className="action-card">🧵 Book Stitching</div>
                <div className="action-card">📦 My Orders</div>
                <div className="action-card">🎨 Designs</div>
            </div>

            {/* Active Orders */}
            <div className="section">
                <h3>Active Orders</h3>
                <div className="order-card">
                    <p><strong>Order #1245</strong></p>
                    <p>Status: In Stitching</p>
                    <p>Delivery: 18 Jan</p>
                </div>
            </div>

            {/* Profile Status */}
            <div className="section alert">
                <p>⚠ Complete your measurements to place orders faster</p>
            </div>

        </div>
    );
}
