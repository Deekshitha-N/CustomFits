import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="LandingPage">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Custom Tailoring, Perfect Fit</h1>
                    <p>
                        CustomFits helps you connect with expert tailors to create outfits
                        designed exactly to your measurements and style.
                    </p>
                
                    <div className="hero-buttons">
                        <button className="btn secondary" onClick={() => navigate("/signup")}>Register</button>
                        <button className="btn primary" onClick={() => navigate("/login")}>Login</button>
                    </div>
                    
                </div>
            </section>

            <section className="features-section">
                <h2>Why Choose CustomFits?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Custom Designs</h3>
                        <p>Design outfits that match your personality and occasion.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Perfect Measurements</h3>
                        <p>Accurate fitting using professional measurement techniques.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Expert Tailors</h3>
                        <p>Experienced tailors with premium craftsmanship.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Premium Quality</h3>
                        <p>High-quality fabrics and finishing for every outfit.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
