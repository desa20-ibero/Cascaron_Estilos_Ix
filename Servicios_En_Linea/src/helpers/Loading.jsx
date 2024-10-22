import ReactLoading from 'react-loading';
import {useSelector} from "react-redux";

// ---- Muestra un loadig en la pantalla ----
// ---- El cual se manda llamr por medio de un dispatch ----
// ---- Y en este es pasado el mensaje al state ui ----
// ---- El componente recupera ese mensake de state ui  y lo pone en pantalla ----
export const Loading = ({ type, color, mensaje }) => {
// Recupera mensaje  del state ui
const {MensajeLoader} = useSelector(state => state.ui);


  return (
    <div className="load-loading">
    <ReactLoading  type={type} color={color}  height={180} width={180} />
    <h4 className="mt-3 animate__animated animate__flash animate__infinite	infinite">{ MensajeLoader }</h4>
    </div>
   
  )
}