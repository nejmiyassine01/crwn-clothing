import React from "react";

import Directory from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepages.styles.jsx";

const Homepage = () => {
	return (
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	);
};

export default Homepage;
