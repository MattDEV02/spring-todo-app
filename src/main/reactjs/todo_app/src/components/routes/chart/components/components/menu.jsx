import ReactTooltip from 'react-tooltip';
import { chartType, tooltipID, default_colors } from '../../js';


const Menu = ({ handleSelect }) => {
   return (
      <>
         <ReactTooltip
            id={tooltipID}
            textColor={default_colors.gold}
            backgroundColor={default_colors.darkred}
            className='fw-bold'>
            Cambia il Tipo di Grafico !
         </ReactTooltip>
         <select 
            className='form-control-sm'
            data-tip='' data-for={tooltipID}
            onChange={e => handleSelect(e.target.value)}>
            <option
               value={chartType.bar}>
               Barre Verticali
            </option>
            <option
               value={chartType.horizontalBar}>
               Barre Orizzontali
            </option>
            <option
               value={chartType.line}>
               Lineare
            </option>
         </select>
      </>
   );
};


export default Menu;