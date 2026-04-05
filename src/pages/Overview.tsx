import { useApp } from "../context/AppContext";
import Card from "../components/Card";
import CashFlowChart from "../components/CashFlowChart";
import CategoryChart from "../components/CategoryChart";

export default function Overview() {
  const { transactions } = useApp();

  const income = transactions
    .filter((t: any) => t.type === "income")
    .reduce((a: number, b: any) => a + b.amount, 0);

  const expenses = transactions
    .filter((t: any) => t.type === "expense")
    .reduce((a: number, b: any) => a + b.amount, 0);

  // 📊 Monthly chart (basic)
  const chartData = [
    { month: "Apr", income, expenses },
  ];

  // 📊 Category breakdown
  const categoryMap: any = {};
  transactions.forEach((t: any) => {
    categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
  });

  const categoryData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  return (
    <div>
      <h1 className="text-2xl mb-6">Overview</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card title="Balance" value={`$${income - expenses}`} />
        <Card title="Income" value={`$${income}`} />
        <Card title="Expenses" value={`$${expenses}`} />
        <Card
          title="Savings"
          value={`${income ? ((income - expenses) / income) * 100 : 0}%`}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CashFlowChart data={chartData} />
        <CategoryChart data={categoryData} />
      </div>
    </div>
  );
}