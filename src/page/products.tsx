import { useEffect } from "react";
import Layout from "../components/layout";
import { productsReadAction } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../store/products/interface";

const ProductsPage = () => {
  const dispatch = useDispatch();

  const products: any = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(productsReadAction());
  }, [dispatch]);

  console.log("products", products);

  return (
    <Layout>
      <h1>Productos</h1>
      {products?.products?.map((p: Product) => (
        <ul key={p.id}>
          <li>nombre: {p.name}</li>
          <li>Precio: {p.price}</li>
          <li>Cantidad en inventario: {p.totalAmount}</li>
        </ul>
      ))}
    </Layout>
  );
};

export default ProductsPage;
