import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './WithSpinner-styled'

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => (
        isLoading ? (<SpinnerOverlay><SpinnerContainer /></SpinnerOverlay>) : (<WrappedComponent {...otherProps} />)
    );
    return Spinner;
}

export default WithSpinner;