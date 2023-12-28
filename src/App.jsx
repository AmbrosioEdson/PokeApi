import { useState } from 'react';
import Card from './components/card';

export default function App() {

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Pokedex por Edson Josias
      </h1>

      <Card />
    </div>
  );
}
