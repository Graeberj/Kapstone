import create from 'zustand';
import { devtools, redux, persist } from 'zustand/middleware';

export const POSTREVIEW = 'POSTREVIEW';
export const GET_REVIEW = 'GET_REVIEW';

const reducer = (state, action) => {
	switch (action.type) {
		case POSTREVIEW:
			return { ...state, review: action.payload };
		default:
			return state;
	}
};

export const useStore = create(persist(devtools(redux(reducer))));
