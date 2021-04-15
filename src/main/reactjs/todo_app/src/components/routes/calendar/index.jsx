import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'
import Loading from '../../loading';
import { selectTodos, setTodos } from '../../../redux/todo';
import { select } from '../../../js';
import getScadenze from './js';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import './css/index.css';


const TodosCalendar = () => {
   const dispatch = useDispatch();
   const todos = useSelector(selectTodos);
   const [err, setErr] = useState(false);
   useEffect(() => {
      (async () => {
         const res = await select();
         if (res)
            dispatch(setTodos(res.data));
         else
            setErr(true);
      })();
   }, []);
   return (
      <div className='row justify-content-center'>
         <div className='col-12 mt-5'>
            {
               todos ?
                  <Calendar
                     localizer={momentLocalizer(moment)}
                     events={getScadenze(todos)}
                     startAccessor='start'
                     endAccessor='end'
                     style={{ minHeight: 600 }}
                  /> :
                  <Loading
                     err={err}
                  />
            }
         </div>
      </div>
   );
};


export default TodosCalendar;