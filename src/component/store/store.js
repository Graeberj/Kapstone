import create from 'zustand';
import { devtools, redux, persist } from 'zustand/middleware';

export const useStore = create(persist(devtools(redux)));
