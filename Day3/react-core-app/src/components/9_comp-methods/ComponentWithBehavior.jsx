import { useEffect, useState } from 'react';

// class ComponentWithBehavior extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { id: 1, count: 0 };
//     }

//     handleClick() {
//         // console.log("this: ", this);

//         // this.state.count += 1;
//         // console.log(this.state);

//         // this.setState({count: this.state.count + 1});
//         // console.log(this.state);

//         // SetState is Async
//         this.setState({ count: this.state.count + 1 }, () => {
//             console.log(this.state);
//         });
//     }

//     render() {
//         return (
//             <div className='text-center'>
//                 <h2 className="text-primary">Component with Behavior</h2>
//                 <h2 className="text-primary">Id: {this.state.id}</h2>
//                 <h2 className="text-primary">Count: {this.state.count}</h2>
//                 <div className="d-grid gap-2 col-6 mx-auto mt-5">
//                     <button className='btn btn-outline-primary' onClick={this.handleClick.bind(this)}>Click Me!</button>
//                 </div>
//             </div>
//         );
//     }
// }

const ComponentWithBehavior = () => {
    // const [id, setId] = useState(1);
    // const [count, setCount] = useState(0);

    const [state, setState] = useState({ id: 1, count: 0 });

    // With Empty Array, useEffect executes only on Component Mount
    // useEffect(() => { }, []);

    // useEffect executes Component Mount and when state.count changes (component update)
    useEffect(() => {
        console.log("State Updated: ", state);
    }, [state.count]);

    const handleClick = () => {
        // setCount(count + 1);

        // const tState = { ...state };
        // tState.count = state.count + 1;
        // setState(tState);

        // setState(prevState => {
        //     return {...prevState, count: prevState.count + 1 };
        // });

        setState(prevState => ({ ...prevState, count: prevState.count + 1 }));
    }

    return (
        // <div className='text-center'>
        //     <h2 className="text-primary">Component with Behavior</h2>
        //     <h2 className="text-primary">Id: {id}</h2>
        //     <h2 className="text-primary">Count: {count}</h2>
        //     <div className="d-grid gap-2 col-6 mx-auto mt-5">
        //         <button className='btn btn-outline-primary' onClick={handleClick}>Click Me!</button>
        //     </div>
        // </div>

        <div className='text-center'>
            <h2 className="text-primary">Component with Behavior</h2>
            <h2 className="text-primary">Id: {state.id}</h2>
            <h2 className="text-primary">Count: {state.count}</h2>
            <div className="d-grid gap-2 col-6 mx-auto mt-5">
                <button className='btn btn-outline-primary' onClick={handleClick}>Click Me!</button>
            </div>
        </div>
    );
}

export default ComponentWithBehavior;