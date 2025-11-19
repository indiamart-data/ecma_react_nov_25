// import CrudAssignment from "../1_assignment/CrudAssignment";
// import CrudAssignmentReducer from "../1_assignment/CrudAssignmentReducer";
// import HookFormDemo from "../2_hook_form_zod_demo/HookFormDemo";
import AjaxComponent from "../3_ajax/AjaxComponent";
import ErrorBoundary from "../common/ErrorBoundary";

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorBoundary>
                {/* <CrudAssignment /> */}
                {/* <CrudAssignmentReducer /> */}
                {/* <HookFormDemo /> */}
                <AjaxComponent />
            </ErrorBoundary>
        </div>
    );
};

export default RootComponent;