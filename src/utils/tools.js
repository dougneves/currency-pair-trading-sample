export const USDtoBTC = (usd, lastPrice) =>
  lastPrice > 0 ? usd / lastPrice : 0;

export const BTCtoUSD = (btc, lastPrice) => btc * lastPrice;

export const currencyFormatter = (value, digits) => {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: digits,
    useGrouping: false
  });
  return formatter.format(Math.abs(value));
};
