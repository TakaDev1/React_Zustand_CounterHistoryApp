import React from 'react'
import {create} from 'zustand' 

type CounterStoreType = {
    count: number;
    history: number[];
    stepCount: number;
    increment: () => void;
    decrement: () => void;
    setStepCount: (step: number) => void;
    resetHistory: () => void;
}

export const useCountStore = create<CounterStoreType>(set => ({
    count: 0,
    history: [],
    stepCount: 1,
    increment: () => set(state => ({
        count: state.count + state.stepCount,
        history: [...state.history, state.count],
    })),
    decrement: () => set(state => ({
        count: state.count - state.stepCount,
        history: [...state.history, state.count],
    })),
    setStepCount: (step:number) => set({
        stepCount: step
    }),
    resetHistory: () => set(() => ({
        history: []
    }))
}))
