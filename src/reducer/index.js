export const initialState = {
  userData: {},
  points: {},
  productsData: [],
  redeemMessage: {},
  visibility: "all",
  visibilityPrice: ""
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "receiveUserData":
      return { ...state, userData: payload };
    case "receiveProductsData":
      return { ...state, productsData: payload, data: payload };
    case "addPoints":
      return { ...state, points: payload };
    case "redeemPoints":
      return { ...state, redeemMessage: payload };
    case "filterByCategory":
      return { ...state, visibility: payload, visibilityPrice: "" };
    case "filterByPrice":
      return { ...state, visibilityPrice: payload };
    default:
      return state;
  }
};
