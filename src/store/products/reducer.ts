import {
  PRODUCTS_READ_START,
  PRODUCTS_READ_OK,
  PRODUCTS_READ_ERROR,
  PRODUCTS_CREATE,
  PRODUCTS_EDIT,
  PRODUCTS_DELETE,
} from "./types";

import { Product } from "./interface";

const initialState = {
  products: [],
  loader: false,
  error: false,
};

export const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PRODUCTS_READ_START:
      return {
        ...state,
        loader: true,
        error: false,
      };
    case PRODUCTS_READ_OK:
      return {
        ...state,
        products: action.payload,
        loader: false,
      };
    case PRODUCTS_READ_ERROR:
      return {
        ...state,
        loader: false,
        error: true,
      };
    case PRODUCTS_CREATE:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case PRODUCTS_EDIT:
      return {
        ...state,
        products: state.products.map((product: Product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case PRODUCTS_DELETE:
      return {
        ...state,
        products: state.products.filter(
          (products: Product) => products.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
