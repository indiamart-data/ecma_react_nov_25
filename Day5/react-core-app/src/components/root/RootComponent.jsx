// import ControlledVsUncontrolledComponent from "../1_controlled-uncontrolled/ControlledVsUncontrolledComponent";
// import CalculatorAssignment from "../2_assignment/CalculatorAssignment";
import ListRoot from "../3_working_with_arrays/ListComponent";
import ErrorBoundary from "../common/ErrorBoundary";

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorBoundary>
                {/* <ControlledVsUncontrolledComponent /> */}
                {/* <CalculatorAssignment />  */}
                <ListRoot />
            </ErrorBoundary>
        </div>
    );
};

export default RootComponent;