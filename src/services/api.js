import { useCryptoData } from './hooks/useCryptoData';
import { Loader } from './components/Loader';
import { CryptoTable } from './components/CryptoTable';
import { BitcoinChart } from './components/BitcoinChart';
import { CurrencySwitcher } from './components/CurrencySwitcher';

function App() {
  const { topCryptos, bitcoinData, loading, error, currency, setCurrency } = useCryptoData();

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-700">{error}</p>
          <p className="text-gray-500 mt-2">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Crypto Dashboard</h1>
        
        <div className="mb-8">
          <CurrencySwitcher currency={currency} setCurrency={setCurrency} />
        </div>

        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Top 10 Cryptocurrencies</h2>
                <CryptoTable cryptos={topCryptos} currency={currency} />
              </div>
              
              <BitcoinChart data={bitcoinData} currency={currency} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;