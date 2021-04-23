import axios from 'axios';
import moment from 'moment';
import baseUrl, {
   routes,
   httpOptions,
   sendMail,
   handleError,
   adjustConfig
} from './utils';


const formatDate = (date, format = 'YYYY-MM-DDTHH:mm') => {
   const momentDate = date ? moment(date) : moment();
   return momentDate
      .format(format);
};

const select = async () => {
   const res = await axios
      .get(baseUrl + routes.select, httpOptions)
      .catch(e => handleError(e));
   console.log(res);
   return res;
};

const insert = async (todo) => {
   const data = new FormData()
   data.append('todo', JSON.stringify(todo));
   let config = {
      method: 'POST',
      url: (baseUrl + routes.insert),
      data
   };
   config = adjustConfig(config);
   const res = await axios(config)
      .catch(e => handleError(e));
   console.log(res);
};

const update = async (todo) => {
   const data = new FormData()
   data.append('todo', JSON.stringify(todo));
   let config = {
      method: 'PUT',
      url: (baseUrl + routes.update),
      data
   };
   config = adjustConfig(config);
   const res = await axios(config)
      .catch(e => handleError(e));
   console.log(res);
   const todosData = await select();
   return todosData;
};

const _delete = async (id) => {
   const res = await axios
      .delete(baseUrl + routes.delete + id, httpOptions)
      .catch(e => handleError(e));
   console.log(res);
   if (res.status === 200)
      sendMail(id);
};

const GETcalculations = async () => {
   const res = await axios
      .get(baseUrl + routes.calculations, httpOptions)
      .catch(e => handleError(e));
   console.log(res);
   return res;
};

export default formatDate;

export {
   select,
   insert,
   update,
   _delete,
   GETcalculations
};