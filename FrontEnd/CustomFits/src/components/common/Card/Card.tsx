import "./Card.css";

interface CardProps {
    imageUrl: string;
    companyName: string;
    rating: number;
	specialty: string;
}

const Card = ({ imageUrl, companyName, rating, specialty }: CardProps) => {
    const renderStars = (count: number) => {
        return "★".repeat(Math.floor(count)) + "☆".repeat(5 - Math.floor(count));
    };

    return (
        <div className="Card">
            <div className="card-image-wrapper">
                <img src={imageUrl} alt={companyName} className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="card-company">{companyName}</h3>
                <div className="card-rating">{renderStars(rating)}</div>
                <p className="card-specialty">Specialty: {specialty}</p>
                
                <button className="card-btn">View Portfolio</button>
            </div>
        </div>
    );
};

export default Card;
