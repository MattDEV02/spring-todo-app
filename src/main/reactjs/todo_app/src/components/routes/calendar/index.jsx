import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Loading from '../../loading';
import getScadenze from './js';


const todosData = [
   {
      'id': 1,
      'nome': 'Fantacalcio',
      'scadenza': '2020-02-03 14:10'
   },
   {
      'id': 2,
      'nome': 'Derby',
      'scadenza': '2021-10-10 07:40'
   }
];

const Calendar = () => {
   return (
         <div className='col-12 mt-4'>
            <FullCalendar
               plugins={[dayGridPlugin]}
               initialView="dayGridMonth"
               weekends={false}
               events={[
                  { title: 'event 1', date: '2019-04-01' },
                  { title: 'event 2', date: '2019-04-02' }
               ]}
            />
         </div>

   );
};


export default Calendar;