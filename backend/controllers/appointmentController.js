const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
  try {
    const { customerName, serviceType, appointmentDate } = req.body;
    const appointment = await Appointment.create({ customerName, serviceType, appointmentDate });
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};