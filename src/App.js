import React, {useState, useEffect} from 'react';

import Form from './components/form'
import Appointment from './components/appointment'

function App() {
  //Use localStorage
  let initialAppointment = JSON.parse(localStorage.getItem('appointments'));
  //If localstorage is empty gneerate empty array
  if (!initialAppointment)
    initialAppointment = [];

  //GEneral state
  const [appointments, setAppointments] = useState(initialAppointment);

  //USe Effect -  executed on ready or when state changes
  //LIke componentDidMount and componenedDidUpdate
  //allways receive an arrow function
  //As second aprameter send an array
  useEffect(() => {
    let initialAppointment = JSON.parse(localStorage.getItem('appointments'));

    if (initialAppointment) {
      localStorage.setItem('appointments', JSON.stringify(appointments))
    } else {
      localStorage.setItem('appointments', JSON.stringify([]))
    }
  }, [appointments]);

  const addAppointment = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ])
  }

  const deleteAppointment = id => (
    setAppointments(appointments.filter(
      appointment => (appointment.id !== id))
    )
  )

  const appointmetsTitle = appointments.length === 0 ? 'Add an Appointment' : 'Appointments';

  return (
    <div className="App">
      <h1>Patient Administrator</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              addAppointment={addAppointment}
            />
          </div>
          <div className="one-half column">
            
            <h2>{appointmetsTitle}</h2>
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
