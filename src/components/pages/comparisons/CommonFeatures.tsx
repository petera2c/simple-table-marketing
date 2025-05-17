import React from "react";
import { Space, Tag, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faDollarSign,
  faCode,
  faGaugeHigh,
  faLayerGroup,
  faTableColumns,
  faTableCells,
  faPalette,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

// Common feature icons
export const FeatureIcons = {
  QuickStart: (
    <Space>
      <FontAwesomeIcon icon={faCode} className="text-gray-600" />
      <span>Quick Start</span>
    </Space>
  ),
  Virtualization: (
    <Space>
      <FontAwesomeIcon icon={faGaugeHigh} className="text-gray-600" />
      <span>Virtualization</span>
    </Space>
  ),
  ColumnFeatures: (
    <Space>
      <FontAwesomeIcon icon={faTableColumns} className="text-gray-600" />
      <span>Column Features</span>
    </Space>
  ),
  RowFeatures: (
    <Space>
      <FontAwesomeIcon icon={faLayerGroup} className="text-gray-600" />
      <span>Row Features</span>
    </Space>
  ),
  CellFeatures: (
    <Space>
      <FontAwesomeIcon icon={faTableCells} className="text-gray-600" />
      <span>Cell Features</span>
    </Space>
  ),
  Customization: (
    <Space>
      <FontAwesomeIcon icon={faPalette} className="text-gray-600" />
      <span>Customization</span>
    </Space>
  ),
  EnterpriseFeatures: (
    <Space>
      <FontAwesomeIcon icon={faGear} className="text-gray-600" />
      <span>Enterprise Features</span>
    </Space>
  ),
  PricingSize: (
    <Space>
      <FontAwesomeIcon icon={faDollarSign} className="text-gray-600" />
      <span>Pricing & Size</span>
    </Space>
  ),
  AdvancedDataFeatures: (
    <Space>
      <FontAwesomeIcon icon={faGear} className="text-gray-600" />
      <span>Advanced Data Features</span>
    </Space>
  ),
  AdvancedUIFeatures: (
    <Space>
      <FontAwesomeIcon icon={faPalette} className="text-gray-600" />
      <span>Advanced UI Features</span>
    </Space>
  ),
  IntegrationFeatures: (
    <Space>
      <FontAwesomeIcon icon={faCode} className="text-gray-600" />
      <span>Integration Features</span>
    </Space>
  ),
};

// Common feature status components
export const FeatureStatus = {
  Available: (text: string) => (
    <Space>
      <FontAwesomeIcon icon={faCheck} className="text-green-500" />
      <span>{text}</span>
    </Space>
  ),
  Paid: (text: string) => (
    <Space>
      <FontAwesomeIcon icon={faDollarSign} className="text-yellow-500" />
      <span>{text}</span>
    </Space>
  ),
};

// Common feature tags with tooltips
export const FeatureTags = {
  Success: (label: string, tooltip: string) => (
    <Tooltip title={tooltip}>
      <Tag color="success">{label}</Tag>
    </Tooltip>
  ),
  Warning: (label: string, tooltip: string) => (
    <Tooltip title={tooltip}>
      <Tag color="warning">{label}</Tag>
    </Tooltip>
  ),
  Error: (label: string, tooltip: string) => (
    <Tooltip title={tooltip}>
      <Tag color="error">{label}</Tag>
    </Tooltip>
  ),
  Processing: (label: string, tooltip: string) => (
    <Tooltip title={tooltip}>
      <Tag color="processing">{label}</Tag>
    </Tooltip>
  ),
};

// Common column features
export const commonColumnFeatures = {
  simpleTable: (
    <Space direction="vertical">
      {FeatureTags.Success("Resizing", "Resize columns by dragging their edges")}
      {FeatureTags.Success("Reordering", "Drag and drop columns to reorder them")}
      {FeatureTags.Success("Visibility", "Show/hide columns dynamically")}
      {FeatureTags.Success("Pinning", "Pin columns to the left or right side")}
      {FeatureTags.Success("Alignment", "Align content left, center, or right")}
      {FeatureTags.Success("Sorting", "Sort data by clicking column headers")}
      {FeatureTags.Success("Nested Headers", "Column grouping and nesting")}
    </Space>
  ),
};

// Reusable pricing info
export const simplePricing = (
  <Space direction="vertical">
    {FeatureTags.Success("100% Free", "Completely free to use in any project")}
    {FeatureTags.Success("197 kB (unpacked)", "Minimal bundle size for optimal performance")}
  </Space>
);
