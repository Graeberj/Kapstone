import create from 'zustand';
import { devtools, redux, persist } from 'zustand/middleware';

export const POSTMESSAGES = 'POSTMESSAGES';

const reducer = (state, action) => {
	switch (action.type) {
		case POSTMESSAGES:
			return { messages: action.payload };
		default:
			return state;
	}
};

export const useStore = create(persist(devtools(redux(reducer))));
