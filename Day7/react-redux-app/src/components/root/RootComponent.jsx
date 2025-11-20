import fetchIntercept from 'fetch-intercept';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationComponent from '../bs-nav/NavigationComponent';

import { useEffect } from 'react';
import ErrorHandler from '../common/ErrorHandler';

const RootComponent = () => {
    useEffect(() => {
        const unregister = fetchIntercept.register({
            request: function (url, config) {
                // Modify the url or config here
                return [url, config];
            },

            requestError: function (error) {
                // Called when an error occured during another 'request' interceptor call
                return Promise.reject(error);
            },

            response: function (response) {
                // Modify the reponse object
                return response;
            },

            responseError: function (error) {
                // Handle an fetch error
                return Promise.reject(error);
            }
        });

        return () => {
            unregister();
        };
    }, []);

    return (
        <div className='container'>
            <ErrorHandler>
                <Router>
                    <NavigationComponent />
                </Router>
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;