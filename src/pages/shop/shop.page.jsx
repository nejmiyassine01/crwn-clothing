import React from "react";
import "./shop.styles.scss";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const Shop = () => {
	return (
		<div>
			{SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default Shop;
