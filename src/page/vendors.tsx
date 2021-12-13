import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout";
import { vendorsReadAction } from "../store";
import { Vendor } from "../store/vendors/interface";

const VendorsPage = () => {
  const dispatch = useDispatch();

  const vendors = useSelector((state: any) => state.vendors);

  useEffect(() => {
    dispatch(vendorsReadAction());
  }, [dispatch]);

  return (
    <Layout>
      <h1>vendedores</h1>
      {vendors?.vendors?.map((v: Vendor) => (
        <ul key={v.id}>
          <li>Nombre: {v.name}</li>
          <li>Apellido: {v.lastName}</li>
          <li>Edad: {v.age}</li>
        </ul>
      ))}
    </Layout>
  );
};

export default VendorsPage;
