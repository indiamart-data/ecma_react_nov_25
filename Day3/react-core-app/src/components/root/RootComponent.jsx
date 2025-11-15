import ComponentOne from '../2_multi-components/ComponentOne';
import ComponentTwo from '../2_multi-components/ComponentTwo';

const RootComponent = () => {
    return (
        <div className='container'>
            <ComponentOne />
            <ComponentTwo />
        </div>
    );
};

export default RootComponent;