import axios from "axios";

const urlMain = "http://localhost:8080/api";

export const apiMain = {
  products: {
    read: () => axios.get(`${urlMain}/products`),
    create: (body: any) => axios.post(`${urlMain}/products`, body),
    edit: (body: any) => axios.post(`${urlMain}/products`, body),
    delete: (id: any) => axios.delete(`${urlMain}/products`, id),
  },
  vendors: {
    read: () => axios.get(`${urlMain}/vendors`),
    create: (body: any) => axios.post(`${urlMain}/vendors`, body),
    edit: (body: any) => axios.post(`${urlMain}/vendors`, body),
    delete: (id: any) => axios.delete(`${urlMain}/vendors`, id),
  },
  inventories: {
    read: () => axios.get(`${urlMain}/inventory`),
    sell: (body: any) => axios.post(`${urlMain}/inventory`, body),
  },
};
