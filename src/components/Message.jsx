export const Message = ({ msg, bg }) => {
	const styles = {
		width: '100%',
		padding: 'var(--n-padding) var(--n-padding)',
		marginBottom: 'var(--n-margin)',
		textAlign: 'center',
		backgroundColor: bg,
		borderRadius: 'var(--bradius)',
		color: 'var(--red-500)',
		border: '1px solid var(--red-500)',
	};

	const text = {
		margin: '0',
	};

	return (
		<div style={styles}>
			<p style={text}>{msg}</p>
		</div>
	);
};
