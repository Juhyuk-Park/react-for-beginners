import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  // 작성한 달러
  const [dollar, setDollar] = useState(0);
  const onDollarChange = (event) => setDollar(event.target.value);

  // 달러를 나눌 코인의 가격
  const [price, setPrice] = useState(0);
  const onSelectChange = (event) => {
    setPrice(event.target.value);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <div>
            <label htmlFor="USD">USD: </label>
            <input
              id="USD"
              value={dollar}
              type="number"
              placeholder="Write your USD"
              onChange={onDollarChange}
            />
          </div>
          <div>
            Coin: {price ? dollar / price : "Your Coin is not selected."}
          </div>

          <select onChange={onSelectChange}>
            <option key="select">Select your Coin.</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default App;
