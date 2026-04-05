import { useState } from "react";
import { useApp } from "../context/AppContext";
import AddTransactionModal from "../components/AddTransactionModal";

export default function Transactions() {
  const { transactions } = useApp();

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);

  // SORT STATE
  const [sortField, setSortField] = useState("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // SORT FUNCTION
  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  // FILTER + SEARCH + SORT
  const filtered = transactions
    .filter((t: any) =>
      t.description.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t: any) =>
      typeFilter === "all" ? true : t.type === typeFilter
    )
    .sort((a: any, b: any) => {
      let valueA = a[sortField];
      let valueB = b[sortField];

      if (sortField === "date") {
        valueA = new Date(a.date).getTime();
        valueB = new Date(b.date).getTime();
      }

      if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
      if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-semibold">Transactions</h1>
          <p className="text-gray-400 text-sm">
            Manage your income and expenses.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 text-white"
        >
          + Add Transaction
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex gap-3 mb-4">
        <input
          placeholder="Search transactions..."
          className="flex-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-2 rounded text-black dark:text-white"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-2 rounded"
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Table */}
      <div className="border border-gray-300 dark:border-gray-800 rounded overflow-hidden bg-white dark:bg-gray-900">
        <table className="w-full text-left">
          <thead className="border-b border-gray-300 dark:border-gray-800 text-gray-500 text-sm">
            <tr>
              <th
                className="p-3 cursor-pointer"
                onClick={() => handleSort("date")}
              >
                Date {sortField === "date" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>

              <th className="p-3">Description / Merchant</th>

              <th
                className="p-3 cursor-pointer"
                onClick={() => handleSort("category")}
              >
                Category {sortField === "category" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>

              <th
                className="p-3 text-right cursor-pointer"
                onClick={() => handleSort("amount")}
              >
                Amount {sortField === "amount" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((t: any) => (
              <tr
                key={t.id}
                className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <td className="p-3">{t.date}</td>

                <td className="p-3">
                  <div>{t.description}</div>
                  <div className="text-gray-500 text-sm">{t.merchant}</div>
                </td>

                <td className="p-3">
                  <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                    {t.category}
                  </span>
                </td>

                <td className="p-3 text-right font-semibold">
                  <span
                    className={
                      t.type === "income"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {t.type === "income" ? "+" : "-"}${t.amount}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && <AddTransactionModal close={() => setShowModal(false)} />}
    </div>
  );
}