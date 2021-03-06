import { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import Actions from './components/actions';
import selectors, { submitTodo, handleForm, now } from './js';
import './css/index.css';


const Form = () => {
   const
      [nome, setNome] = useState(''),
      [scadenza, setScadenza] = useState(now);
   return (
      <>
         <div className={selectors.row}>
            <div className={selectors.col}>
               <div className={`${selectors.form} p-4 mt-5 text-center`}>
                  <h1 className='text-secondary'>
                     Inserisci Todo
                  </h1>
                  <form
                     onSubmit={e => {
                        submitTodo({ nome, scadenza });
                        handleForm(e);
                        setScadenza(now);
                     }}>
                     <div className={`${selectors.row} mt-5`}>
                        <input
                           type='text'
                           name={selectors.nome}
                           minLength={3}
                           maxLength={25}
                           id={selectors.nome}
                           className={selectors.input}
                           placeholder='Inserisci nome Todo...'
                           autoComplete='off'
                           onChange={e => setNome(e.target.value)}
                           required
                        />
                     </div>
                     <div className={`${selectors.row} mt-4`}>
                        <input
                           type='datetime-local'
                           name={selectors.scadenza}
                           id={selectors.scadenza}
                           className={selectors.input}
                           min={now}
                           value={scadenza}
                           data-tip=''
                           data-for={selectors.scadenza}
                           onChange={e => setScadenza(e.target.value)}
                           required
                        />
                     </div>
                     <ReactTooltip
                        id={selectors.scadenza}
                        type='info'>
                        Scadenza Todo
                     </ReactTooltip>
                     <div className={`${selectors.row} mt-5`}>
                        <Actions />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
};


export default Form;