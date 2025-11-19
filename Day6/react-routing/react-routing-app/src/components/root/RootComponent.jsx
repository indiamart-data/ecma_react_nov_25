import NavigationComponent from '../bs-nav/NavigationComponent';

import ErrorHandler from '../common/ErrorHandler';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                <NavigationComponent />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;