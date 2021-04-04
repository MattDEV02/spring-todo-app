import React from 'react';
import DynamicBody from './components/dinamicBody';
import Title from './components/title';
//import { Counter } from './features/counter/Counter';
import {
   BrowserRouter as Router,
} from 'react-router-dom';
import './css/index.css';


const App = () => {
   return (
      <React.StrictMode>
         <div className='container-fluid'>
            <div className='row'>
               <Title />
               <Router>
                  <DynamicBody />
               </Router>
            </div>
         </div>
      </React.StrictMode>
   );
}


export default App;
