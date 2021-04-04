import moment from 'moment';


const formatDate = (date, format = 'YYYY-MM-DDTHH:mm') => {
   const momentDate = date ? moment(date) : moment();
   return momentDate
      .format(format);
};

String.prototype.isDateExpired = function () {
   return (this < formatDate());
};


export default formatDate;