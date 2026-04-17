import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FraudGraph = ({ data = [] }) => {
  const processedData = Array.isArray(data) && data.length > 0 ? data : [
    { name: '0 claims', fraud: 12, confidence: 0.85 },
    { name: '1 claim', fraud: 8, confidence: 0.92 },
    { name: '2 claims', fraud: 15, confidence: 0.78 },
    { name: '3 claims', fraud: 10, confidence: 0.88 },
    { name: '4+ claims', fraud: 6, confidence: 0.95 }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload?.length > 0) {
      return (
        <div className="bg-gray-800 text-white p-2 rounded shadow-lg text-sm">
          <p className="font-semibold">{payload[0].payload.name}</p>
          <p className="text-red-400">Fraud cases: {payload[0].value}</p>
          {payload[0].payload.confidence !== undefined && (
            <p className="text-green-400">Fraud rate: {(payload[0].payload.confidence * 100).toFixed(1)}%</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="fraud" fill="#ff7300" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FraudGraph;
