import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCryptoData = () => {
  const [topCryptos, setTopCryptos] = useState([]);
  const [bitcoinData, setBitcoinData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState('usd');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [cryptosRes, bitcoinRes] = await Promise.all([
          axios.get('/api/top-cryptos', { params: { vs_currency: currency } }),
          axios.get('/api/bitcoin-chart', { params: { vs_currency: currency } })
        ]);
        
        setTopCryptos(cryptosRes.data);
        
        // Process bitcoin chart data
        const prices = bitcoinRes.data.prices.map(([timestamp, price]) => ({
          date: new Date(timestamp).toLocaleDateString(),
          price: price
        }));
        setBitcoinData(prices);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currency]);

  return { topCryptos, bitcoinData, loading, error, currency, setCurrency };
};