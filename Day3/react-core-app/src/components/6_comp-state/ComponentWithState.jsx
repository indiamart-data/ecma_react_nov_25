
// class ComponentWithState extends Component {
//     constructor() {
//         super();
//         this.state = { name: "Manish" };
//         this.message = "Hi";
//         console.log("Ctor, state: ", this.state);
//     }

//     render() {
//         console.log("Render, state: ", this.state);

//         return (
//             <>
//                 <h1 className="text-primary text-center">Component With State</h1>
//                 <h2 className="text-success">Hello, {this.state.name}</h2>
//                 <h2 className="text-success">Hello, {this.message}</h2>
//             </>
//         );
//     }
// }

import { useState } from "react";

const ComponentWithState = function () {
    const [name, setName] = useState("Manish");
    // console.log(name);
    // console.log(setName);
    let message = "Hi";

    return (
        <>
            <h1 className="text-primary text-center">Component With State</h1>
            <h2 className="text-success">Hello, {name}</h2>
            <h2 className="text-success">Hello, {message}</h2>
        </>
    );
}

export default ComponentWithState;