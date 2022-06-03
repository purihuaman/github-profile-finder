export const helpHttp = () => {
	const customFetch = (endpoint, options) => {
		const defaultHeader = {
			accept: 'application/json',
		};

		const controller = new AbortController();
		options.signal = controller.signal;
		options.method = options.method || 'GET';
		options.headers = options.headers
			? { ...defaultHeader, ...options.headers }
			: defaultHeader;
		options.body = JSON.stringify(options.body) || false;

		if (!options.body) delete options.body;

		console.log(options);

		setTimeout(() => controller.abort(), 1500);

		return fetch(endpoint, options)
			.then((resp) =>
				resp.ok
					? resp.json()
					: Promise.reject({
							err: true,
							status: resp.status || '00',
							statusText: resp.statusText || 'Ocurrio un error',
					  })
			)
			.catch((err) => err);
	};

	const get = (url, options = {}) => customFetch(url, options);

	const post = (url, options = {}) => {
		options.method = 'post';
		return customFetch(url, options);
	};

	const put = (url, options = {}) => {
		options.method = 'put';
		return customFetch(url, options);
	};

	const del = (url, options = {}) => {
		options.method = 'delete';
		return customFetch(url, options);
	};

	return { get, post, put, del };
};
