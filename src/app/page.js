'use client';
import { useState } from 'react';
import styles from './page.module.css';
import './globals.css';

export default function Home() {
  const [dailyRate, setDailyRate] = useState('');
  const [gramPrice, setGramPrice] = useState('');
  const [weeklyUsage, setWeeklyUsage] = useState('');

  const rate = parseFloat(dailyRate);
  const price = parseFloat(gramPrice);
  const usage = parseFloat(weeklyUsage);

  const dailyGrams = !isNaN(rate) && !isNaN(price) && price > 0 ? rate / price : null;
  const weeklyCost = !isNaN(usage) && !isNaN(price) ? usage * price : null;
  const monthlyCost = weeklyCost ? weeklyCost * 4 : null;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{ fontSize: 24 }}>Quanto vale minha diária</h1>

        <div className={styles.inputGroup}>
          <input
            type="number"
            placeholder="Valor da diária (R$)"
            value={dailyRate}
            onChange={(e) => setDailyRate(e.target.value)}
            className="input"
          />

          <input
            type="number"
            placeholder="Preço por grama (R$)"
            value={gramPrice}
            onChange={(e) => setGramPrice(e.target.value)}
            className="input"
          />

          <input
            type="number"
            placeholder="Consumo semanal (g)"
            value={weeklyUsage}
            onChange={(e) => setWeeklyUsage(e.target.value)}
            className="input"
          />
        </div>

        <div className={styles.results}>
          {dailyGrams !== null && (
            <p>🌿 Com 1 diária, dá pra comprar <strong>{dailyGrams.toFixed(2)}</strong>g</p>
          )}

          {weeklyCost !== null && (
            <p>💸 Gasto semanal estimado: <strong>R$ {weeklyCost.toFixed(2)}</strong></p>
          )}

          {monthlyCost !== null && (
            <p>📆 Gasto mensal estimado: <strong>R$ {monthlyCost.toFixed(2)}</strong></p>
          )}
        </div>
      </main>
    </div>
  );
}