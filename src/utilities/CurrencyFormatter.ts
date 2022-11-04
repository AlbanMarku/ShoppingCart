const numberFormatter = new Intl.NumberFormat('en-UK', {
  style: 'currency',
  currency: 'GBP',
});

function CurrencyFormatter(num: number) {
  return numberFormatter.format(num);
}

export default CurrencyFormatter;
