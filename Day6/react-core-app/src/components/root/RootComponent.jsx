import CrudAssignment from "../1_assignment/CrudAssignment";
// import CrudAssignmentReducer from "../4_assignment/CrudAssignmentReducer";
import ErrorBoundary from "../common/ErrorBoundary";

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorBoundary>
                <CrudAssignment />
                {/* <CrudAssignmentReducer /> */}
            </ErrorBoundary>
        </div>
    );
};

export default RootComponent;