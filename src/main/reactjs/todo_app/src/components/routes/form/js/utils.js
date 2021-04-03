import moment from 'moment';


const formatDate = date => {
   const format = 'YYYY-MM-DD HH:mm';
   return moment(date)
      .format(format);
};


export default formatDate;