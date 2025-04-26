import React from 'react';

function ServiceDropdown({ value, onChange }) {
  return (
    <select value={value} onChange={onChange} required>
      <option value="">Select a Service</option>
      <option value="Oil Change">Oil Change</option>
      <option value="Tire Rotation">Tire Rotation</option>
      <option value="Brake Inspection">Brake Inspection</option>
      <option value="Solar Panel Installation">Solar Panel Installation</option>
      <option value="Haircut">Haircut</option>
    </select>
  );
}

export default ServiceDropdown;