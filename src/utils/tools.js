export const USDtoBTC = (usd, lastPrice) => usd / lastPrice;

export const BTCtoUSD = (btc, lastPrice) => btc * lastPrice;

export const currencyFormatter = (value, digits) => {
  console.log(value.toFixed(digits));
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: digits
  });
  return formatter.format(value);
};
