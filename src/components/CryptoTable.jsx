// Add this to the component
const isMobile = window.innerWidth < 768;

if (isMobile) {
  return (
    <div className="space-y-2">
      {sortedCryptos.map((crypto, index) => (
        <div key={crypto.id} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">{index + 1}</span>
              <img src={crypto.image} alt={crypto.name} className="w-6 h-6 mr-2" />
              <span className="font-medium">{crypto.symbol.toUpperCase()}</span>
            </div>
            <div className="text-right">
              <div className="font-medium">
                {currencySymbols[currency]}{crypto.current_price.toLocaleString()}
              </div>
              <div className={`text-sm ${
                crypto.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {crypto.price_change_percentage_24h >= 0 ? '+' : ''}
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}