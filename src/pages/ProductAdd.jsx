import { Form, Formik,Field, ErrorMessage } from "formik";
import React from "react";
import { Button, FormField, Label } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import * as Yup from "yup"; //bir sayfada birden fazla export var demektir.Yup doğrulama yapmamızı sağlayan bir yapıdır

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  });

  return (
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values)=>{console.log(values)}}>
        <Form className="ui form">
            <KodlamaIoTextInput name="productName" placeholder="Ürün adı"/>
            <KodlamaIoTextInput name="unitPrice" placeholder="Ürün fiyatı"/>
          {/* <FormField>
            <Field name="productName" placeholder="Ürün adı"></Field>
            <ErrorMessage name="productName" render={error=> 
            <Label pointing basic color="red" content={error}></Label>}></ErrorMessage>
          </FormField> */}
          {/* <FormField>
          <Field name="unitPrice" placeholder="Ürün fiyatı"></Field>
          <ErrorMessage name="unitPrice" render={error=> 
            <Label pointing basic color="red" content={error}></Label>}></ErrorMessage>
          </FormField> */}
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik> 
  );
}
