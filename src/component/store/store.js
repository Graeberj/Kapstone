import create from 'zustand';
import { devtools, redux, persist } from 'zustand/middleware';

export const CREATE_REVIEW = 'CREATE_REVIEW';
export const POSTREVIEW = 'POSTREVIEW';

const reducer = (state, action) => {
	switch (action.type) {
		case CREATE_REVIEW:
			return { review: action.payload };
		case POSTREVIEW:
			return { ...state, review: action.payload };
		default:
			return state;
	}
};

export const useStore = create(persist(devtools(redux(reducer))));
