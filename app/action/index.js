import axios from "axios";
const baseUrl = "https://fakestoreapi.com/products";

export const getProduct = async () => {
  let users = [];
  try {
    const response = await axios.get(baseUrl);
    users = response.data;
  } catch (error) {
    console.error(error);
  }

  return {
    type: "GET_ALL_PRODUCTS",
    payload: users
  };
};
export const getProductDetails = async (id) => {
  let user = [];
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    user = response.data;
  } catch (error) {
    console.error(error);
  }
  return {
    type: "GET_PRODUCT_DETAILS",
    payload: user
  };
};

export const ClearDetail = () => {
  return {
    type: "GET_PRODUCT_DETAILS",
    payload: {}
  };
};
