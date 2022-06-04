import style from '../scss/components/RepositoryGitHub.module.scss';
import { Message } from './Message';

export const RepositoryGitHub = ({ myrepos }) => {
	return (
		<div className={style.repos}>
			<h4 className={style.repos__title}>Repositiorios</h4>

			<div className={style.repos__content}>
				{myrepos.length > 0 ? (
					myrepos.slice(0, 10).map((repo) => (
						<a
							href={repo.svn_url}
							key={repo.id}
							title={repo.full_name}
							className={style.repos__item}
							target='_blank'
							rel='nofollow noopener noreferrer'
						>
							{repo.name}
						</a>
					))
				) : (
					<Message msg='Aún no hay repositorios!.' bg='var(--red-200)' />
				)}
			</div>
		</div>
	);
};
