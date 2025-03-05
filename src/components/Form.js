"use client";
import { useState } from "react";
import { saveBox } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { useBoxForm } from "@/hooks/useForm";

const Form = () => {
  const {
    receiver,
    setReceiver,
    weight,
    color,
    setColor,
    destination,
    setDestination,
    error,
    handleWeightChange,
    handleSubmit,
  } = useBoxForm();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a Box</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Receiver Name"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={handleWeightChange}
          className="w-full p-2 border rounded"
        />

        <div className="flex items-center space-x-2 ">
          <label>Box Color:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-10 h-10"
          />
        </div>

        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Sweden">Sweden</option>
          <option value="China">China</option>
          <option value="Brazil">Brazil</option>
          <option value="Australia">Australia</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Save Box
        </button>
      </form>
    </div>
  );
};

export default Form;
