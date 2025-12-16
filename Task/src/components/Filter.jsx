import React from "react";
import { useState } from "react";

// function DateTimeFilter({ number }) {
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");

//   return (
//     <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
//       <h2 className="text-2xl font-semibold mb-4 text-center">
//         Select Date & Time
//       </h2>

//       <input
//         type="date"
//         onChange={(e) => setDate(e.target.value)}
//         className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
//       />

//       <input
//         type="time"
//         onChange={(e) => setTime(e.target.value)}
//         className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
//       />

//       {date && time && (
//         <div className="mt-4 p-3 bg-purple-100 rounded-lg text-center">
//           <p className="text-lg">
//             Entered Number:
//             <span className="font-bold text-purple-700"> {number}</span>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

export default function Filter({ results }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // If no date/time selected → all results shown
  const filteredResults = results.filter((item) => {
    return (
      (!selectedDate || item.date === selectedDate) &&
      (!selectedTime || item.time === selectedTime)
    );
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Previous Results
      </h2>

      {/* Filters */}
      <div className="mb-4">
        <label className="block text-sm mb-1">Filter by Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Filter by Time</label>
        <input
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Results */}
      {filteredResults.length === 0 ? (
        <p className="text-gray-500 text-sm text-center">No results found</p>
      ) : (
        <ul className="space-y-2">
          {filteredResults.map((item, index) => (
            <li
              key={index}
              className="border rounded-lg p-3 flex justify-between items-center"
            >
              <span className="font-medium">Number: {item.value}</span>
              <span className="text-sm text-gray-500">
                {item.date} • {item.time}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
