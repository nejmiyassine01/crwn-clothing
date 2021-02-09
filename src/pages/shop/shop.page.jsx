import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.pages";

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../components/firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.components";

import "./shop.styles.scss";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		// fetch(
		// 	"https://firestore.googleapis.com/v1/projects/crwn-db-1e4ac/databases/(default)/documents/cities/LA"
		// )
		// 	.then((response) => response.json())
		// 	.then((collections) => console.log(collections));

		collectionRef.get().then((snapShot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
			updateCollections(collectionsMap);
			this.setState({ loading: true });
		});
	}

	render() {
		const { match } = this.props;
		const { loading } = this.props;
		return (
			<div>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
