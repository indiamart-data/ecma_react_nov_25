// import ComponentOne from '../2_multi-components/ComponentOne';
// import ComponentTwo from '../2_multi-components/ComponentTwo';

// import ComponentOne from '../3_inline-style/ComponentOne';
// import ComponentTwo from '../3_inline-style/ComponentTwo';

// import ComponentOne from '../4_external-css/comp-one/ComponentOne';
// import ComponentTwo from '../4_external-css/comp-two/ComponentTwo';

// import ComponentOne from '../5_css-modules/comp-one/ComponentOne';
// import ComponentTwo from '../5_css-modules/comp-two/ComponentTwo';

import ComponentWithState from '../6_comp-state/ComponentWithState';

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <ComponentOne />
            <ComponentTwo /> */}

            <ComponentWithState />
        </div>
    );
};

export default RootComponent;