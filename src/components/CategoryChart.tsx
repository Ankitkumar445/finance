import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#22c55e", "#3b82f6", "#ef4444"];

export default function CategoryChart({ data }: any) {
  return (
    <div className="bg-gray-800 p-4 rounded h-[300px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value">
            {data.map((_: any, i: number) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}