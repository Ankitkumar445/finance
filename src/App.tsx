import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Overview from "./pages/Overview";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";

export default function App() {
  const [page, setPage] = useState("overview");

  const renderPage = () => {
    if (page === "transactions") return <Transactions />;
    if (page === "insights") return <Insights />;
    return <Overview />;
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <Sidebar setPage={setPage} />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">{renderPage()}</div>
      </div>
    </div>
  );
}