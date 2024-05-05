// Directory: /app/bears/_store/index.ts

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// State types
interface States {
  bears: number;
}

// Action types
interface Actions {
  increase: () => void;
  decrease: () => void;
}

// useBearStore
export const useBearStore = create(
  persist<States & Actions>(
    (set) => ({
      bears: 0,

      increase: () => set((state) => ({ bears: state.bears + 1 })),
      decrease: () => set((state) => ({ bears: state.bears - 1 })),
    }),
    {
      name: 'bearStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
