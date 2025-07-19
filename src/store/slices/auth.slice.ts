import { authService } from '@/services/auth.service';
import type { LoginCredentials, User } from '@/types/User';
import { type StateCreator } from 'zustand';
import apiClient from '@/lib/api-client';

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading' | 'idle';

export interface AuthState {
  status: AuthStatus;
  user: User | null;
  token: string | null;
  error: string | null;
}

export interface AuthActions {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  initializeAuth: () => void;
  clearAuthError: () => void;
}

export type AuthSlice = AuthState & AuthActions;

export const authInitialState: AuthState = {
  status: 'idle',
  user: null,
  token: null,
  error: null,
};

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (set) => ({
  ...authInitialState,

  login: async (credentials) => {
    set({ status: 'loading', error: null });
    try {
      const { user, token } = await authService.login(credentials);
      localStorage.setItem('authToken', token);
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      set({ status: 'authenticated', user, token, error: null });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error desconocido';
      set({ ...authInitialState, status: 'unauthenticated', error: errorMessage });
      throw new Error(errorMessage);
    }
  },

  logout: () => {
    localStorage.removeItem('authToken');
    delete apiClient.defaults.headers.common['Authorization'];
    set({ ...authInitialState, status: 'unauthenticated' });
  },

  initializeAuth: () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      set({
        token,
        status: 'authenticated',
        user: { id: '1', name: 'Usuario Recuperado', email: 'test@example.com' },
        error: null,
      });
    } else {
      set({ status: 'unauthenticated' });
    }
  },

  clearAuthError: () => {
    set({ error: null });
  },
});
