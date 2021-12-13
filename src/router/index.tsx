import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../page/home";
import ProductsPage from "../page/products";
import VendorsPage from "../page/vendors";
import { url } from "./routes";

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={url.home} element={<HomePage />} />
        <Route path={url.products.list} element={<ProductsPage />} />
        <Route path={url.vendors.list} element={<VendorsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
