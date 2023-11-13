import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductForm from "../../components/menu/ProductForm";
import { InitValuesMenuType } from "../../utils/schema";
import { FormikHelpers } from "formik";
import { initialProductValue } from "../../utils/constants/constants";
import { useNavigate, useParams } from "react-router-dom";
import SuspenseLoader from "../../components/router/SuspenseLoader";
import { deleteProduct, getProduct, updateProduct } from "../../api/endpoint";
import { uploadImage } from "../../utils/helper/uploadImage";
import CustomModalLoader from "../../components/global/CustomModalLoader";
import CustomAlert, {
  CustomAlertProps,
} from "../../components/global/CustomAlert";

const ProductView = () => {
  const { prodId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formLoader, setFormLoader] = useState(false);

  const [initialValues, setInitialValues] = useState(initialProductValue);
  const [alert, setAlert] = useState<CustomAlertProps>({
    type: "",
    message: "",
  });
  const [collapse, setCollapse] = useState(true);
  useEffect(() => {
    const initProduct = async () => {
      try {
        if (prodId) {
          setLoading(true);
          const response = await getProduct(prodId);
          console.log("data", response);
          if (response.data.product) {
            setInitialValues(response.data.product);
          } else {
            setInitialValues(initialProductValue);
          }
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    initProduct();
  }, [prodId]);

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

  const handleFormSubmit = async (
    values: InitValuesMenuType,
    actions: FormikHelpers<any>
  ) => {
    setFormLoader(true);

    try {
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

      if (prodImg[0]?.urlImg) {
        console.log("prodImg[0]?.imgUrl", prodImg[0]?.imgUrl);
        params.prodImg = prodImg;
      } else {
        const imageUrls = await uploadImages(prodImg);
        params.prodImg = imageUrls;
      }
      if (prodId) {
        const response = await updateProduct(prodId, params);
      }
      setFormLoader(false);
      setCollapse(true);
      setAlert({
        type: "success",
        message: "Succefully Updated  the product ",
      });
      setTimeout(() => {
        navigate("/menu/product-list");
      }, 2000);
    } catch (error) {
      setFormLoader(false);
      setCollapse(true);
      setAlert({
        type: "error",
        message: `Error updating the product: ${error}`,
      });
    } finally {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleDelete = async () => {
    console.log("loadingers 1 ");
    if (prodId) {
      try {
        setFormLoader(true);
        console.log("loadingers 2 ");
        const response = await deleteProduct(prodId);
        console.log("RESPONSE", response);
        //need to have a modal saying succefully deleted then navigate to proct view
        navigate("/menu/product-list");
      } catch (error) {
      } finally {
        setFormLoader(false);
      }
    }
  };
  return (
    <Box pt={2.4}>
      <CustomModalLoader loading={formLoader} setLoading={setFormLoader} />

      {alert.type && (
        <CustomAlert
          type={alert.type}
          message={alert.message}
          collapse={collapse}
          setCollapse={setCollapse}
        />
      )}

      {loading ? (
        <SuspenseLoader />
      ) : (
        <Box flexGrow={1} pt={2}>
          <ProductForm
            loading={formLoader}
            isPost={false}
            handleFormSubmit={handleFormSubmit}
            title="Product Edit Form"
            initialValues={initialValues}
            handleDelete={handleDelete}
          />
        </Box>
      )}
    </Box>
  );
};

export default ProductView;
