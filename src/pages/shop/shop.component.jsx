import React from "react";
// import { connect } from "react-redux";
// import SHOP_DATA from "./shop.data";
// import { createStructuredSelector } from "reselect";

// import CollectionPreview from "../../components/collection-preview/collection-preview";
// import { selectCollections } from "../../redux/shop/shop.selectors";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => (
  <div className="shop-page">
    <CollectionsOverview />
  </div>
);

export default ShopPage;
