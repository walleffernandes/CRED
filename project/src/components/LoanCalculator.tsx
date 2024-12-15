import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function LoanCalculator() {
  const [amount, setAmount] = useState(5000);
  const [months, setMonths] = useState(12);
  
  const monthlyPayment = (amount * (1 + 0.015 * months)) / months;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <div className="flex items-center mb-6">
        <Calculator className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-2xl font-bold text-gray-800">Simulador de Empréstimo</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Valor do Empréstimo: R$ {amount}
          </label>
          <input
            type="range"
            min="1000"
            max="50000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prazo (meses): {months}
          </label>
          <input
            type="range"
            min="6"
            max="48"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Parcela Mensal:</p>
          <p className="text-2xl font-bold text-blue-600">
            R$ {monthlyPayment.toFixed(2)}
          </p>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Solicitar Agora
        </button>
      </div>
    </div>
  );
}