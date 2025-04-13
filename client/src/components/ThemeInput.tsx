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
      <label className="block text-xs font-medium text-gray-700 mb-1 truncate" title={label}>
        {label}
      </label>
      <Input size="small" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default ThemeInput;
