import { createSelector } from "reselect";
//reselect is for memoization

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
