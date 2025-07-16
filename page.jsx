'use client';
import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function ArkExpressRide() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("This would normally submit your booking and handle payment.");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-2xl">
        <CardContent className="space-y-6 p-6">
          <h1 className="text-3xl font-bold text-center text-blue-700">
            Ark Express Ride
          </h1>
          <p className="text-center text-gray-600">
            Book your ride and reserve with a 10% fee.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="pickup"
              required
              placeholder="Pickup Location"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="dropoff"
              required
              placeholder="Dropoff Location"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="date"
              name="date"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="time"
              name="time"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <Button type="submit" className="w-full">
              Book Ride & Pay 10% Fee
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}