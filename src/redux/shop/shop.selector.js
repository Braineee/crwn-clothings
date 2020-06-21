import { createSelector } from "reselect";

// Select the shop state
const selectShop = (state) => state.shop;

// Select the collection from the shop state
export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);
