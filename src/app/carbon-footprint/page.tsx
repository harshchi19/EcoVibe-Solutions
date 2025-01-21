// src/app/carbon-footprint/page.tsx
'use client'

import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

Chart.register(CategoryScale, LinearScale, BarElement);

interface CarbonFootprintData {
  wasteCarbon: number;
  energyCarbon: number;
  transportCarbon: number;
  dietCarbon: number;
  totalCarbon: number;
  historicalData: number[];
}

export default function CarbonFootprintPage() {
  const [carbonData, setCarbonData] = useState<CarbonFootprintData>({
    wasteCarbon: 0,
    energyCarbon: 0,
    transportCarbon: 0,
    dietCarbon: 0,
    totalCarbon: 0,
    historicalData: []
  });
  const [wasteAmount, setWasteAmount] = useState(0);
  const [energyUse, setEnergyUse] = useState(0);
  const [milesDriven, setMilesDriven] = useState(0);
  const [meatConsumption, setMeatConsumption] = useState(0);

  useEffect(() => {
    // Fetch or calculate carbon data based on user's previous activities
    // This is a placeholder; actual implementation would involve backend calls
    const fetchCarbonData = async () => {
      // Simulated data
      setCarbonData({
        wasteCarbon: wasteAmount * 0.1,  // Example: 0.1 kg CO2 per kg of waste
        energyCarbon: energyUse * 0.5,   // Example: 0.5 kg CO2 per kWh
        transportCarbon: milesDriven * 0.2, // Example: 0.2 kg CO2 per mile
        dietCarbon: meatConsumption * 2,   // Example: 2 kg CO2 per kg of meat
        totalCarbon: (wasteAmount * 0.1) + (energyUse * 0.5) + (milesDriven * 0.2) + (meatConsumption * 2),
        historicalData: [100, 200, 300, 400, 500] // Simulated historical data
      });
    };
    fetchCarbonData();
  }, [wasteAmount, energyUse, milesDriven, meatConsumption]);

  const handleCalculate = () => {
    // This would typically involve a backend call to calculate the footprint
    // Here we're just updating the state for demonstration
    setCarbonData(prev => ({
      ...prev,
      totalCarbon: prev.wasteCarbon + prev.energyCarbon + prev.transportCarbon + prev.dietCarbon
    }));
  };

  const data = {
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5'],
    datasets: [{
      label: 'Carbon Footprint (kg CO2)',
      data: carbonData.historicalData,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center">
        <Leaf className="h-8 w-8 mr-2 text-green-500" /> 
        Carbon Footprint Calculator
      </h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Enter Your Data:</h2>
        <div className="space-y-4">
          <Input type="number" placeholder="Waste collected (kg)" value={wasteAmount} onChange={(e) => setWasteAmount(Number(e.target.value))} />
          <Input type="number" placeholder="Energy used (kWh)" value={energyUse} onChange={(e) => setEnergyUse(Number(e.target.value))} />
          <Input type="number" placeholder="Miles driven" value={milesDriven} onChange={(e) => setMilesDriven(Number(e.target.value))} />
          <Input type="number" placeholder="Meat consumption (kg)" value={meatConsumption} onChange={(e) => setMeatConsumption(Number(e.target.value))} />
          <Button onClick={handleCalculate}>Calculate</Button>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Your Carbon Footprint:</h2>
        <p>Waste Contribution: {carbonData.wasteCarbon.toFixed(2)} kg CO2</p>
        <p>Energy Use: {carbonData.energyCarbon.toFixed(2)} kg CO2</p>
        <p>Transportation: {carbonData.transportCarbon.toFixed(2)} kg CO2</p>
        <p>Diet: {carbonData.dietCarbon.toFixed(2)} kg CO2</p>
        <p><strong>Total Carbon Footprint:</strong> {carbonData.totalCarbon.toFixed(2)} kg CO2</p>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Historical Data:</h2>
        <Bar data={data} />
      </div>

    </div>
  );
}