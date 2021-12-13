import { Inventory } from "../../store/inventory/interface";
import { InventoriesListProps } from "./interface";
import { ContainerSC, CardUlSC } from "./styled";

const InventoriesList = (props: InventoriesListProps) => {
  const { inventories } = props;
  return (
    <ContainerSC>
      {inventories?.inventories?.map((i: Inventory) => (
        <CardUlSC key={i.id}>
          <li>Vendedor: {i.vendors?.name}</li>
          <li>
            productos:
            {i?.products?.map((p) => (
              <div key={p.product?.id}>
                <span>Producto: {p.product?.name}</span>
                <span>cantidad: {p.amount}</span>
                <span>Restante: {p.product?.totalAmount}</span>
              </div>
            ))}
          </li>
        </CardUlSC>
      ))}
    </ContainerSC>
  );
};

export default InventoriesList;
