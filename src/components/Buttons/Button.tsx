import React from "react";

import style from "../../config/styleConfig";

interface ButtonProps {
	children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
	return <button>{children}</button>;
};

export default Button;
