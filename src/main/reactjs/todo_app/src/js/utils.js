const
   protocol = 'http',
   host = '127.0.0.1',
   port = 80;

const baseUrl = `${protocol}://${host}:${port}/`; // also string casting

const routes = {
   insert: 'insert/',
   select: 'select/',
   update: 'update/',
   delete: 'delete/'
};

const handleError = error => {
   console.error(error.message);
   //throw error;
};

export default baseUrl;

export {
   routes,
   handleError
};