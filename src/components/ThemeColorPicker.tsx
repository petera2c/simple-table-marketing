import React from "react";
import { ColorPicker } from "antd";
import type { Color } from "antd/es/color-picker";

interface ThemeColorPickerProps {
  label: string;
  value: string;
  onChange: (color: Color) => void;
}

const ThemeColorPicker: React.FC<ThemeColorPickerProps> = ({ label, value, onChange }) => {
  return (
    <div className="mb-2">
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm font-medium text-gray-700" title={label}>
          {label}
        </label>
        <div className="text-xs text-gray-500">{value}</div>
      </div>
      <div className="flex items-center gap-2">
        <ColorPicker size="small" value={value} onChange={onChange} />
        <div
          className="w-full h-6 rounded border border-gray-200"
          style={{ backgroundColor: value }}
          title={value}
        />
      </div>
    </div>
  );
};

export default ThemeColorPicker;
