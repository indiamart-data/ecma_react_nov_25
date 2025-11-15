// import ComponentOne from '../2_multi-components/ComponentOne';
// import ComponentTwo from '../2_multi-components/ComponentTwo';

// import ComponentOne from '../3_inline-style/ComponentOne';
// import ComponentTwo from '../3_inline-style/ComponentTwo';

// import ComponentOne from '../4_external-css/comp-one/ComponentOne';
// import ComponentTwo from '../4_external-css/comp-two/ComponentTwo';

// import ComponentOne from '../5_css-modules/comp-one/ComponentOne';
// import ComponentTwo from '../5_css-modules/comp-two/ComponentTwo';

// import ComponentWithState from '../6_comp-state/ComponentWithState';

import { useState } from "react";
// import ComponentWithProps from "../7_comp-props/ComponentWithProps";
import PropTypesComponent from "../8_prop-types/PropTypesComponent";

const RootComponent = () => {
    const [data] = useState({ id: 1, name: "Manish", address: { city: "Pune", state: "MH" } });

    return (
        <div className='container'>
            {/* <ComponentOne />
            <ComponentTwo /> */}

            {/* <ComponentWithState /> */}
            {/* <ComponentWithProps id={data.id} name={data.name} address={data.address} /> */}
            {/* <ComponentWithProps {...data} /> */}

            <PropTypesComponent />
        </div>
    );
};

export default RootComponent;