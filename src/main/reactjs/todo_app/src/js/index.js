import axios from 'axios';
import moment from 'moment';
import baseUrl, {
   routes
} from './utils';


const formatDate = (date, format = 'YYYY-MM-DDTHH:mm') => {
   const momentDate = date ? moment(date) : moment();
   return momentDate
      .format(format);
};

const select = async () => {
   const res = await axios.get(baseUrl + routes.select)
      .catch(e => console.error(e.message));
   console.log(res);
   return res.data;
};

const insert = async (todo) => {
   const res = await 
   axios( {
      method: 'get',
      url: 'http://127.0.0.1:80/select',
      headers: {
         'Authorization': 'Basic dXNlcjoxMzA1NjIyMi0wMjAzLTRmMjEtOTFhNS03YTgzYjk3NjNlODA=',
      },
      data: {}
   })
      .catch(e => console.error(e.message));
   console.log(res)
   return res;
};

const update = async (todo) => {
   const res = await axios
      .put(baseUrl + routes.update)
      .catch(e => console.error(e.message));
   const data = res.data;
   console.log(data);
   return data;
};

const _delete = async (id) => {
   const res = await axios
      .delete(baseUrl + routes.delete + id)
      .catch(e => console.error(e.message));
   const data = res.data;
   console.log(data);
   return data;
};


export default formatDate;

export {
   select,
   insert,
   update,
   _delete
};