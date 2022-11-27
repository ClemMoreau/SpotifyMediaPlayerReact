import React from "react";

import styleconfig from "../../config/styleConfig";

interface ButtonProps {
	color?: boolean;
	size?: "sm" | "md" | "lg";
	children?: React.ReactNode;
	onClick?: () => void;
}

const Button = ({ color, size, children, onClick }: ButtonProps) => {
	const buttonStyle = {
		backgroundColor: color
			? styleconfig.colors.primary
			: styleconfig.colors.black,
		color: styleconfig.colors.white,
		width: size ? `${styleconfig.buttonWidth[size]}px` : `15rem`,
		padding: size === "sm" ? "5px 10px" : "15px 25px",
	};

	return (
		<button
			style={buttonStyle}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
