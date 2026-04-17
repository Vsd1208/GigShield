import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-[#1e1b2e] border border-[#2d2550] rounded-xl p-3 text-xs shadow-xl">
      <p className="text-[#f1f5f9] font-semibold mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color || p.stroke }} className="font-medium">
          {p.name}: ₹{p.value}
        </p>
      ))}
    </div>
  );
};

const PriceGraph = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(45,37,80,0.5)" vertical={false} />
        <XAxis dataKey="name" tick={{ fill: '#7C72A0', fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#7C72A0', fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
        <Line type="monotone" dataKey="price" stroke="#6C5CE7" strokeWidth={3} dot={{ r: 4, fill: '#6C5CE7' }} name="Predicted Price" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceGraph;