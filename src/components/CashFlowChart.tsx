import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CashFlowChart({ data }: any) {
  return (
    <div className="bg-gray-800 p-4 rounded h-[300px] w-full">
      <h2 className="mb-2">Cash Flow</h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Line dataKey="income" stroke="#22c55e" strokeWidth={3} />
          <Line dataKey="expenses" stroke="#ef4444" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}