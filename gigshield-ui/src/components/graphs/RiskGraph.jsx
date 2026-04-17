import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-[#1e1b2e] border border-[#2d2550] rounded-xl p-3 text-xs shadow-xl">
      <p className="text-[#f1f5f9] font-semibold mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color || '#27ae60' }} className="font-medium">
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
};

const RiskGraph = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#27ae60" stopOpacity={0.4}/>
            <stop offset="95%" stopColor="#27ae60" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(45,37,80,0.5)" vertical={false} />
        <XAxis dataKey="name" tick={{ fill: '#7C72A0', fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#7C72A0', fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="risk" stroke="#27ae60" fillOpacity={1} fill="url(#colorRisk)" name="Risk Score" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RiskGraph;