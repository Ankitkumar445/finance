import { useApp } from "../context/AppContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { role, setRole } = useApp();

  return (
    <div className="flex justify-between p-4 border-b dark:border-gray-700">
      <ThemeToggle />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="admin">Admin</option>
        <option value="viewer">Viewer</option>
      </select>
    </div>
  );
}