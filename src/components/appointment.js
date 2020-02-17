import React from 'react';
import PropTypes from 'prop-types'

const Appointment = ({ appointment, deleteAppointment }) => {
    const { petName, ownerName, date, hour, symptoms, id } = appointment;

    return (
        <div className='appointment'>
            <p>Pet: <span>{petName}</span></p>
            <p>Owner: <span>{ownerName}</span></p>
            <p>Date: <span>{date}</span></p>
            <p>Time: <span>{hour}</span></p>
            <p>Symptoms: <span>{symptoms}</span></p>
            <button className="button delete u-full-width"
                onClick={()=>deleteAppointment(id)}
            >
                Delete
            </button>
        </div>
    );
}

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired,
}
 
export default Appointment;