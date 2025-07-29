import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const BitcoinChart = ({ data, currency }) => {
  const currencySymbols = {
    usd: '$',
    eur: '€',
    pkr: '₨'
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Bitcoin Price (7 Days)</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" stroke="#888" />
            <YAxis 
              stroke="#888"
              tickFormatter={(value) => `${currencySymbols[currency]}${value.toLocaleString()}`}
            />
            <Tooltip 
              formatter={(value) => [`${currencySymbols[currency]}${value.toLocaleString()}`, 'Price']}
              labelFormatter={(label) => `Date: ${label}`}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="#F7931A" 
              strokeWidth={2} 
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
              name="Bitcoin Price"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};