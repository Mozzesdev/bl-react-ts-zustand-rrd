import { create } from "zustand";
import { createUiSlice, type CombinedState } from "./slices/ui-slices";
import { createAuthSlice, type AuthSlice } from "./slices/auth.slice";

export type AppState = CombinedState & AuthSlice;

export const useAppStore = create<AppState>()((...a) => ({
  ...createUiSlice(...a),
  ...createAuthSlice(...a),
}));
