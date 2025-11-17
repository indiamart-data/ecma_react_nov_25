// import EventComponent from "../1_react-events/EventComponent";
import CounterWithReducer from "../2_reducers/CounterWithReducer";
// import CounterAssignment from "../assignment/CounterAssignment";

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <EventComponent /> */}
            {/* <CounterAssignment /> */}
            <CounterWithReducer />
        </div>
    );
};

export default RootComponent;