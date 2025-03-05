"use client";
import { useState } from "react";

const Form = () => {
  const [receiver, setReceiver] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [destination, setDestination] = useState("Sweden");
  const [error, setError] = useState("");

  const multipliers = {
    Sweden: 7.35,
    China: 11.53,
    Brazil: 15.63,
    Australia: 50.09,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!receiver || weight === "") {
      setError("All fields are required!");
      return;
    }

    const validWeight = Math.max(0, parseFloat(weight));

    const newBox = {
      receiver,
      weight: validWeight,
      color,
      destination,
      cost: validWeight * multipliers[destination],
    };

    saveBox(newBox);
    setReceiver("");
    setWeight("");
    setColor("#ffffff");
    setDestination("Sweden");
    setError("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add a Box</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Receiver Name"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          className="w-full p-2 mb-4 border"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-2 mb-4 border"
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full p-2 mb-4"
        />
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 mb-4 border"
        >
          <option value="Sweden">Sweden</option>
          <option value="China">China</option>
          <option value="Brazil">Brazil</option>
          <option value="Australia">Australia</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white p-2">
          Save Box
        </button>
      </form>
    </div>
  );
};

export default Form;
