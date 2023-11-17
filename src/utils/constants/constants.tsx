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
export const initialAgentValue = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  branch: "Main",
};
export const productTableHeader: columnDataProps[] = [
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

export const agentTableHeader: columnDataProps[] = [
  {
    id: "agentId",
    name: "Agent Id ",
    enableSort: true,
    align: "center",
  },
  {
    id: "name",
    name: "Full Name",
    enableSort: true,
    align: "center",
  },
  {
    id: "email",
    name: "Email",
    enableSort: true,
    align: "center",
  },
  {
    id: "branch",
    name: "Branch",
    enableSort: true,
    align: "center",
  },
  {
    id: "phoneNumber",
    name: "Phone Number",
    enableSort: true,
    align: "center",
  },
];
