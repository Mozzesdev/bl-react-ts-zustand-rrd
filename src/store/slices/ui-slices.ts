import { type StateCreator } from 'zustand';

export interface UiSlice {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export type CombinedState = UiSlice;

export const uiInitialState: Omit<UiSlice, 'toggleMobileMenu'> = {
    isMobileMenuOpen: false,
};

export const createUiSlice: StateCreator<
  CombinedState,
  [],
  [],
  UiSlice
> = (set) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
});
