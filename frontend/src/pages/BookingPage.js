import React, { useState } from 'react';
import axios from 'axios';
import './BookingPage.css';
import ServiceDropdown from '../components/ServiceDropdown';
import { toast } from 'react-toastify';
import ToastContainerWrapper from '../components/ToastContainerWrapper';

function BookingPage() {
  const [formData, setFormData] = useState({
    customerName: '',
    serviceType: '',
    appointmentDate: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.customerName || !formData.serviceType || !formData.appointmentDate) {
      toast.error('Please fill in all fields before submitting.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/appointments', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      toast.success('Appointment booked successfully!');
      setFormData({ customerName: '', serviceType: '', appointmentDate: '' });
    } catch (error) {
      console.error('Error booking appointment:', error.response?.data || error.message);
      toast.error('Failed to book appointment.');
    }
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
          required
        />
        <ServiceDropdown
          value={formData.serviceType}
          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
        />
        <input
          type="datetime-local"
          value={formData.appointmentDate}
          onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
          required
        />
        <button type="submit">Book Now</button>
      </form>
      <ToastContainerWrapper />
    </div>
  );
}

export default BookingPage;