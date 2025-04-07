'use client';
import { useState } from 'react';

export default function Home() {
  const [dailyRate, setDailyRate] = useState('');
  const [gramPrice, setGramPrice] = useState('');
  const [weeklyUsage, setWeeklyUsage] = useState('');
  const [grams, setGrams] = useState(null);

  const calculate = () => {
    const rate = parseFloat(dailyRate);
    const price = parseFloat(gramPrice);

    if (!isNaN(rate) && !isNaN(price) && price > 0) {
      setGrams(rate / price);
    } else {
      setGrams(null);
    }
  };

  const getWeeklyCost = () => {
    const usage = parseFloat(weeklyUsage);
    const price = parseFloat(gramPrice);
    if (!isNaN(usage) && !isNaN(price)) {
      return usage * price;
    }
    return 0;
  };

  const weeklyCost = getWeeklyCost();
  const monthlyCost = weeklyCost * 4;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="bg-gray-800 shadow-2xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-green-400 text-center">
          Quanto vale minha grama? 🌿
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-green-200">
            Valor da diária (R$)
          </label>
          <input
            type="number"
            value={dailyRate}
            onChange={(e) => setDailyRate(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-green-200">
            Preço por grama (R$)
          </label>
          <input
            type="number"
            value={gramPrice}
            onChange={(e) => setGramPrice(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-green-200">
            Consumo semanal (g)
          </label>
          <input
            type="number"
            value={weeklyUsage}
            onChange={(e) => setWeeklyUsage(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white p-2"
          />
        </div>

        <button
          onClick={calculate}
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition"
        >
          Calcular
        </button>

        {grams !== null && (
          <p className="mt-4 text-lg font-semibold text-center text-green-300">
            Dá pra comprar <span className="text-green-200">{grams.toFixed(2)}</span>g com sua diária
          </p>
        )}

        {weeklyUsage && gramPrice && (
          <div className="mt-6 text-sm text-gray-300">
            <p>💸 Gasto semanal estimado: <strong className="text-white">R$ {weeklyCost.toFixed(2)}</strong></p>
            <p>📆 Gasto mensal estimado: <strong className="text-white">R$ {monthlyCost.toFixed(2)}</strong></p>
          </div>
        )}
      </div>
    </main>
  );
}
