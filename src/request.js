const API_KEY = '922f447f35d6ccb6a47a1fced73b5c71';

const pageNumber = Math.floor(Math.random() * 500);
export default {
	fetchDiscovery:
		`/discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=` +
		pageNumber,
	//   fetchMovieDetails: `movie/${movieDetailsId}?api_key=${API_KEY}>&language=en-US`,
};

// need backend URL to add to fech request

export const createMessageRev = (username, title, review) => {
	return fetch({
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: username,
			title: title,
			review: review,
		}),
	}).then((res) => res.json());
};

export const reviewRequest = () => {
	return fetch('message', {}).then((res) => res.json());
};
