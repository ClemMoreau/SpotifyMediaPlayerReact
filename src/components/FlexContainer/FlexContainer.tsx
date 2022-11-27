interface FlexContainerProps {
	column?: string;
	flexBasis?: string;
	flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
	flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
	justifyContent?:
		| "flex-start"
		| "flex-end"
		| "center"
		| "space-between"
		| "space-around"
		| "space-evenly";
	alignItems?: "flex-start" | "flex-end" | "center";
	flex?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
	onClick?: () => void;
}

const FlexContainer = (props: FlexContainerProps) => {
	const flexStyle = {
		display: "flex",
		flexBasis: props.flexBasis || "stretch",
		flexDirection: props.flexDirection || "row",
		flexWrap: props.flexWrap || "nowrap",
		justifyContent: props.justifyContent || "center",
		alignItems: props.alignItems || "center",
		flex: props.flex || "0 1 auto",
		...props.style,
	};

	return (
		<div
			style={flexStyle}
			onClick={props.onClick}
		>
			{props.children}
		</div>
	);
};

export default FlexContainer;
