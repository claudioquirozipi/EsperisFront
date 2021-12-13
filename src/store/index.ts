import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { productsReducer } from "./products/reducer";
import { vendorsReducer } from "./vendors/reducer";
import { inventoriesReducer } from "./inventory/reducer";
import thunk from "redux-thunk";

import {
  productsReadAction,
  productsCreateAction,
  productsEditAction,
  productsDeleteAction,
} from "./products/actions";

import {
  vendorsReadAction,
  vendorsCreateAction,
  vendorsEditAction,
  vendorsDeleteAction,
} from "./vendors/actions";

import {
  inventoriesReadAction,
  inventoriesSellAction,
} from "./inventory/actions";

const reducer = combineReducers({
  products: productsReducer,
  vendors: vendorsReducer,
  inventories: inventoriesReducer,
});

const myStore = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export {
  productsReadAction, //Products
  productsCreateAction,
  productsEditAction,
  productsDeleteAction,
  vendorsReadAction, // vendors
  vendorsCreateAction,
  vendorsEditAction,
  vendorsDeleteAction,
  inventoriesReadAction, // Inventories
  inventoriesSellAction,
};
export default myStore;
