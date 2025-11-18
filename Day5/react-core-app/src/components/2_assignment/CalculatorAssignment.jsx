import { useRef, useState } from "react";

const Calculator = () => {
    const t1 = useRef(null);
    const t2 = useRef(null);

    const [result, setResult] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const v1 = parseInt(t1.current.value) || 0;
        const v2 = parseInt(t2.current.value) || 0;
        setResult(v1 + v2);
    }

    const handleReset = () => {
        t1.current.value = "0";
        t2.current.value = "0";
        setResult(0);
    }

    return (
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <form className="justify-content-center">
                    <fieldset>
                        <legend className="text-center">Calculator One - Uncontrolled</legend>
                        <div className="form-group mb-1">
                            <label className="mb-0" htmlFor="t1">Number One</label>
                            <input type="text" className="form-control" defaultValue={0} ref={t1} />
                        </div>
                        <div className="form-group mb-1">
                            <label className="mb-0" htmlFor="t2">Number Two</label>
                            <input type="text" className="form-control" defaultValue={0} ref={t2} />
                        </div>
                        <div className="form-group mb-2 mt-2">
                            <h3>Result: {result}</h3>
                        </div>
                        <div className="d-grid gap-2 mx-auto">
                            <button type="submit" className="btn btn-success" onClick={handleSubmit}>Add</button>
                            <button type="reset" className="btn btn-primary" onClick={handleReset}>Reset</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

const CalculatorAssignment = () => {
    return (
        <div>
            <Calculator />
        </div>
    );
}

export default CalculatorAssignment;