import path from 'path';


const
   protocol: string = 'http',
   host: string = '127.0.0.1',
   port: number = 5001,
   folder: string = path.join(__dirname, '../../..', 'build');

const cb = (error: Error): void => {
   if (error)
      throw error;
   const url = `${protocol}://${host}:${port}/`;
   console.log(`Server is Listening on ${url}`);
};

const options: any[] = [port, host, cb];

const filesData = {
   file: 'index.html',
   options: {
      root: folder
   }
};


export default options;

export {
   filesData
};
