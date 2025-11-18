// src/contexts/AuthContext.tsx
'use client';
import React, { createContext, useReducer, useContext, useCallback, useMemo, ReactNode } from 'react';
// This import is now correct for the new enum-based user type
import { IUser, UserRole } from '@/types/user';

// 1. Define the shape of the context
export interface AuthContextType {
  user: IUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// 2. Create the context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define state and action types for the reducer
type AuthState = {
  user: IUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
};

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: IUser }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'LOGOUT' };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  error: null,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, isAuthenticated: true, user: action.payload };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, isAuthenticated: false, error: action.payload };
    case 'LOGOUT':
      return { ...initialState, loading: false };
    default:
      return state;
  }
};

// 3. Create the Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = useCallback(async (email: string, password: string) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (email === 'user@example.com' && password === 'password') {
        
        // FIX: Updated the mockUser object to match the new IUser interface
        const mockUser: IUser = { 
          id: '1', 
          name: 'John Doe', 
          email: 'user@example.com',
          // Add the new required fields
          phone: '+1-555-123-4567',
          bookingHistory: [],
          wishlist: [],
          // Use the UserRole enum for type safety
          role: UserRole.User 
        };
        dispatch({ type: 'LOGIN_SUCCESS', payload: mockUser });

      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: (err as Error).message });
    }
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: 'LOGOUT' });
  }, []);

  const value = useMemo(() => ({
    ...state,
    login,
    logout,
  }), [state, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};