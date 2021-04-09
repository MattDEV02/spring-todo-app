import formatDate, {
   insert
} from '../../../../js';



const now = formatDate();

const selectors = {
   row: 'row justify-content-center',
   col: 'col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2',
   form: 'form-container border border-dark bg-warning',
   input: 'form-control form-control-lg border border-dark',
   nome: 'nome',
   scadenza: 'scadenza'
};

const handleForm = event => {
   event.preventDefault();
   event.target.reset();
};

const submitTodo = todo => {
   console.log(todo);
   todo.scadenza = formatDate(todo.scadenza,'YYYY-MM-DD HH:mm:ss');
   insert(todo);
};


export default selectors;

export {
   submitTodo,
   handleForm,
   now
};