import style from '../scss/components/PhotoGitHub.module.scss';

export const PhotoGitHub = ({ photo, author }) => {
	return (
		<div className={style.photo}>
			<div className={style.photo__content}>
				<img
					src={photo || '/assets/icon/photo.svg'}
					alt={author || 'Pedro Purihuaman'}
					className={style.photo__img}
				/>
			</div>
		</div>
	);
};
