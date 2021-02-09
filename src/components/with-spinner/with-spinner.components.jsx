import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles.jsx";

const WithSpinner = (WrappedComponent) => {
	const Spinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<SpinnerContainer>
				<SpinnerOverlay></SpinnerOverlay>
			</SpinnerContainer>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};

	return Spinner;
};

export default WithSpinner;
