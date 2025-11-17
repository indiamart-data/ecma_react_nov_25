import React, { useContext, useReducer } from 'react';
import { counterReducer, initialState } from './counter-reducer';

const CounterContext = React.createContext();

const CounterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
};

// Custom Hooks
export const useCounter = () => {
    const context = useContext(CounterContext);

    if (context === undefined) {
        throw new Error("useCounter must be used within CounterProvider")
    }

    return context;
}

export default CounterContextProvider;