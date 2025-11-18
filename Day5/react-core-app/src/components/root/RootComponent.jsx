import ControlledVsUncontrolledComponent from "../1_controlled-uncontrolled/ControlledVsUncontrolledComponent";
import CalculatorAssignment from "../2_assignment/CalculatorAssignment";
import ErrorBoundary from "../common/ErrorBoundary";

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorBoundary>
                <ControlledVsUncontrolledComponent />
                <CalculatorAssignment />
            </ErrorBoundary>
        </div>
    );
};

export default RootComponent;