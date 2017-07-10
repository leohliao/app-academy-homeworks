const initialState = {
  baseCurrency: "Please select",
  rates: {}
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "SWITCH_CURRENCY":
      return {
        baseCurrency: action.baseCurrency,
        rates: action.rates
      };
    case "CLEAR":
      return {
        baseCurrency: "",
        rates: {}
      };
  default:
    return state; // remove this and fill out the body of the reducer function
  } //switch
};

export default reducer;
