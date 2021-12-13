import { Inventory, Sell } from "./interface";
import {
  INVENTORIES_READ_START,
  INVENTORIES_READ_OK,
  INVENTORIES_READ_ERROR,
  INVENTORIES_SELL_START,
  INVENTORIES_SELL_OK,
  INVENTORIES_SELL_ERROR,
} from "./types";

import { apiMain } from "../../services/main";
import { Dispatch } from "redux";

const readStart = () => ({
  type: INVENTORIES_READ_START,
});
const readOk = (payload: Inventory[]) => ({
  type: INVENTORIES_READ_OK,
  payload,
});
const readError = () => ({
  type: INVENTORIES_READ_ERROR,
});

export const inventoriesReadAction = () => {
  return async (dispatch: Dispatch) => {
    dispatch(readStart());
    try {
      const response: any = await apiMain.inventories.read();
      dispatch(readOk(response.data));
    } catch (error) {
      dispatch(readError());
    }
  };
};

const sellStart = () => ({
  type: INVENTORIES_SELL_START,
});
const sellOk = (payload: Inventory[]) => ({
  type: INVENTORIES_SELL_OK,
  payload,
});
const sellError = () => ({
  type: INVENTORIES_SELL_ERROR,
});

export const inventoriesSellAction = (sell: Sell) => {
  return async (dispatch: Dispatch) => {
    dispatch(sellStart());
    try {
      const response: any = await apiMain.inventories.sell(sell);
      dispatch(sellOk(response.data));
    } catch (error) {
      dispatch(sellError());
    }
  };
};
