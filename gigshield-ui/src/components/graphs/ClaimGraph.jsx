import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-[#1e1b2e] border border-[#2d2550] rounded-xl p-3 text-xs shadow-xl">
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.payload.fill || p.color }} className="font-medium">
          {p.name}: {(p.value).toFixed(1)}%
        </p>
      ))}
    </div>
  );
};

const ClaimGraph = ({ data }) => {
  const COLORS = ['#6C5CE7', '#1abc9c', '#f39c12', '#e74c3c'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ClaimGraph;