import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useImperativeHandle, useReducer, useRef } from 'react';
import { counterReducer, initialState } from './counter-reducer';
import { CounterControls } from './CounterControls';

export const Counter = React.forwardRef(({ interval = 1, onMax }, ref) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    let clickCount = useRef(0);
    let firstRender = useRef(true);

    const manageClickCount = useCallback(() => {
        clickCount.current++;
        if (clickCount.current > 9) {
            dispatch({ type: 'SETFLAG', payload: true });
        }
    }, []);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        manageClickCount();
    }, [state.count, manageClickCount]);

    useEffect(() => {
        onMax(state.flag);
    }, [state.flag]);

    const inc = useCallback(() => {
        dispatch({ type: 'INCREMENT', payload: interval });
    }, [interval]);

    const dec = useCallback(() => {
        dispatch({ type: 'DECREMENT', payload: interval });
    }, [interval]);

    const reset = useCallback(() => {
        clickCount.current = 0;
        dispatch({ type: 'RESET' });
    }, []);

    useImperativeHandle(ref, () => {
        return { reset };
    });

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Component Refactored</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={state.count} readOnly />
                <CounterControls
                    flag={state.flag}
                    inc={inc}
                    dec={dec}
                    reset={reset} />
            </div>
        </>
    );
});

Counter.propTypes = {
    interval: PropTypes.number
}