// import ControlledVsUncontrolledComponent from "../1_controlled-uncontrolled/ControlledVsUncontrolledComponent";
// import CalculatorAssignment from "../2_assignment/CalculatorAssignment";
// import ListRoot from "../3_working_with_arrays/ListComponent";
// import CrudAssignment from "../4_assignment/CrudAssignment";
// import CrudAssignmentReducer from "../4_assignment/CrudAssignmentReducer";
import HookFormDemo from "../5_hook_form_demo/HookFormDemo";
import ErrorBoundary from "../common/ErrorBoundary";

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorBoundary>
                {/* <ControlledVsUncontrolledComponent /> */}
                {/* <CalculatorAssignment />  */}
                {/* <ListRoot /> */}
                {/* <CrudAssignment /> */}
                {/* <CrudAssignmentReducer /> */}
                <HookFormDemo />
            </ErrorBoundary>
        </div>
    );
};

export default RootComponent;