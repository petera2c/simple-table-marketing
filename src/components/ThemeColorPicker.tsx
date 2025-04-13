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
      <label className="block text-xs font-medium text-gray-700 mb-1 truncate" title={label}>
        {label}
      </label>
      <ColorPicker size="small" value={value} onChange={onChange} />
    </div>
  );
};

export default ThemeColorPicker;
