'use client';
import React, { useState } from 'react';

export default function ImcCalc() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(0);

  function handleClick() {
    const imcCalc = (Number(peso) / Number(altura)) * Number(peso);
    setImc(imcCalc);
  }

  return (
    <div>
      <input
        type="text"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Digite sua altura"
      />
      <input
        type="text"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Digite seu peso"
      />
      <button onClick={handleClick}>Calcular</button>

      <h1>{imc}</h1>
    </div>
  );
}
