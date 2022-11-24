import { getRandomDate } from "../utils/getRamdomDate";

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
      const addDateToItems = payload.map((items) => ({
        ...items,
        date: getRandomDate(new Date(2022, 0, 1), new Date()),
      }));
      return { ...state, productsData: addDateToItems, isLoading: false };
    case "addPoints":
      return { ...state, points: payload };
    case "redeemProduct":
      return { ...state, redeemMessage: payload, isLoading: false };
    case "filterByCategory":
      return { ...state, visibilityCategory: payload };
    case "sortByPrice":
      return { ...state, visibilityPrice: payload };
    default:
      return state;
  }
};
