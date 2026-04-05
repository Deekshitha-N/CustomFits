import "./HomePage.css";
import Card from "../components/common/Card/Card";
import InputField from "../components/common/InputField/InputField";
import { useState } from "react";

export default function HomePage() {
    const [searchText, setSearchText] = useState("");

    return (
        <div className="HomePage">
            <div className="search-container">
                <div className="search-wrapper">
                    <i className="fas fa-search search-icon"></i>
                    <InputField
                        id="search-input"
                        type="text"
                        value={searchText}
                        placeholder="Search for bridal designers, suit merchants, or fabric types..."
                        className="search-input"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <button className="search-button">Search Designers</button>
            </div>

            <section className="designer-section">
                <div className="designer-header">Discover Designers</div>
                <div className="designer-grid">

    {/* Men's Suits - Professional Suit */}
    <Card 
        imageUrl="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800&auto=format&fit=crop" 
        companyName="Sharp Suits Tailoring" 
        rating={3.0} 
        specialty="Men's Suits" 
    />

    {/* Fabric & Textiles - Sewing/Fabric theme */}
    <Card 
        imageUrl="https://images.unsplash.com/photo-1550524514-9636ed8364e0?q=80&w=800&auto=format&fit=crop" 
        companyName="Fabric Haven" 
        rating={4.7} 
        specialty="Fabrics & Textiles" 
    />

    {/* Additional Bridal */}
    <Card 
        imageUrl="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop" 
        companyName="Couture Vows" 
        rating={4.8} 
        specialty="Bridal Wear" 
    />

    {/* Additional Suit (Modern Look) */}
    <Card 
        imageUrl="https://images.unsplash.com/photo-1594932224010-75f2a77848f2?q=80&w=800&auto=format&fit=crop" 
        companyName="The Gentry" 
        rating={0} 
        specialty="Men's Suits" 
    />

    {/* Additional Fabric (Close-up texture) */}
    <Card 
        imageUrl="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop" 
        companyName="Silk & Thread" 
        rating={1} 
        specialty="Fabrics & Textiles" 
    />

       <Card 
        imageUrl="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop" 
        companyName="Elegant Bridal Co." 
        rating={4.8} 
        specialty="Bridal Wear" 
    />
                </div>


            </section>
        </div>
    );
}
