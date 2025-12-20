interface AlertwithButtonProps {
	children: string;
    onClose?: () => void;
}

const AlertwithButton = ({ children ,onClose}: AlertwithButtonProps) => {
	return (
		<div
			className="alert alert-warning alert-dismissible fade show"
			role="alert"
		>
			{children}
			<button
				type="button"
				className="btn-close"
                onClick={onClose}
				data-bs-dismiss="alert"
			></button>
		</div>
	);
};

export default AlertwithButton;
