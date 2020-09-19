import React from "react";
import { Route } from "react-router-dom";
// import { connect } from "react-redux";
// import SHOP_DATA from "./shop.data";
// import { createStructuredSelector } from "reselect";

// import CollectionPreview from "../../components/collection-preview/collection-preview";
// import { selectCollections } from "../../redux/shop/shop.selectors";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  console.log("path" + match.path);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      {/* collectionId have to match with
      collection.component(ownProps.match.params.collectionId) */}
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
