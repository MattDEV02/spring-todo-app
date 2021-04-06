import formatDate from '../../../../js';

String.prototype.isDateExpired = function () {
   return (this < formatDate());
};