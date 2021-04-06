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

const httpOptions = {
   withCredentials: true,
   auth: {
      'username': 'user',
      'password': 'c00093fd-1e33-43ad-a98e-90c1c837bb4e'
   }
};


export default baseUrl;

export {
   routes,
   httpOptions,
   handleError
};