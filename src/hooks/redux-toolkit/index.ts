import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/store';

// Custom hook for typed useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// Custom hook for typed useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
