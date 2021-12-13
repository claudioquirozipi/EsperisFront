import {
  INVENTORIES_READ_START,
  INVENTORIES_READ_OK,
  INVENTORIES_READ_ERROR,
  INVENTORIES_SELL_START,
  INVENTORIES_SELL_OK,
  INVENTORIES_SELL_ERROR,
} from "./types";

const initialState = {
  inventories: [],
  loader: false,
  error: false,
};

export const inventoriesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INVENTORIES_READ_START:
      return {
        ...state,
        loader: true,
        error: false,
      };
    case INVENTORIES_READ_OK:
      return {
        ...state,
        inventories: action.payload,
        loader: false,
      };
    case INVENTORIES_READ_ERROR:
      return {
        ...state,
        loader: false,
        error: true,
      };
    case INVENTORIES_SELL_START:
      return {
        ...state,
        loader: true,
        error: false,
      };
    case INVENTORIES_SELL_OK:
      return {
        ...state,
        inventories: action.payload,
        loader: false,
      };
    case INVENTORIES_SELL_ERROR:
      return {
        ...state,
        loader: false,
        error: true,
      };
    default:
      return state;
  }
};
