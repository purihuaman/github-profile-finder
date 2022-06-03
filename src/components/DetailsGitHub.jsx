import { useEffect, useState } from 'react';

import style from '../scss/components/DetailsGitHub.module.scss';

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
			<h3 className={style.details__title}>{name || login}</h3>
			<p className={style.details__description}>{bio || 'Developer'}</p>

			<div className='follow'>
				<span className='follow__item'>
					{followers || 0} <b>Followers</b>
				</span>
				<span className='follow__item'>
					{following || 0} <b>Following</b>
				</span>
				<span className='follow__item'>
					{numRepos || 0} <b>Repos</b>
				</span>
			</div>

			<div className='repos'>
				<h4 className='repos__title'>Repositiorios</h4>
				<div className='repos__content'>
					{myrepos.length > 0 ? (
						myrepos.slice(0, 10).map((repo) => (
							<a
								href={repo.svn_url}
								key={repo.id}
								title={repo.full_name}
								className='repos__item'
								rel='nofollow noopener noreferrer'
								target='_blank'
							>
								{repo.name}
							</a>
						))
					) : (
						<span className='repos__text'>Aún no hay repositorios!.</span>
					)}
				</div>
			</div>
		</div>
	);
};
