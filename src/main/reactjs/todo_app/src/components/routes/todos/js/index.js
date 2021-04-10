import formatDate from '../../../../js';


const selectors = {
   row: 'row justify-content-center mt-5',
   col: 'col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-5',
   table: 'table table-hover text-center',
   btn: 'btn border border-dark mx-1 btn',
   icon: 'fas fa',
   sub: 'sub',
   del: 'del'
};

const isExpired = (date = formatDate()) => {
   date = formatDate(date);
   const now = formatDate();
   return (date <= now) ? 'Expired' : 'Not-expired';
};


export default selectors;

export {
   isExpired
};