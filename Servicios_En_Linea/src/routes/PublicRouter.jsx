import { Navigate } from "react-router-dom";


export const PublicRouter = ({children,isLogged}) => {
/// Si no hay una session activa , la cual se sabe por la bandera  isLogged
// Se retona los children del componente, en este caso AuthRouters. De lo contrario
// Manada a login  / al inicio, que al haber session activa. Ppdra entrar a la aplicacion
return !isLogged? children: <Navigate to="/" />;


}
