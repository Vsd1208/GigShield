import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RiskGraph = ({ data = [] }) => {
  const processedData = Array.isArray(data) && data.length > 0 ? data : [
    { name: 'Mon', risk: 0.42, traffic: 35 },
    { name: 'Tue', risk: 0.48, traffic: 42 },
    { name: 'Wed', risk: 0.45, traffic: 38 },
    { name: 'Thu', risk: 0.52, traffic: 48 },
    { name: 'Fri', risk: 0.58, traffic: 55 },
    { name: 'Sat', risk: 0.62, traffic: 62 },
    { name: 'Sun', risk: 0.55, traffic: 58 }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload?.[0]) {
      return (
        <div className="bg-gray-800 text-white p-2 rounded shadow-lg text-sm">
          <p className="font-semibold">{payload[0].payload.name}</p>
          <p className="text-green-400">Risk Score: {(payload[0].value * 100).toFixed(1)}%</p>
          {payload[0].payload.traffic && (
            <p className="text-yellow-400">Traffic: {payload[0].payload.traffic}</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="risk" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RiskGraph;
