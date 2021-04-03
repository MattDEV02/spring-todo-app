import moment from 'moment';
import {
   insert
} from '../../../js';
import formatDate from './utils';


const now = moment()
   .format('YYYY-MM-DDTHH:mm');

const selectors = {
   row: 'row justify-content-center',
   form: 'form-container border border-dark bg-warning',
   input: 'form-control form-control-lg border border-dark',
   btn: '',
   nome: 'nome',
   scadenza: 'scadenza'
};

const handleForm = event => {
   event.preventDefault();
   event.target.reset();
};

const submitTodo = (nome, scadenza = now()) => {
   scadenza = formatDate(scadenza);
   console.log(nome, scadenza);
};


export default selectors;

export {
   submitTodo,
   handleForm,
   now
};