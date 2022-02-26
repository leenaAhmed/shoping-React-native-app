export default function reducer(state = [], action) {
  console.log({ state, action });
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return { ...state, list: action.payload };

    case "GET_PRODUCT_DETAILS":
      return { ...state, details: action.payload };
    default:
      return state;
  }
}
