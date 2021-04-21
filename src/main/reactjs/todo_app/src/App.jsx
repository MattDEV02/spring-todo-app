import Navbar from './components/navbar';
import DynamicBody from './components/dinamicBody';
import Title from './components/title';
import {
   BrowserRouter as Router,
} from 'react-router-dom';
import './css/index.css';


const App = () => {
   return (
      <>
         <Router>
            <Navbar />
            <div className='container-fluid'>
               <div className='row'>
                  <Title />
                  <DynamicBody />
               </div>
            </div>
         </Router>
      </>
   );
};


export default App;
