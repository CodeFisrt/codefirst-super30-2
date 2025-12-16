import "./App.css";
import { useState } from "react";
import Login from "./components/LogIn";
import NumberForm from "./components/NumberForm";
import DateTimeFilter from "./components/Filter";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [results, setResults] = useState([]);

  const addResult = (number) => {
    const now = new Date();

    const newResult = {
      value: number,
      date: now.toISOString().split("T")[0],
      time: now.toTimeString().slice(0, 5),
    };

    setResults((prev) => [...prev, newResult]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : !showFilter ? (
        <NumberForm
          setNumber={addResult}
          goToFilter={() => setShowFilter(true)}
        />
      ) : (
        <DateTimeFilter results={results} />
      )}
    </div>
  );
}
