
export const AccessRoutes = (element='',rutas) => {

    //Validamos si existe la ruta en la data 

const ruta=rutas.find(r=> r.element === element)
if ( ruta === undefined)  //Si no existe no se da permiso a la ruta
{
    return false;
}
if(!ruta.access){ //Si existe, pero no tiene acceso, tampoco se da permiso a la ruta
    return false;
}


  return true;  //Si pasa a este return, significa que tiene acceso.
}


