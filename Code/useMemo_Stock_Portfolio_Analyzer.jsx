// Stock Portfolio Analyzer
import React, { useState, useMemo } from 'react';

const StockAnalyzer = () => {
  const [stocks, setStocks] = useState([
    { name: 'AAPL', price: 150 },
    { name: 'GOOGL', price: 2800 },
    { name: 'AMZN', price: 3400 },
    { name: 'MSFT', price: 299 },
  ]);
  const [search, setSearch] = useState('');

  // Expensive computation: Calculating total value of stocks
  const totalValue = useMemo(() => {
    console.log('Calculating total stock value...');
    return stocks.reduce((total, stock) => total + stock.price, 0);
  }, [stocks]);

  // Filter stocks based on search query
  const filteredStocks = useMemo(() => {
    console.log('Filtering stocks...');
    return stocks.filter((stock) => stock.name.toLowerCase().includes(search.toLowerCase()));
  }, [stocks, search]);

  const addStock = () => {
    const newStock = { name: 'TSLA', price: 900 };
    setStocks((prevStocks) => [...prevStocks, newStock]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Stock Portfolio Analyzer</h1>
      <p>Total Portfolio Value: ${totalValue}</p>
      <input
        type="text"
        placeholder="Search stocks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={addStock}>Add Tesla Stock</button>
      <ul>
        {filteredStocks.map((stock, index) => (
          <li key={index}>{stock.name} - ${stock.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default StockAnalyzer;