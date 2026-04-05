import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: any) => {
  const [role, setRole] = useState("admin");

  const [transactions, setTransactions] = useState([
    { id: 1, date: "2026-04-05", amount: 60000, category: "Salary", type: "income", description: "Salary" },
    { id: 2, date: "2026-04-06", amount: 5000, category: "Food", type: "expense", description: "Food" },
  ]);

  return (
    <AppContext.Provider value={{ role, setRole, transactions, setTransactions }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);