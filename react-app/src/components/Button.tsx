interface ButtonProps {
	children: string;
	color?: string;
	onClickFxn?: () => void;
	classNAME?: string;
}

const Button = ({ children, color = 'primary', onClickFxn, classNAME }: ButtonProps) => {
	return (
		<div className={"btn btn-" + color + " " + classNAME} onClick={onClickFxn}>
			{children}
		</div>
	);
};

export default Button;
