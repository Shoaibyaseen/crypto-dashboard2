export const CurrencySwitcher = ({ currency, setCurrency }) => {
  const currencies = [
    { code: 'usd', symbol: '$', name: 'USD' },
    { code: 'eur', symbol: '€', name: 'EUR' },
    { code: 'pkr', symbol: '₨', name: 'PKR' }
  ];

  return (
    <div className="flex space-x-2 mb-4">
      {currencies.map((curr) => (
        <button
          key={curr.code}
          onClick={() => setCurrency(curr.code)}
          className={`px-4 py-2 rounded-md ${
            currency === curr.code
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          } transition-colors`}
        >
          {curr.name} ({curr.symbol})
        </button>
      ))}
    </div>
  );
};