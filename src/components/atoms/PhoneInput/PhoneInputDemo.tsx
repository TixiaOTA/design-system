import React, { useState } from 'react';
import { PhoneInput } from './PhoneInput';

export const PhoneInputDemo: React.FC = () => {
  const [manualValue, setManualValue] = useState('');
  const [autoDetectValue, setAutoDetectValue] = useState('');

  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">PhoneInput Component Demo</h2>
        <p className="text-gray-600 mb-6">
          This demo showcases both manual country selection and automatic country detection modes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Manual Mode */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Manual Selection Mode</h3>
          <p className="text-sm text-gray-500">
            Select country from dropdown first, then type the phone number.
          </p>
          <PhoneInput
            label="Phone Number (Manual)"
            value={manualValue}
            onChange={setManualValue}
            helperText="Select country first, then type number"
          />
          <div className="p-3 bg-gray-50 rounded">
            <p className="text-sm font-medium">Current Value (Clean Numeric):</p>
            <p className="text-sm text-gray-600">{manualValue || 'No input yet'}</p>
          </div>
        </div>

        {/* Auto Detect Mode */}
        <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Auto Detect Mode</h3>
        <p className="text-sm text-gray-500">
          Start with a single input field. Type + and country code, then the country selector (flag only) will appear.
        </p>
          <PhoneInput
            label="Phone Number (Auto Detect)"
            autoDetect={true}
            value={autoDetectValue}
            onChange={setAutoDetectValue}
            helperText="Start typing with + and country code. Country selector (flag only) will appear after detection."
          />
          <div className="p-3 bg-gray-50 rounded">
            <p className="text-sm font-medium">Current Value (Clean Numeric):</p>
            <p className="text-sm text-gray-600">{autoDetectValue || 'No input yet'}</p>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Auto Detect Examples</h3>
        <p className="text-sm text-gray-500">
          Try typing these numbers in the Auto Detect mode. Start with + and the country selector (flag only) will appear:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3 border rounded">
            <p className="text-sm font-medium">US Number</p>
            <p className="text-xs text-gray-500">+1234567890</p>
            <p className="text-xs text-gray-400">Detects United States (+1)</p>
          </div>
          <div className="p-3 border rounded">
            <p className="text-sm font-medium">UK Number</p>
            <p className="text-xs text-gray-500">+447911123456</p>
            <p className="text-xs text-gray-400">Detects United Kingdom (+44)</p>
          </div>
          <div className="p-3 border rounded">
            <p className="text-sm font-medium">Indonesian Number</p>
            <p className="text-xs text-gray-500">+6281234567890</p>
            <p className="text-xs text-gray-400">Detects Indonesia (+62)</p>
          </div>
          <div className="p-3 border rounded">
            <p className="text-sm font-medium">German Number</p>
            <p className="text-xs text-gray-500">+49123456789</p>
            <p className="text-xs text-gray-400">Detects Germany (+49)</p>
          </div>
        </div>
      </div>

      {/* Indonesian Special Handling */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Indonesian Number Special Handling</h3>
        <p className="text-sm text-gray-500">
          Indonesian numbers starting with 0 are automatically converted to +62 format:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 border rounded bg-green-50">
            <p className="text-sm font-medium">Auto-Conversion</p>
            <p className="text-xs text-gray-500">081327368782</p>
            <p className="text-xs text-gray-400">→ +6281327368782 (0 → +62)</p>
          </div>
          <div className="p-3 border rounded bg-blue-50">
            <p className="text-sm font-medium">Explicit Format</p>
            <p className="text-xs text-gray-500">+6281327368782</p>
            <p className="text-xs text-gray-400">No conversion needed</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 