
// class ComponentWithProps extends Component {
//     constructor(props) {
//         super(props);

//         // this.props = { name: "Abhijeet" };      // Error
//         // this.props.name = "Abhijeet";

//         // this.state = {...this.props};
//         this.state = JSON.parse(JSON.stringify(this.props));

//         this.state.name = "Abhijeet";
//         this.state.address.city = "Mumbai";

//         console.log("Ctor, State", this.state);
//         console.log("Ctor, Props", this.props);
//     }

//     render() {
//         console.log("Render, State", this.state);
//         console.log("Render, Props", this.props);

//         return (
//             <>
//                 <h1 className="text-primary text-center">Component With Props</h1>
//             </>
//         );
//     }
// }

// const ComponentWithProps = (props) => {
//     console.log("Render, Props", props);

//     return (
//         <>
//             <h1 className="text-primary text-center">Component With Props</h1>
//         </>
//     );
// }

const ComponentWithProps = ({ id, name, address }) => {
    console.log("Render, Props", id, name, address);

    return (
        <>
            <h1 className="text-primary text-center">Component With Props</h1>
        </>
    );
}

export default ComponentWithProps;