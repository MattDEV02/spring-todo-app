import React from 'react';
import Navbar from './components/navbar';
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
         <Router>
            <Navbar />
            <div className='container-fluid'>
               <div className='row'>
                  <Title />
                  <DynamicBody />
               </div>
            </div>
         </Router>
      </React.StrictMode >
   );
}


export default App;
