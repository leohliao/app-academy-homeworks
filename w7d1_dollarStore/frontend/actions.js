
export const selectCurrency = (baseCurrency, rates) => ({
    type: "SWITCH_CURRENCY",
    baseCurrency,
    rates
  });

export const clearCurrency = (baseCurrency, rates) => ({
  type: "CLEAR",
  baseCurrency: "",
  rates: {}
});


window.selectCurrency = selectCurrency;
