import { NavLink, useNavigate } from "react-router-dom";
import "./SidebarMenu.css";

const SidebarMenu: React.FC = () => {
    const navigate = useNavigate();
	
	return (
		<div className="SidebarMenu">
			<NavLink to="/home" className="link">
				Home
			</NavLink>
			<NavLink to="/find-designer" className="link">
				🎨 Find Designer
			</NavLink>
			<NavLink to="/measurements" className="link">
				📏 My measurements
			</NavLink>
			<NavLink to="/order-history" className="link">
				📦 Order History
			</NavLink>
			<NavLink to="/profile" className="link">
				👤 User Name
			</NavLink>
			<button className="btn primary logout" onClick={() => navigate("/logout")}>
                        Logout
            </button>
			<footer className="footer">
                    © 2026 CustomFits. All rights reserved.
            </footer>
		</div>
	);
};

export default SidebarMenu;
