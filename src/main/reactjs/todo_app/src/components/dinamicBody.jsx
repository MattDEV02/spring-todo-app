import React from 'react';
import {
   Switch,
   Route,
} from 'react-router-dom';
import Todos from './routes/todos';
import Form from './routes/form';
import Cal from './routes/calendar';
import Error404 from './routes/error404';
import '../css/index.css';


const DynamicBody = () => {
   return (
      <Switch>
         <Route
            exact path='/'
            component={Todos}
         />
         <Route
            exact path='/form'
            component={Form}
         />
         <Route
            exact path='/calendar'
            component={Cal}
         />
         <Route
            component={Error404}
         />
      </Switch>
   );
}


export default DynamicBody;