export default function Sidebar({ setPage }: any) {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">FinanceDash</h1>

      <button onClick={() => setPage("overview")} className="block text-2xl mb-3">Overview</button>
      <button onClick={() => setPage("transactions")} className="block mb-3 text-2xl ">Transactions</button>
      <button onClick={() => setPage("insights")} className="block text-2xl ">Insights</button>
    </div>
  );
}