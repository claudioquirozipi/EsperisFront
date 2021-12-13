import { Dispatch } from "redux";

import {
  VENDORS_READ_START,
  VENDORS_READ_OK,
  VENDORS_READ_ERROR,
  VENDORS_CREATE,
  VENDORS_DELETE,
  VENDORS_EDIT,
} from "./types";

import { apiMain } from "../../services/main";
import { Vendor } from "./interface";

// ***************Read*********************
const readStart = () => ({
  type: VENDORS_READ_START,
});
const readOk = (payload: Vendor[]) => ({
  type: VENDORS_READ_OK,
  payload,
});
const readError = () => ({
  type: VENDORS_READ_ERROR,
});
export const vendorsReadAction = () => {
  return async (dispatch: Dispatch) => {
    dispatch(readStart());
    try {
      const response: any = await apiMain.vendors.read();
      dispatch(readOk(response.data));
    } catch (error) {
      dispatch(readError());
    }
  };
};

export const vendorsCreateAction = (payload: Vendor) => ({
  type: VENDORS_CREATE,
  payload,
});

export const vendorsEditAction = (payload: Vendor) => ({
  type: VENDORS_EDIT,
  payload,
});

export const vendorsDeleteAction = (payload: string) => ({
  type: VENDORS_DELETE,
  payload,
});
