import { Formik, FormikHelpers } from "formik";
import { FC, Fragment } from "react";
import { productSchema } from "../../utils/schema";
import {
  Box,
  Button,
  Divider,
  FormHelperText,
  Grid,
  Paper,
  TextareaAutosize,
  Typography,
  useTheme,
} from "@mui/material";
import CustomTextInput from "../global/CustomTextInput";
import { tokens } from "../../utils/theme";
import Carousel from "react-material-ui-carousel";
import CustomButton from "../global/CustomButton";
import CustomButtonSwitch from "../global/CustomButtonSwitch";
import CustomSelect from "../global/CustomSelect";
import { isArray } from "lodash";

export type prodImgType = {
  imgUrl: string;
};
export type InitValuesMenuType = {
  prodName: string;
  category: string;
  quantity: string;
  price: string;
  description: string;
  prodImg: string;
  status: boolean;
  // isDiscountActive: boolean;
  customError?: string;
};

export type ProductFormProps = {
  isPost: boolean;
  initialValues: InitValuesMenuType;
  title: string;

  handleFormSubmit: (values: any, actions: FormikHelpers<any>) => void;
  handleDelete?: () => void;
  loading?: boolean;
};

const Item = (props: any) => {
  console.log("PROPSITEM", props);
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        width: "100%",
        height: "335px",
      }}
    >
      <img
        src={props.item.urlImg || URL.createObjectURL(props.item)}
        alt={props.item.name}
        style={{
          maxWidth: "100%",
          maxHeight: "335px",
          verticalAlign: "middle",
          borderStyle: "none",
        }}
      />
    </Box>
  );
};

const ProductForm: FC<ProductFormProps> = ({
  initialValues,
  title,
  handleFormSubmit,
  isPost,
  handleDelete,
  loading,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const items = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      cols: 2,
    },
  ];

  return (
    <Fragment>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={productSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={{ xs: 1, md: 4 }}
              justifyContent="space-between"
              gridTemplateColumns={"repeat(12, 1fr)"}
            >
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Paper>
                  <Box p={3}>
                    <Typography variant="h5" fontWeight={"bold"}>
                      {title}
                    </Typography>
                  </Box>
                  <Divider />
                  <Box p={3}>
                    <CustomTextInput
                      label="Product Name"
                      name={"prodName"}
                      value={values.prodName}
                      handleBlur={handleBlur}
                      touched={touched.prodName}
                      error={errors.prodName}
                      handleChange={handleChange}
                      placeholder="Product Name"
                      styles={{
                        backgroundColor: colors.primary[100],
                        border: 1,
                        borderRadius: 0,
                        borderColor: colors.grey[100],
                        boxShadow: "none",
                        padding: 0.5,
                        marginBottom: "10px",
                      }}
                    />
                    <Box
                      p={1}
                      sx={{
                        marginBottom: "10px",
                      }}
                    >
                      <Typography mb={1}>Select Category</Typography>
                      <CustomSelect
                        items={[
                          { id: 1, value: "Soft Drinks", name: "Soft Drinks" },
                          { id: 2, value: "Frozen", name: "Frozen" },
                          { id: 3, value: "Beverages", name: "Beverages" },
                          { id: 4, value: "Vegetables", name: "Vegetables" },
                          { id: 5, value: "Snacks", name: "Snacks" },
                        ]}
                        name="category"
                        error={errors.category}
                        value={values.category}
                        handleChange={handleChange}
                        styles={{ width: "100%" }}
                      />
                    </Box>

                    <Box
                      display={"flex"}
                      sx={{
                        marginBottom: "10px",
                      }}
                    >
                      <CustomTextInput
                        label="Quantity"
                        name="quantity"
                        error={errors.quantity}
                        handleBlur={handleBlur}
                        touched={touched.quantity}
                        value={values.quantity}
                        handleChange={handleChange}
                        styles={{
                          backgroundColor: colors.primary[100],
                          border: 1,
                          borderRadius: 0,
                          borderColor: colors.grey[100],
                          boxShadow: "none",
                          padding: 0.5,
                        }}
                      />
                      <CustomTextInput
                        label="Price"
                        name="price"
                        value={values.price}
                        error={errors.price}
                        handleBlur={handleBlur}
                        touched={touched.price}
                        handleChange={handleChange}
                        styles={{
                          backgroundColor: colors.primary[100],
                          border: 1,
                          borderRadius: 0,
                          borderColor: colors.grey[100],
                          boxShadow: "none",
                          padding: 0.5,
                        }}
                      />
                    </Box>
                    <Box width={"100%"} p={1} sx={{ marginBottom: "10px" }}>
                      <Typography mb={1}>Description</Typography>

                      <TextareaAutosize
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoCapitalize="true"
                        maxRows={10}
                        minRows={10}
                        placeholder="Description..."
                        style={{
                          color: colors.white[900],
                          backgroundColor: colors.primary[100],
                          minWidth: "100%",
                          maxWidth: "100%",
                          borderColor: colors.grey[100],
                        }}
                      />
                      {touched.description && errors.description && (
                        <FormHelperText error>
                          {errors.description}
                        </FormHelperText>
                      )}
                    </Box>

                    <Box width={"100%"} p={1}>
                      <Button
                        variant="contained"
                        component="label"
                        fullWidth
                        sx={{
                          border: 1,
                          borderRadius: 0,
                          borderColor: colors.grey[100],
                          boxShadow: "none",
                          cursor: "default",
                          p: 0,
                          "&:hover": {
                            border: 1,
                            borderRadius: 0,
                            borderColor: colors.grey[100],
                            boxShadow: "none",
                            cursor: "default",
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          width={"100%"}
                        >
                          <Typography
                            fontSize={14}
                            p={1}
                            style={{ textTransform: "none" }}
                          >
                            Upload Images
                          </Typography>
                          <Box
                            sx={{
                              backgroundColor: colors.primary[400],
                            }}
                          >
                            <Typography
                              fontSize={14}
                              p={1}
                              sx={{
                                color: "black",
                                textTransform: "none",
                              }}
                            >
                              Browse
                            </Typography>
                          </Box>
                          <input
                            name="prodImg"
                            multiple
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={(event) => {
                              setFieldValue(
                                "prodImg",
                                event.currentTarget.files
                              );
                            }}
                          />
                        </Box>
                      </Button>
                      {touched.prodImg && errors.prodImg && (
                        <FormHelperText error>{errors.prodImg}</FormHelperText>
                      )}
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Paper>
                  <Box p={3}>
                    <Typography variant="h5" fontWeight={"bold"}>
                      Product
                    </Typography>
                  </Box>
                  <Divider />

                  <Box p={3}>
                    {isArray(Array.from(values.prodImg)) &&
                    Array.from(values.prodImg).length !== 0 ? (
                      <Carousel>
                        {Array.from(values.prodImg).map((item: any, i) => (
                          <Item key={item.name} item={item} />
                        ))}
                      </Carousel>
                    ) : (
                      <Box
                        sx={{
                          height: "335px",
                        }}
                      ></Box>
                    )}
                    <Box>
                      <CustomButtonSwitch
                        value={values.status}
                        error={errors.status}
                        name="status"
                        text="Status Available"
                        onClickHandler={handleChange}
                      />

                      <Divider />
                      {/* <CustomButtonSwitch
                        error={errors.isDiscountActive}
                        value={values.isDiscountActive}
                        name="isDiscountActive"
                        text="Discount Active"
                        onClickHandler={handleChange}
                      />
                      <Divider /> */}
                    </Box>
                    <Box
                      mt={4}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {!isPost ? (
                        <CustomButton
                          type="button"
                          handleSubmit={() => {
                            handleDelete && handleDelete();
                          }}
                          isDisabled={loading && !isSubmitting && loading}
                          label="Delete"
                          styles={{
                            padding: "10px 30px",
                            borderRadius: "none",
                            backgroundColor: colors.white[900],
                            color: colors.white[100],
                          }}
                        />
                      ) : (
                        <Box></Box>
                      )}
                      <CustomButton
                        label="Save"
                        styles={{ padding: "10px 30px", borderRadius: "none" }}
                      />
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Fragment>
  );
};

export default ProductForm;
