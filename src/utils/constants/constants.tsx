import { columnDataProps } from "../../components/global/CustomTable";

export const initialProductValue = {
  prodName: "",
  category: "Soft Drinks",
  quantity: "",
  price: "",
  description: "",
  prodImg: "",
  status: true,
  // isDiscountActive: false,
};
export const tableHeader: columnDataProps[] = [
  {
    id: "prodId",
    name: "Product Id ",
    enableSort: true,
    align: "center",
  },
  {
    id: "prodName",
    name: "Product Name",
    enableSort: true,
    align: "center",
  },
  {
    id: "quantity",
    name: "Quantity",
    enableSort: true,
    align: "center",
  },
  {
    id: "status",
    name: "Status",
    enableSort: true,
    align: "center",
  },
  {
    id: "price",
    name: "Price",
    enableSort: true,
    align: "center",
  },
];
