import React, { useEffect, useState } from 'react';
import Todos from './components/todos';
import Form from './components/form';
import { select } from './js';
//import { Counter } from './features/counter/Counter';
import {
   BrowserRouter as Router,
} from 'react-router-dom';
import './css/index.css';

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

const App = () => {
   const [todos, setTodos] = useState(null);
   useEffect(() => {
      //const todos = await select();
      setTodos(todosData);
   }, [todos]);
   return (
      <React.StrictMode>
         <div className='container-fluid'>
            <div className='row'>
               <Router>
                  <Form />
                  {
                     todos ?
                        <Todos todos={todos} /> :
                        'Loading...'
                  }
               </Router>
            </div>
         </div>
      </React.StrictMode>
   );
}


export default App;
