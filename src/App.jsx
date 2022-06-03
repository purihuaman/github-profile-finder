import { SearchGitHub } from './components/SearchGitHub';

import style from './scss/layout/App.module.scss';

function App() {
	return (
		<main className={style.app}>
			<h2 className={style.app__title}>Github profile finder</h2>
			<SearchGitHub />
		</main>
	);
}

export default App;
