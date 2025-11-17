import { useRef, useState } from 'react';
import { Counter } from './Counter';

const CounterRoot = () => {
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

export default CounterRoot;