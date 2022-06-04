import style from '../scss/components/FollowGitHub.module.scss';

export const FollowGitHub = ({ followers, following, numRepos }) => {
	return (
		<div className={style.follow}>
			<span className={style.follow__item}>
				{followers || 0} <b>Followers</b>
			</span>
			<span className={style.follow__item}>
				{following || 0} <b>Following</b>
			</span>
			<span className={style.follow__item}>
				{numRepos || 0} <b>Repos</b>
			</span>
		</div>
	);
};
