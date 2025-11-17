import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';

const initialState = { count: 0, flag: false };

function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + action.payload };
        case 'DECREMENT':
            return { ...state, count: state.count - action.payload };
        case 'RESET':
            return { ...initialState };
        case 'SETFLAG':
            return { ...state, flag: action.payload };
        default:
            return state;
    }
}

const Counter = React.forwardRef(({ interval = 1, onMax }, ref) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    let clickCount = useRef(0);
    let firstRender = useRef(true);

    const manageClickCount = useCallback(() => {
        clickCount.current++;
        if (clickCount.current > 9) {
            dispatch({ type: 'SETFLAG', payload: true });
            // Dispatch Carries Action Object to the Reducer Function
            // Action is a plain object with 2 properties i.e. type & payload
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
                <h3 className="text-info">Counter Component</h3>
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

const CounterControls = React.memo(({ flag, inc, dec, reset }) => {
    console.log("CounterControls Render Executed");

    return (
        <div className="d-grid gap-2">
            <button className="btn btn-info" disabled={flag} onClick={inc}>
                <span className="fs-4">+</span>
            </button>
            <button className="btn btn-info" disabled={flag} onClick={dec}>
                <span className="fs-4">-</span>
            </button>
            <button className="btn btn-secondary" disabled={!flag} onClick={reset}>
                <span className="fs-4">Reset</span>
            </button>
        </div>
    );
});

const CounterWithReducer = () => {
    const counterRef = useRef(null);
    const [message, setMessage] = useState("");

    const updateMessage = (flag) => {
        if (flag)
            setMessage("Max click reached, please reset to continue...")
        else
            setMessage("");
    }

    const p_reset = () => {
        console.log(counterRef);
        if (counterRef.current) {
            counterRef.current.flag = true;
            // counterRef.current.reset();
        }
    }

    return (
        <div>
            {message && <h2 className='text-center'>{message}</h2>}
            <Counter ref={counterRef} onMax={updateMessage} />
            <div className="d-grid gap-2 mx-auto col-6 mt-4">
                <button className="btn btn-warning" onClick={p_reset}>
                    <span className='fs-4'>Parent Reset</span>
                </button>
            </div>
        </div>
    );
}

export default CounterWithReducer;