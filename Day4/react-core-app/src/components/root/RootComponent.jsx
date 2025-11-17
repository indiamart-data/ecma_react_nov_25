// import EventComponent from "../1_react-events/EventComponent";
// import CounterWithReducer from "../2_reducers/CounterWithReducer";
// import CounterAssignment from "../assignment/CounterAssignment";
// import CounterRoot from "../3_code_structuring/CounterRoot";
import CounterRootWithContext from "../4_sharing_state_using_context/CounterRootWithContext";

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <EventComponent /> */}
            {/* <CounterAssignment /> */}
            {/* <CounterWithReducer /> */}
            {/* <CounterRoot /> */}
            <CounterRootWithContext />
        </div>
    );
};

export default RootComponent;