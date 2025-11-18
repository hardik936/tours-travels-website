'use client';
import React, { createContext, useReducer, useContext, useMemo, ReactNode } from 'react';
import { ITour } from '@/types/tour';

interface CartItem extends ITour {
  quantity: number; // In this context, quantity usually means number of guests
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: ITour & { guests: number } }
  | { type: 'REMOVE_FROM_CART'; payload: string } // tourId
  | { type: 'UPDATE_QUANTITY'; payload: { tourId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Update quantity if item already exists
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.guests } : item
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: action.payload.guests }] };
    }
    case 'REMOVE_FROM_CART':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.tourId ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
};

interface CartContextType extends CartState {
  addToCart: (tour: ITour, guests: number) => void;
  removeFromCart: (tourId: string) => void;
  updateQuantity: (tourId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (tour: ITour, guests: number) => dispatch({ type: 'ADD_TO_CART', payload: { ...tour, guests } });
  const removeFromCart = (tourId: string) => dispatch({ type: 'REMOVE_FROM_CART', payload: tourId });
  const updateQuantity = (tourId: string, quantity: number) => dispatch({ type: 'UPDATE_QUANTITY', payload: { tourId, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const itemCount = useMemo(() => state.items.length, [state.items]);
  const totalPrice = useMemo(() =>
    state.items.reduce((total, item) => total + item.price * item.quantity, 0),
    [state.items]
  );
  
  const value = useMemo(() => ({
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount,
    totalPrice
  }), [state, itemCount, totalPrice]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};