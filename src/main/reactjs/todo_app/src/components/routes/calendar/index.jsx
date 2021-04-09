import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'
import Loading from '../../loading';
import getScadenze from './js';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const Cal = () => {
   return (
      <div className="row justify-content-center">
         <div className='col-12 mt-4'>
            <Calendar
               localizer={momentLocalizer(moment)}
               events={[
                  {
                     title: 'test',
                     start: new Date(2021, 3, 8),
                     end: new Date(2021, 3, 8)
                  }
               ]}
               startAccessor="start"
               endAccessor="end"
               style={{ minHeight: 600 }}
            />
         </div>
      </div>
   );
};


export default Cal;