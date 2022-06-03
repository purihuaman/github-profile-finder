export const Message = ({ msg, bg }) => {
	const styles = {
		padding: '.5rem 1rem',
		marginBottom: '1rem',
		textAlign: 'center',
		backgroundColor: bg,
		borderRadius: '.28rem',
		border: '1px solid #ff375f',
	};

	return (
		<div style={styles}>
			<p>{msg}</p>
		</div>
	);
};
