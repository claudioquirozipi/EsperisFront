import { Product } from "../products/interface";
import { Vendor } from "../vendors/interface";

export interface Inventory {
  id: string;
  vendors: Vendor;
  products: {
    amount: number;
    product: Product;
  }[];
}

export interface Sell {
  vendors: string;
  products: {
    amount: number;
    id: string;
  }[];
}
