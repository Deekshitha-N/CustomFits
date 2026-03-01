import classNames from "classnames";
import "./InputSelect.css";

interface InputSelectProps {
	id: string;
	className?: string;
	name: string;
	options: { value: string; label: string }[];
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	required?: boolean;
}

const InputSelect: React.FC<InputSelectProps> = ({
    id,
	className,
    name,
    options,
    value,
    onChange,
    required,
}) => {
    return (
		<select
			id={id}
			className={classNames("InputSelect", className)}
			name={name}
			value={value}
			onChange={onChange}
			required={required}
		>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
    );
};

export default InputSelect;