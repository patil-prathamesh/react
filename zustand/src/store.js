import { create } from 'zustand'

export const useCounterStore = create((set) => ({
    count: 0,
    isLoading: false,
    increment: () => {
        set((state) => ({count: state.count+1}))
    },
    decrement: () => {
        set((state) => ({count: state.count-1}))
    },
    incrementAsync: async () => {
        set({isLoading: true})
        await new Promise((resolve) => setTimeout(resolve, 1000))
        set({isLoading: false})
        set((state) => ({count: state.count+1}))
    }
}))