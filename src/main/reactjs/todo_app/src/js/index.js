import axios from 'axios';
import moment from 'moment';
import baseUrl, {
   routes,
   httpOptions
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
   const res = await axios
      .post(baseUrl + routes.insert, todo, httpOptions)
      .catch(e => console.error(e.message));
   console.log(res)
   return res;
};

const update = async (todo) => {
   const res = await axios
      .put(baseUrl + routes.update, httpOptions.data = {
         todo
      })
      .catch(e => console.error(e.message));
   console.log(res);
   return res;
};

const _delete = async (id) => {
   const res = await axios
      .delete(baseUrl + routes.delete + id, httpOptions)
      .catch(e => console.error(e.message));
   console.log(res);
   return res;
};

const sendMail = async (id) => {
   let data = new FormData();
   data.append('id', id.toString());
   let config = {
      method: 'post',
      url: 'https://matteolambertucci.altervista.org/mail/',
      data: data
   };
   const res = await axios(config)
      .catch(e => console.error(e));
   console.log(res.data);
};


export default formatDate;

export {
   select,
   insert,
   update,
   _delete,
   sendMail
};