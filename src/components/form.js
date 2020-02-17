import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import uuid from 'uuid/v4';

const Form = ({ addAppointment }) => {
    
    //Create state
    const [appointment, setAppointment] = useState({
        petName: '',
        ownerName: '',
        date: '',
        hour: '',
        symptoms: '',
    });

    const [error, setError] = useState(false);

    //Update on change form
    const handleChange = e => {
        //Call  function described in hooks
        //With spread operator adding 
        setAppointment({
            ...appointment,
            [e.target.name]:e.target.value
        })
    }

    //retrive values
    const { petName, ownerName, date, hour, symptoms } = appointment;

    //On Submit appointment
    const sumbitAppointment = e => {
        e.preventDefault();
        //validate
        if (petName.trim() === '' || ownerName.trim() === '' || date.trim() === '' || hour.trim() === '' || symptoms.trim() === '') {
            setError(true);
            return;
        }
        //delete error
        setError(false);
        //Asign an ID
        appointment.id = uuid();

        //Create Appointment function is a prop from parent
        addAppointment(appointment);
        
        //reset form
        setAppointment({
            petName: '',
            ownerName: '',
            date: '',
            hour: '',
            symptoms: '',
        });
    }

    return (
        <Fragment>
            <h2>New Appointment </h2>
            {error?<p className="alert-error">All fields are mandatory</p>:null}
            <form onSubmit={sumbitAppointment}>
                <label>Pet's name: </label>
                <input
                    type="text"
                    name="petName"
                    className="u-full-width"
                    placeholder="Pet's name"
                    onChange={handleChange}
                    value={petName}
                />
                <label>Owner's name: </label>
                <input
                    type="text"
                    name="ownerName"
                    className="u-full-width"
                    placeholder="Owner's name"
                    onChange={handleChange}
                    value={ownerName}
                />
                <label>Date: </label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />
                <label>Hour: </label>
                <input
                    type="time"
                    name="hour"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hour}
                />
                <label>Symptoms: </label>
                <textarea
                    name="symptoms"
                    className="u-full-width"
                    onChange={handleChange}
                    value={symptoms}
                ></textarea>
                <button 
                    type="submit"
                    className="u-full-width buttonprimary"
                >Submit</button>
            </form>
        </Fragment>
    );
}
 
Form.propTypes = {
    addAppointment:PropTypes.func.isRequired,
}

export default Form;