import formatDate, {
   insert
} from '../../../../js';



const now = formatDate();

const selectors = {
   row: 'row justify-content-center',
   col: 'col-5',
   form: 'form-container border border-dark bg-warning',
   input: 'form-control form-control-lg border border-dark',
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