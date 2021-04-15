const API_KEY = '922f447f35d6ccb6a47a1fced73b5c71';

const pageNumber = Math.floor(Math.random() * 500);
export default {
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchDiscovery:
		`/discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=` +
		pageNumber,
};

// need backend URL to add to fech request

export const postMessageRev = (message) => {
	return fetch({
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			// Text: message,
		}),
	}).then((res) => res.json());
};
