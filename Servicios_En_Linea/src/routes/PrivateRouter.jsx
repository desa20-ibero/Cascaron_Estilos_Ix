import { Navigate } from "react-router-dom";
export const PrivateRouter = ({children,isLogged}) => {

/// Si hay una session activa , la cual se sabe por la bandera  isLogged
// Se retona los children del componente, en este caso DashboardRoutes. De lo contrario
// Manada a login  /auth/(auth Esta ruta tiene logica igual para mandar a login)
return isLogged?children:<Navigate to="/auth/"/>
}
