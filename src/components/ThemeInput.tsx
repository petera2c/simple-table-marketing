import React from "react";
import { Input } from "antd";

interface ThemeInputProps {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
}

const ThemeInput: React.FC<ThemeInputProps> = ({ label, value, onChange }) => {
  return (
    <div className="mb-2">
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm font-medium text-gray-700" title={label}>
          {label}
        </label>
      </div>
      <Input size="small" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default ThemeInput;
