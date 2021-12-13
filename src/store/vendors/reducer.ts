import {
  VENDORS_READ_START,
  VENDORS_READ_OK,
  VENDORS_READ_ERROR,
  VENDORS_CREATE,
  VENDORS_EDIT,
  VENDORS_DELETE,
} from "./types";

import { Vendor } from "./interface";

const initialState = {
  vendors: [],
  loader: false,
  error: false,
};

export const vendorsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case VENDORS_READ_START:
      return {
        ...state,
        loader: true,
        error: false,
      };
    case VENDORS_READ_OK:
      return {
        ...state,
        vendors: action.payload,
        loader: false,
      };
    case VENDORS_READ_ERROR:
      return {
        ...state,
        loader: false,
        error: true,
      };
    case VENDORS_CREATE:
      return {
        ...state,
        vendors: [...state.vendors, action.payload],
      };
    case VENDORS_EDIT:
      return {
        ...state,
        vendors: state.vendors.map((product: Vendor) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case VENDORS_DELETE:
      return {
        ...state,
        vendors: state.vendors.filter(
          (vendors: Vendor) => vendors.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
