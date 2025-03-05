"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveBox } from "@/lib/storage";

export const useBoxForm = () => {
  const [receiver, setReceiver] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("#666");
  const [destination, setDestination] = useState("Sweden");
  const [error, setError] = useState("");
  const router = useRouter();

  const multipliers = {
    Sweden: process.env.NEXT_PUBLIC_SWEDEN_MULTIPLIER || 7.35,
    China: process.env.NEXT_PUBLIC_CHINA_MULTIPLIER || 11.53,
    Brazil: process.env.NEXT_PUBLIC_BRAZIL_MULTIPLIER || 15.63,
    Australia: process.env.NEXT_PUBLIC_AUSTRALIA_MULTIPLIER || 50.09,
  };

  const handleWeightChange = (e) => {
    let value = e.target.value;

    if (value < 0) {
      setError("Weight cannot be negative! Defaulting to 0.");
      setWeight(0);
    } else {
      setError("");
      setWeight(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!receiver || weight === "") {
      setError("All fields are required!");
      return;
    }

    const validWeight = parseFloat(weight);

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
    router.push("/list");
  };

  return {
    receiver,
    setReceiver,
    weight,
    setWeight,
    color,
    setColor,
    destination,
    setDestination,
    error,
    handleWeightChange,
    handleSubmit,
  };
};
