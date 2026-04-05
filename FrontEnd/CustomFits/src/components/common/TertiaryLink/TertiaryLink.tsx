const TertiaryLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
	return (
		<a href={to} className="TertiaryLink">
			{children}
		</a>
	);
};

export default TertiaryLink;