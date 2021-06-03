
import { useEffect, useState } from "react";
function BitcoinPage() {
  const [availableCurrencies, setAvailableCurrencies] = useState([]);

  const getData = async () => {
    const r = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const parsed = await r.json();
    setAvailableCurrencies(Object.values(parsed.bpi).map(p => { return { name: p.description, code: p.code } }));
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div>
      <h1>Choose your currency:</h1>
      <div>
        {availableCurrencies.map(c =>
          <button onClick={() => { document.location = `/bitcoin/${c.code}` }}>
            {c.name}
          </button>
        )}
      </div>
    </div>
  );
}
export default BitcoinPage;
