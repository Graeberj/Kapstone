const API_KEY = '922f447f35d6ccb6a47a1fced73b5c71';

export default {
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
};

// need backend URL to add to fech request

export const postMessageRev = () => {
	return fetch({
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			Text: message,
		}),
	}).then((res) => res.json());
};
