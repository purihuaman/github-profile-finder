import { useRef } from 'react';

import style from '../scss/components/FormGitHub.module.scss';

export const FormGitHub = ({ getValue }) => {
	const userValueRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		getValue(userValueRef.current.value);
		userValueRef.current.value = '';
		userValueRef.current.focus();
	};

	return (
		<form action='' className={style.form}>
			<div className={style.form__fields}>
				<input
					type='text'
					ref={userValueRef}
					placeholder='Search repository'
					className={style.form__input}
				/>
			</div>

			<div className={style.form__fields}>
				<input
					type='submit'
					value='Search'
					className={`button ${style.form__button}`}
					onClick={handleSubmit}
				/>
			</div>
		</form>
	);
};
