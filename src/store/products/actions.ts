import { Dispatch } from "redux";

import {
  PRODUCTS_READ_START,
  PRODUCTS_READ_OK,
  PRODUCTS_READ_ERROR,
  PRODUCTS_CREATE,
  PRODUCTS_DELETE,
  PRODUCTS_EDIT,
} from "./types";

import { apiMain } from "../../services/main";
import { Product } from "./interface";

const readStart = () => ({
  type: PRODUCTS_READ_START,
});
const readOk = (payload: Product[]) => ({
  type: PRODUCTS_READ_OK,
  payload,
});
const readError = () => ({
  type: PRODUCTS_READ_ERROR,
});

export const productsReadAction = () => {
  return async (dispatch: Dispatch) => {
    dispatch(readStart());
    try {
      const response: any = await apiMain.products.read();
      dispatch(readOk(response.data));
    } catch (error) {
      dispatch(readError());
    }
  };
};

export const productsCreateAction = (payload: Product) => ({
  type: PRODUCTS_CREATE,
  payload,
});

export const productsEditAction = (payload: Product) => ({
  type: PRODUCTS_EDIT,
  payload,
});

export const productsDeleteAction = (payload: string) => ({
  type: PRODUCTS_DELETE,
  payload,
});
