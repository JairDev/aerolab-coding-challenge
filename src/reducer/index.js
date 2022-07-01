export const initialState = {
  userData: {},
  points: {},
  productsData: [],
  redeemMessage: {},
  visibilityCategory: "all",
  visibilityPrice: "",
  isLoading: false,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "dataFetch":
      return { ...state, isLoading: true };
    case "receiveUserData":
      return { ...state, userData: payload };
    case "receiveProductsData":
      return { ...state, productsData: payload, isLoading: false };
    case "addPoints":
      return { ...state, points: payload };
    case "redeemProduct":
      return { ...state, redeemMessage: payload, isLoading: false };
    case "filterByCategory":
      return { ...state, visibilityCategory: payload, visibilityPrice: "" };
    case "sortByPrice":
      return { ...state, visibilityPrice: payload };
    default:
      return state;
  }
};
