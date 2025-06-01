# Feature Definition System for Comparison Pages

## Overview

The new feature definition system centralizes all feature comparisons in a single file (`CommonFeatures.tsx`), making it much easier to maintain consistency across all comparison pages.

## Benefits

### Before (Old System)

- Features were manually duplicated in each comparison file
- Adding a new feature required updating every comparison file manually
- Easy to get out of sync when adding features
- Prone to inconsistencies in feature descriptions and statuses

### After (New System)

- All features are defined once in `FEATURE_DEFINITIONS`
- Adding a new feature automatically updates all comparison pages
- Consistent feature descriptions and statuses across all comparisons
- Type-safe with proper TypeScript support

## How to Use

### 1. Define Features in CommonFeatures.tsx

```typescript
export const FEATURE_DEFINITIONS = {
  columnFeatures: {
    simpleTable: [
      { status: "success", label: "Resizing", tooltip: "Resize columns by dragging their edges" },
      { status: "success", label: "Filtering", tooltip: "Filter data with type-specific controls" },
      // ... more features
    ],
    agGrid: [
      { status: "success", label: "Resizing", tooltip: "Resize columns by dragging their edges" },
      {
        status: "success",
        label: "Filtering",
        tooltip: "Advanced filtering with multiple filter types",
      },
      // ... more features
    ],
    // ... other competitors
  },
  // ... other feature categories
};
```

### 2. Use in Comparison Files

```typescript
// Instead of manually duplicating features:
{
  key: "column-features",
  feature: FeatureIcons.ColumnFeatures,
  simpleTable: renderFeatures('columnFeatures', 'simpleTable'),
  agGrid: renderFeatures('columnFeatures', 'agGrid'),
}
```

### 3. Adding a New Feature

To add a new feature (like "Advanced Sorting"):

1. **Add to all competitors in `FEATURE_DEFINITIONS`:**

```typescript
columnFeatures: {
  simpleTable: [
    // ... existing features
    { status: 'processing', label: 'Advanced Sorting', tooltip: 'Multi-column sorting coming soon' },
  ],
  agGrid: [
    // ... existing features
    { status: 'success', label: 'Advanced Sorting', tooltip: 'Multi-column sorting with custom comparators' },
  ],
  // ... other competitors
}
```

2. **That's it!** All comparison pages automatically get the new feature with proper alignment.

### 4. Adding a New Competitor

To add a new competitor (like "ReactTable"):

1. **Add competitor to each feature category:**

```typescript
columnFeatures: {
  // ... existing competitors
  reactTable: [
    { status: 'success', label: 'Resizing', tooltip: 'Column resizing available' },
    { status: 'error', label: 'Filtering', tooltip: 'No built-in filtering' },
    // ... all features for this competitor
  ],
}
```

2. **Use in comparison file:**

```typescript
reactTable: renderFeatures('columnFeatures', 'reactTable'),
```

## Feature Status Types

- `success`: Feature is fully available and working well
- `warning`: Feature is available but with limitations (often Enterprise-only)
- `error`: Feature is not available or requires significant custom implementation
- `processing`: Feature is coming soon or in development

## Best Practices

1. **Keep descriptions consistent**: Use similar language for the same features across competitors
2. **Be specific in tooltips**: Provide clear explanations of what each feature does
3. **Use appropriate status types**: Choose the status that best represents the feature's availability
4. **Group related features**: Keep features in logical categories (column, row, cell, etc.)

## Migration Guide

For existing comparison pages:

1. Replace manual feature lists with `renderFeatures()` calls
2. Move any custom features to `FEATURE_DEFINITIONS`
3. Update imports to include `renderFeatures`
4. Test that all features display correctly

## Example: Adding "Export Features"

```typescript
// In FEATURE_DEFINITIONS
exportFeatures: {
  simpleTable: [
    { status: 'processing', label: 'CSV Export', tooltip: 'Coming soon' },
    { status: 'processing', label: 'Excel Export', tooltip: 'Coming soon' },
    { status: 'success', label: 'JSON Export', tooltip: 'Export data as JSON' },
  ],
  agGrid: [
    { status: 'success', label: 'CSV Export', tooltip: 'Built-in CSV export' },
    { status: 'warning', label: 'Excel Export', tooltip: 'Enterprise feature only' },
    { status: 'success', label: 'JSON Export', tooltip: 'Export data as JSON' },
  ],
  // ... other competitors
}

// In comparison files
{
  key: "export-features",
  feature: FeatureIcons.IntegrationFeatures,
  simpleTable: renderFeatures('exportFeatures', 'simpleTable'),
  agGrid: renderFeatures('exportFeatures', 'agGrid'),
}
```

This new system ensures that when you add "PDF Export" to Simple Table, you just update one place and it appears consistently across all comparison pages!
