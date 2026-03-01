import classNames from "classnames";
import "./InputField.css";
import React from "react";

interface InputFieldProps{
	id: string;
    className?: string;
    placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	type: string;
	required?: boolean;
	name?: string;
}

const InputField = ({ id, className, placeholder, onChange, value, type, required, name }: InputFieldProps) => {
    return (
        <input
            id={id}
            className={classNames("InputField", className)}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e)}
            name={name}
            required={required}
        />
    );
};

export default InputField;