import axios from 'axios';
import baseUrl, {
   routes
} from './utils';


const select = async () => {
   const res = await axios
      .get(baseUrl + routes.select)
      .catch(e => console.error(e.message));
   const data = res.data;
   console.log(data);
   return data;
};

const selectOne = async (id) => {
   const res = await axios
      .get(baseUrl + routes.select + id)
      .catch(e => console.error(e.message));
   const data = res.data;
   console.log(data);
   return data;
};

const insert = async (todo) => {
   const res = await axios
      .post(baseUrl + routes.insert)
      .catch(e => console.error(e.message));
   const data = res.data;
   console.log(data);
   return data;
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


export {
   select,
   selectOne,
   insert,
   update,
   _delete
};