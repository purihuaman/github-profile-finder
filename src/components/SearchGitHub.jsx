import { useEffect, useState } from 'react';

import { DetailsGitHub } from './DetailsGitHub';
import { FormGitHub } from './FormGitHub';
import { PhotoGitHub } from './PhotoGitHub';

import style from '../scss/components/SearchGihub.module.scss';

const API = 'https://api.github.com/users/';

export const SearchGitHub = () => {
	const [userValue, setuserValue] = useState('');
	const [user, setUser] = useState({});

	const getValue = (value) => setuserValue(value);

	useEffect(() => {
		const getUsers = async (username) => {
			try {
				const response = await fetch(API + username);
				const data = await response.json();
				console.log(data);
				const {
					id,
					avatar_url: avatar,
					name,
					login,
					bio,
					followers,
					following,
					public_repos: numRepos,
					repos_url: repos,
				} = data;

				setUser({
					id,
					avatar,
					name,
					login,
					bio,
					followers,
					following,
					numRepos,
					repos,
				});
			} catch (err) {
				console.log(err);
			}
		};

		getUsers(userValue === '' ? 'pvrihuaman' : userValue);
	}, [userValue]);

	return (
		<div className={style.card}>
			<div className={style.card__item}>
				<FormGitHub getValue={getValue} />
			</div>

			<div className={style.card__item}>
				{!user ? (
					<div>No hay usuario</div>
				) : (
					<>
						<PhotoGitHub photo={user.avatar} author={user.name} />
						<DetailsGitHub
							name={user.name}
							login={user.login}
							bio={user.bio}
							followers={user.followers}
							following={user.following}
							numRepos={user.numRepos}
							repos={user.repos}
						/>
					</>
				)}
			</div>
		</div>
	);
};
