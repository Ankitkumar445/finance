import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function AddTransactionModal({ close }: any) {
  const { transactions, setTransactions } = useApp();

  const [form, setForm] = useState({
    type: "expense",
    date: "",
    amount: 0,
    category: "",
    merchant: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newTx = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    };

    setTransactions([...transactions, newTx]);
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-xl w-[500px] border border-gray-700">

        {/* Header */}
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Add Transaction</h2>
          <button onClick={close}>✕</button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 gap-4">

          <select
            name="type"
            onChange={handleChange}
            className="bg-gray-800 p-2 rounded border border-gray-700"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="bg-gray-800 p-2 rounded border border-gray-700"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            onChange={handleChange}
            className="bg-gray-800 p-2 rounded border border-gray-700"
          />

          <input
            name="category"
            placeholder="Category"
            onChange={handleChange}
            className="bg-gray-800 p-2 rounded border border-gray-700"
          />

          <input
            name="merchant"
            placeholder="Merchant"
            onChange={handleChange}
            className="bg-gray-800 p-2 rounded border border-gray-700 col-span-2"
          />

          <input
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="bg-gray-800 p-2 rounded border border-gray-700 col-span-2"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={close}
            className="px-4 py-2 border border-gray-600 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
          >
            Create Transaction
          </button>
        </div>
      </div>
    </div>
  );
}