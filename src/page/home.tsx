import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddSell from "../components/addSell";
import InventoriesList from "../components/inventoriesList";
import Layout from "../components/layout";
import {
  inventoriesReadAction,
  vendorsReadAction,
  productsReadAction,
  inventoriesSellAction,
} from "../store";

const HomePage = () => {
  const dispatch = useDispatch();
  const inventories = useSelector((state: any) => state.inventories);
  const products = useSelector((state: any) => state.products);
  const vendors = useSelector((state: any) => state.vendors);

  const submit = (values: any) => {
    dispatch(inventoriesSellAction(values));
  };

  useEffect(() => {
    dispatch(inventoriesReadAction());
    dispatch(vendorsReadAction());
    dispatch(productsReadAction());
  }, [dispatch]);

  return (
    <Layout>
      <h1>home </h1>
      <InventoriesList inventories={inventories} />
      <AddSell products={products} vendors={vendors} submit={submit} />
    </Layout>
  );
};

export default HomePage;
