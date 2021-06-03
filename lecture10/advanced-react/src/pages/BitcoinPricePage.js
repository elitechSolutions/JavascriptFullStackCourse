
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BitcoinPricePage() {
  const [priceInCurrency, setPriceInCurrency] = useState(0);
  const [currencyName, setCurrencyName] = useState('');
  const { currencyCode } = useParams();

  const getData = async () => {
    const r = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const parsed = await r.json();
    setPriceInCurrency(parsed.bpi[currencyCode].rate);
    setCurrencyName(parsed.bpi[currencyCode].description);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Price of Bitcoin in {currencyName} is : </h2>
      <div>
        <h2>{priceInCurrency}</h2>
      </div>
    </div >
  );
}

export default BitcoinPricePage;
