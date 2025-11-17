// import PropTypes from 'prop-types';
// import React, { Component } from 'react';

// class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0, flag: false };
//         this.clickCount = 0;
//         this.inc = this.inc.bind(this);
//         this.dec = this.dec.bind(this);
//         this.reset = this.reset.bind(this);
//     }

//     manageClickCount() {
//         this.clickCount += 1;
//         if (this.clickCount > 9) {
//             this.setState({ flag: true });
//         }
//     }

//     inc() {
//         this.setState(
//             (prev) => ({ count: prev.count + this.props.interval }),
//             () => this.manageClickCount());
//     }

//     dec() {
//         this.setState(
//             (prev) => ({ count: prev.count - this.props.interval }),
//             () => this.manageClickCount()
//         );
//     }

//     reset() {
//         this.clickCount = 0;
//         this.setState({ count: 0, flag: false });
//     }

//     render() {
//         const { flag } = this.state;

//         return (
//             <>
//                 <div className="text-center">
//                     <h3 className="text-info">Counter Component</h3>
//                 </div>
//                 <div className="d-grid gap-2 mx-auto col-6">
//                     <input type="text" className="form-control form-control-lg" value={this.state.count} readOnly />
//                     <CounterControls
//                         flag={flag}
//                         inc={this.inc}
//                         dec={this.dec}
//                         reset={this.reset} />
//                 </div>
//             </>
//         );
//     }
// }

// Counter.propTypes = {
//     interval: PropTypes.number
// }

// Counter.defaultProps = {
//     interval: 1
// }

// // class CounterControls extends Component {
// //     render() {
// //         console.log("CounterControls Render Executed:" + JSON.stringify(this.props));
// //         const { flag, inc, dec, reset } = this.props;

// //         return (
// //             <div className="d-grid gap-2">
// //                 <button className="btn btn-info" disabled={flag} onClick={inc}>
// //                     <span className="fs-4">+</span>
// //                 </button>
// //                 <button className="btn btn-info" disabled={flag} onClick={dec}>
// //                     <span className="fs-4">-</span>
// //                 </button>
// //                 <button className="btn btn-secondary" disabled={!flag} onClick={reset}>
// //                     <span className="fs-4">Reset</span>
// //                 </button>
// //             </div>
// //         );
// //     }
// // }

// const CounterControls = React.memo(class extends Component {
//     render() {
//         console.log("CounterControls Render Executed:" + JSON.stringify(this.props));
//         const { flag, inc, dec, reset } = this.props;

//         return (
//             <div className="d-grid gap-2">
//                 <button className="btn btn-info" disabled={flag} onClick={inc}>
//                     <span className="fs-4">+</span>
//                 </button>
//                 <button className="btn btn-info" disabled={flag} onClick={dec}>
//                     <span className="fs-4">-</span>
//                 </button>
//                 <button className="btn btn-secondary" disabled={!flag} onClick={reset}>
//                     <span className="fs-4">Reset</span>
//                 </button>
//             </div>
//         );
//     }
// });

// class CounterAssignment extends Component {
//     render() {
//         return (
//             <div>
//                 <Counter />
//                 {/* <hr />
//                 <Counter interval={10} /> */}
//             </div>
//         );
//     }
// }

// export default CounterAssignment;

// ----------------------------------------------------- Functional
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

const Counter = React.forwardRef(({ interval = 1, onMax }, ref) => {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    let clickCount = useRef(0);
    let firstRender = useRef(true);

    const manageClickCount = useCallback(() => {
        clickCount.current++;
        if (clickCount.current > 9) {
            setFlag(true);
        }
    }, []);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        manageClickCount();
    }, [count, manageClickCount]);

    useEffect(()=>{
        onMax(flag);
    }, [flag]);

    const inc = useCallback(() => {
        setCount(prev => prev + interval);
    }, [interval]);

    const dec = useCallback(() => {
        setCount(prev => prev - interval);
    }, [interval]);

    const reset = useCallback(() => {
        clickCount.current = 0;
        setCount(0);
        setFlag(false);
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
                <input type="text" className="form-control form-control-lg" value={count} readOnly />
                <CounterControls
                    flag={flag}
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

const CounterAssignment = () => {
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
            <Counter ref={counterRef} onMax={updateMessage}/>
            <div className="d-grid gap-2 mx-auto col-6 mt-4">
                <button className="btn btn-warning" onClick={p_reset}>
                    <span className='fs-4'>Parent Reset</span>
                </button>
            </div>
        </div>
    );
}

export default CounterAssignment;