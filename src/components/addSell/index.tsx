import { Product } from "../../store/products/interface";
import { Vendor } from "../../store/vendors/interface";
import { Formik, Form, Field, FormikProps, FieldArray } from "formik";
import { AddSellProps } from "./interface";
import { TitleSC, ContainerSC, RowSC, ButtonSC } from "./styled";

const AddSell = (props: AddSellProps) => {
  const { products, vendors, submit } = props;

  const initialValues = {
    vendors: "",
    products: [],
  };
  const addSellSubmit = (values: any) => {
    console.log("fff values", values);
    submit(values);
  };

  return (
    <div>
      <TitleSC>Agregar venta:</TitleSC>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          addSellSubmit(values);
          setSubmitting(true);
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <ContainerSC>
              <RowSC>
                <label htmlFor="vendorsId">Vendedor</label>
                <Field id="vendorsId" as="select" name="vendors">
                  <>
                    <option key={-1} value=""></option>
                    {vendors.vendors.map((v: Vendor) => (
                      <option key={v.id} value={v.id}>
                        {v.name}
                      </option>
                    ))}
                  </>
                </Field>
              </RowSC>

              <h5>Agregar producto</h5>

              <FieldArray name="products">
                {({ push, remove }) => (
                  <div>
                    {props.values.products.map(
                      (p: { id: string; amount: number }, i: number) => (
                        <div>
                          <RowSC>
                            <label htmlFor={`ProductoID${i}`}>Producto</label>
                            <Field
                              id={`ProductoID${i}`}
                              as="select"
                              name={`products[${i}].id`}
                            >
                              <>
                                <option key={-1} value={""} />
                                {products.products.map((pr: Product) => (
                                  <option key={pr.id} value={pr.id}>
                                    {pr.name}
                                  </option>
                                ))}
                              </>
                            </Field>
                          </RowSC>
                          <RowSC>
                            <label htmlFor="amountId">Cantidad</label>
                            <Field
                              id="amountId"
                              type="number"
                              min={1}
                              step={1}
                              name={`products[${i}].amount`}
                              placeholder="Cantidad"
                            />
                          </RowSC>
                        </div>
                      )
                    )}
                    <ButtonSC
                      type="button"
                      onClick={() => push({ id: "", amount: 1 })}
                    >
                      agregar producto
                    </ButtonSC>
                  </div>
                )}
              </FieldArray>
              <ButtonSC type="submit">Vender</ButtonSC>
            </ContainerSC>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddSell;
