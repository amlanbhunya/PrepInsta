// Sample doctors data
let doctors = [
  { name: "Dr. Sajal", totalSlots: 8, availableSlots: 5, bookedSlots: ["9:00 AM", "11:00 AM"] },
  { name: "Dr. Hemant", totalSlots: 8, availableSlots: 6, bookedSlots: ["12:00 PM"] },
  { name: "Dr. Santanu", totalSlots: 8, availableSlots: 6, bookedSlots: ["12:00 PM"] },
  { name: "Dr. Jenny", totalSlots: 8, availableSlots: 6, bookedSlots: ["2:00 PM"] }
];


let appointments = [];

document.addEventListener("DOMContentLoaded", () => {
  displayDoctors();
  populateDoctorDropdown();
});

function displayDoctors() {
  const doctorList = document.getElementById("doctor-list");
  doctorList.innerHTML = "";
  
  doctors.forEach(doctor => {
    let doctorCard = document.createElement("div");
    doctorCard.classList.add("doctor-card");
    
    doctorCard.innerHTML = `
      <h3>${doctor.name}</h3>
      <p>Total Slots: ${doctor.totalSlots}</p>
      <p>Available Slots: ${doctor.totalSlots - doctor.bookedSlots.length}</p>
      <p>Booked Slots:</p>
      ${doctor.bookedSlots.map(slot => `<span class="booked-slot">${slot}</span>`).join('')}
    `;
    
    doctorList.appendChild(doctorCard);
  });
}

function populateDoctorDropdown() {
  const doctorSelect = document.getElementById("doctor-select");
  doctors.forEach((doctor, index) => {
    let option = document.createElement("option");
    option.value = index;
    option.textContent = doctor.name;
    doctorSelect.appendChild(option);
  });
}

function generateTimeSlots(doctorIndex) {
  const doctor = doctors[doctorIndex];
  const timeSlotDropdown = document.getElementById("time-slot");
  timeSlotDropdown.innerHTML = ""; // Clear any existing time slots
  
  const startHour = 9; // Doctor's starting hour (9 AM)
  const endHour = 17; // Doctor's ending hour (5 PM)
  const interval = 1; // Time interval (1 hour)

  for (let hour = startHour; hour < endHour; hour += interval) {
    const timeSlot = `${hour % 12 === 0 ? 12 : hour % 12}:00 ${hour < 12 ? 'AM' : 'PM'}`;
    
    if (!doctor.bookedSlots.includes(timeSlot)) {
      let option = document.createElement("option");
      option.value = timeSlot;
      option.textContent = timeSlot;
      timeSlotDropdown.appendChild(option);
    }
  }
}

document.getElementById("doctor-select").addEventListener("change", (event) => {
  const doctorIndex = event.target.value;
  generateTimeSlots(doctorIndex);
});

function bookAppointment() {
  const patientName = document.getElementById("patient-name").value;
  const doctorIndex = document.getElementById("doctor-select").value;
  const appointmentDate = document.getElementById("appointment-date").value;
  const timeSlot = document.getElementById("time-slot").value;
  
  if (!patientName || doctorIndex === "" || !appointmentDate || !timeSlot) {
    alert("Please fill all fields.");
    return;
  }
  
  const doctor = doctors[doctorIndex];
  
  if (doctor.bookedSlots.includes(timeSlot)) {
    alert("This time slot is already booked.");
    return;
  }
  
  doctor.bookedSlots.push(timeSlot);
  appointments.push({ id: appointments.length + 1, patientName, doctor: doctor.name, date: appointmentDate, time: timeSlot });
  
  displayDoctors();
  alert("Appointment booked successfully!");
}

function cancelAppointment() {
  const appointmentId = document.getElementById("appointment-id").value;
  
  const index = appointments.findIndex(appt => appt.id == appointmentId);
  
  if (index === -1) {
    alert("Appointment not found!");
    return;
  }
  
  const appointment = appointments[index];
  const doctor = doctors.find(doc => doc.name === appointment.doctor);
  
  doctor.bookedSlots = doctor.bookedSlots.filter(slot => slot !== appointment.time);
  appointments.splice(index, 1);
  
  displayDoctors();
  alert("Appointment canceled successfully!");
}

function viewAppointments() {
  const appointmentList = document.getElementById("appointment-list");
  appointmentList.innerHTML = "";
  
  appointments.forEach(appointment => {
    let appointmentCard = document.createElement("div");
    appointmentCard.classList.add("appointment-card");
    
    appointmentCard.innerHTML = `
      <p>ID: ${appointment.id}</p>
      <p>Patient: ${appointment.patientName}</p>
      <p>Doctor: ${appointment.doctor}</p>
      <p>Date: ${appointment.date}</p>
      <p>Time: ${appointment.time}</p>
    `;
    
    appointmentList.appendChild(appointmentCard);
  });
}
