"use client";
import { useEffect, useState } from "react";
import { getBoxes } from "@/lib/storage";

const Table = () => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    setBoxes(getBoxes());
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Stored Boxes</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Receiver</th>
            <th className="p-2">Weight (kg)</th>
            <th className="p-2">Color</th>
            <th className="p-2">Destination</th>
            <th className="p-2">Cost (INR)</th>
          </tr>
        </thead>
        <tbody>
          {boxes.map((box, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{box.receiver}</td>
              <td className="p-2">{box.weight}</td>
              <td className="p-2">
                <div
                  className="w-6 h-6"
                  style={{ backgroundColor: box.color }}
                ></div>
              </td>
              <td className="p-2">{box.destination}</td>
              <td className="p-2">{box.cost.toFixed(2)} INR</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
