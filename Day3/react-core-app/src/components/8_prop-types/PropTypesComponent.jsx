import PropTypes from 'prop-types';

// class PropTypesComponent extends Component {
//     render() {
//         return (
//             <>
//                 <h2 className="text-primary">Hello, {this.props.name.toUpperCase()}</h2>
//                 <h2 className="text-primary">You are from, {this.props.city}</h2>
//             </>
//         );
//     }

//     // static get defaultProps() {
//     //     return {
//     //         name: "na",
//     //         city: "na"
//     //     };
//     // }

//     // static get propTypes() {
//     //     return {
//     //         name: PropTypes.string.isRequired,
//     //         city: PropTypes.string.isRequired
//     //     };
//     // }
// }

// PropTypesComponent.defaultProps = {
//     name: "na",
//     city: "na"
// };

const PropTypesComponent = ({ name = "na", city = "na" }) => {
    return (
        <>
            <h2 className="text-primary">Hello, {name.toUpperCase()}</h2>
            <h2 className="text-primary">You are from, {city}</h2>
        </>
    );
}

PropTypesComponent.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
};

const PropTypesRoot = () => {
    return (
        <>
            {/* <PropTypesComponent /> */}
            <PropTypesComponent name={"manish"} city={"Pune"} />
        </>
    );
};

export default PropTypesRoot;