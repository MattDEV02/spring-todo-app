import axios from 'axios';
import moment from 'moment';
import baseUrl, {
   routes,
   httpOptions,
   sendMail
} from './utils';


const formatDate = (date, format = 'YYYY-MM-DDTHH:mm') => {
   const momentDate = date ? moment(date) : moment();
   return momentDate
      .format(format);
};

const select = async () => {
   const res = await axios
      .get(baseUrl + routes.select, httpOptions)
      .catch(e => console.error(e.message));
   console.log(res);
   return res.data;
};

const insert = async (todo) => {
   const data = new FormData()
   data.append('todo', JSON.stringify(todo));
   const config = {
      method: 'POST',
      url: (baseUrl + routes.insert),
      data
   };
   const res = await axios(config)
      .catch(e => console.error(e.message));
   console.log(res);
   const todosData = await select();
   return todosData;
};

const update = async (todo) => {
   const data = new FormData()
   data.append('todo', JSON.stringify(todo));
   const config = {
      method: 'PUT',
      url: (baseUrl + routes.update),
      data
   };
   const res = await axios(config)
      .catch(e => console.error(e.message));
   console.log(res);
   const todosData = await select();
   return todosData;
};

const _delete = async (id) => {
   const res = await axios
      .delete(baseUrl + routes.delete + id, httpOptions)
      .catch(e => console.error(e.message));
   console.log(res);
   if (res.status === 200)
      sendMail(id);
   const todosData = await select();
   return todosData;
};


export default formatDate;

export {
   select,
   insert,
   update,
   _delete,
   sendMail
};