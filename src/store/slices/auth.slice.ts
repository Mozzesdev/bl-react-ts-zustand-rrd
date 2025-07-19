import apiClient from '@/lib/api-client';
import type { LoginCredentials, User } from '@/types/User';
import { type StateCreator } from 'zustand';

export interface AuthState {
  status: 'idle' | 'loading' | 'authenticated' | 'unauthenticated';
  user: User | null;
  token: string | null;
}

export interface AuthActions {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  initializeAuth: () => void;
}

export type AuthSlice = AuthState & AuthActions;

export const createAuthSlice: StateCreator<AuthSlice,[],[], AuthSlice> = (set) => ({
  status: 'idle',
  user: null,
  token: null,
  login: async (credentials) => {
    set({ status: 'loading' });
    try {
      const { user, token } = await api.login(credentials);
      set({ status: 'authenticated', user, token });
    } catch (error) {
      set({ status: 'unauthenticated', user: null, token: null });
      throw error;
    }
  },
  logout: () => {
    set({ status: 'unauthenticated', user: null, token: null });
  },
  initializeAuth: () => {
  },
});