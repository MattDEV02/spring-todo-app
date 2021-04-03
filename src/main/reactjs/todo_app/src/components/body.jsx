import React from 'react';
import {
   Switch,
   Route,
} from 'react-router-dom';
import Todos from './routes/todos';
import Form from './routes/form';
//import Error404 from './routes/error404';
import '../css/index.css';


const Body = ({ todos }) => {
   return (
      <Switch>
         <Route
            path='/'
            render={() =>
               <Todos
                  todos={todos}
               />
            }
         />
         <Route
            exact path='/form'
            component={Form}
         />
         <Route
            component={Error404} />
      </Switch>
   );
}


export default Body;