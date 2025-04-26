const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Appointment = sequelize.define('Appointment', {
  customerName: { type: DataTypes.STRING, allowNull: false },
  serviceType: { type: DataTypes.STRING, allowNull: false },
  appointmentDate: { type: DataTypes.DATE, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'Scheduled' }
});

module.exports = Appointment;