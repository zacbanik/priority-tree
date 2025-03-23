// src/components/ui/WeightSelector.tsx
import React from 'react';

interface WeightSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

const WeightSelector: React.FC<WeightSelectorProps> = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="p-2 border border-gray-700 rounded bg-gray-800 text-white"
    >
      {Array.from({length: 15}, (_, i) => i - 7).map(n => (
        <option key={n} value={n}>{n}</option>
      ))}
    </select>
  );
};

export default WeightSelector;
