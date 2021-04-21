import {
   Switch,
   Route,
} from 'react-router-dom';
import Todos from './routes/todos';
import Form from './routes/form';
import TodosCalendar from './routes/calendar';
import TodosChart from './routes/chart';
import Error404 from './routes/error404';
import '../css/index.css';


const DynamicBody = () => {
   return (
      <>
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
               component={TodosCalendar}
            />
            <Route
               exact path='/chart'
               component={TodosChart}
            />
            <Route
               component={Error404}
            />
         </Switch>
      </>
   );
}


export default DynamicBody;