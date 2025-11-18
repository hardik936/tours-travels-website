'use client';
import React, { createContext, useReducer, useContext, useCallback, useMemo, ReactNode } from 'react';
import { IUserProfile } from '@/types/user'; // Assuming IUserProfile exists in your types
import { ITour } from '@/types/tour';

interface UserState {
  profile: IUserProfile | null;
  wishlist: ITour[]; // Using the full tour object for the wishlist
  loading: boolean;
}

type UserAction =
  | { type: 'SET_PROFILE'; payload: IUserProfile }
  | { type: 'ADD_TO_WISHLIST'; payload: ITour }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }; // payload is tourId

const initialState: UserState = {
  profile: null,
  wishlist: [],
  loading: false,
};

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'SET_PROFILE':
      return { ...state, profile: action.payload };
    case 'ADD_TO_WISHLIST':
      if (state.wishlist.find(tour => tour.id === action.payload.id)) return state;
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case 'REMOVE_FROM_WISHLIST':
      return { ...state, wishlist: state.wishlist.filter(tour => tour.id !== action.payload) };
    default:
      return state;
  }
};

interface UserContextType extends UserState {
  updateProfile: (profileData: IUserProfile) => void;
  addToWishlist: (tour: ITour) => void;
  removeFromWishlist: (tourId: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // In a real app, you'd fetch the user's profile and wishlist in a useEffect
  // when the user logs in (consuming the AuthContext here).

  const updateProfile = useCallback((profileData: IUserProfile) => {
    // API call to update profile would go here
    dispatch({ type: 'SET_PROFILE', payload: profileData });
  }, []);

  const addToWishlist = useCallback((tour: ITour) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: tour });
  }, []);
  
  const removeFromWishlist = useCallback((tourId: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: tourId });
  }, []);

  const value = useMemo(() => ({
    ...state,
    updateProfile,
    addToWishlist,
    removeFromWishlist,
  }), [state, updateProfile, addToWishlist, removeFromWishlist]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};