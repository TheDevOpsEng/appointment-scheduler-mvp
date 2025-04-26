import React, { useState } from 'react';
import axios from 'axios';

function BookingPage() {
  const [formData, setFormData] = useState({
    customerName: '',
    serviceType: '',
    appointmentDate: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/appointments', formData);
    alert('Appointment booked!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Customer Name" required
        value={formData.customerName}
        onChange={(e) => setFormData({...formData, customerName: e.target.value})}
      />
      <input type="text" placeholder="Service Type" required
        value={formData.serviceType}
        onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
      />
      <input type="datetime-local" required
        value={formData.appointmentDate}
        onChange={(e) => setFormData({...formData, appointmentDate: e.target.value})}
      />
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingPage;