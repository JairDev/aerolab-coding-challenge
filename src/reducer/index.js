export const initialState = {
  userData: {},
  points: {},
  productsData: [],
  redeemMessage: {}
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "receiveUserData":
      return { ...state, userData: payload };
    case "receiveProductsDate": 
    return {...state, productsData: payload}
    case "addPoints": 
    return {...state, points: payload}
    case "redeemPoints":
      return {...state, redeemMessage: payload}
    default:
      return state;
  }
}