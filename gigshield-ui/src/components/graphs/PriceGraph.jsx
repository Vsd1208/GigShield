import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PriceGraph = ({ data = [] }) => {
  const processedData = Array.isArray(data) && data.length > 0 ? data : [
    { name: 'Jan', price: 99, riskScore: 0.45 },
    { name: 'Feb', price: 105, riskScore: 0.48 },
    { name: 'Mar', price: 98, riskScore: 0.42 },
    { name: 'Apr', price: 112, riskScore: 0.52 },
    { name: 'May', price: 108, riskScore: 0.50 },
    { name: 'Jun', price: 115, riskScore: 0.54 }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload?.length > 0) {
      return (
        <div className="bg-gray-800 text-white p-2 rounded shadow-lg text-sm">
          <p className="font-semibold">{payload[0].payload.name}</p>
          <p className="text-blue-400">Premium: Rs {Number(payload[0].value).toFixed(2)}</p>
          {payload[0].payload.riskScore !== undefined && (
            <p className="text-orange-400">Risk: {(payload[0].payload.riskScore * 100).toFixed(1)}%</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceGraph;
