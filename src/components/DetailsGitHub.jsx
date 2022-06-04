import { useEffect, useState } from 'react';

import style from '../scss/components/DetailsGitHub.module.scss';
import { FollowGitHub } from './FollowGitHub';
import { RepositoryGitHub } from './RepositoryGitHub';

export const DetailsGitHub = ({
	name,
	login,
	bio,
	followers,
	following,
	numRepos,
	repos,
}) => {
	const [myrepos, setMyrepos] = useState([]);

	useEffect(() => {
		const getRepos = async (repo) => {
			try {
				const response = await fetch(repo);
				const data = await response.json();

				setMyrepos(data);
			} catch (err) {
				console.log(err);
			}
		};

		getRepos(repos);
	}, [repos]);

	return (
		<div className={style.details}>
			<h3 className={style.details__title}>{name || login || 'Anonimous'}</h3>
			<p className={style.details__description}>{bio || 'Developer'}</p>

			<FollowGitHub
				followers={followers}
				following={following}
				numRepos={numRepos}
			/>
			<RepositoryGitHub myrepos={myrepos} />
		</div>
	);
};
