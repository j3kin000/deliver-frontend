import { Box } from "@mui/material";
import { useState } from "react";
import { FormikHelpers } from "formik";

import CustomAlert, {
  CustomAlertProps,
} from "../../components/global/CustomAlert";
import ProductForm, {
  InitValuesMenuType,
} from "../../components/menu/ProductForm";
import { uploadImage } from "../../utils/helper/uploadImage";
import CustomModalLoader from "../../components/global/CustomModalLoader";
import { addProduct } from "../../api/endpoint";
import { initialProductValue } from "../../utils/constants/constants";

const ProductAdd = () => {
  const initialValues: InitValuesMenuType = initialProductValue;
  const [alert, setAlert] = useState<CustomAlertProps>({
    type: "",
    message: "",
  });
  const [collapse, setCollapse] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleFormSubmit = async (
    values: InitValuesMenuType,
    actions: FormikHelpers<any>
  ) => {
    try {
      // window.scrollTo(0, 0);
      setLoading(true);
      const prodImg: any[] = Array.from(values.prodImg);

      let params = {
        prodName: values.prodName,
        category: values.category,
        quantity: values.quantity,
        price: values.price,
        description: values.description,
        prodImg: [{ urlImg: "", name: "" }],
        status: values.status,
        // isDiscountActive: values.isDiscountActive,
      };

      const imageUrls = await uploadImages(prodImg);
      params.prodImg = imageUrls;

      const response = await addProduct(params);
      setLoading(false);
      setCollapse(true);
      setAlert({
        type: "success",
        message: "Succefully Added to the product list",
      });
    } catch (error) {
      setLoading(false);
      setCollapse(true);
      setAlert({
        type: "error",
        message: `Error uploading image ${error}`,
      });
    } finally {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const uploadImages = async (items: File[]) => {
    const uploadPromises = items.map(async (item, index) => {
      try {
        const urlImg = await uploadImage(item);
        return { urlImg: urlImg, name: item.name };
      } catch (error) {
        throw error;
      }
    });

    return Promise.all(uploadPromises);
  };

  return (
    <Box pt={2.4}>
      <CustomModalLoader loading={loading} setLoading={setLoading} />

      {alert.type && (
        <CustomAlert
          type={alert.type}
          message={alert.message}
          collapse={collapse}
          setCollapse={setCollapse}
        />
      )}
      <Box flexGrow={1} pt={2}>
        <ProductForm
          isPost={true}
          handleFormSubmit={handleFormSubmit}
          title="Product Add Form"
          initialValues={initialValues}
        />
      </Box>
    </Box>
  );
};

export default ProductAdd;
