import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments}) => {
    return (
        <div>
            <h2 className='text-brand text center' >Appointments{appointments.length}</h2>
            {
                appointments.length ?
                <AppointmentShortList appointments={appointments}></AppointmentShortList>
                :
                <div className='p-5'>
                    <h4>No Appointments for this date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;