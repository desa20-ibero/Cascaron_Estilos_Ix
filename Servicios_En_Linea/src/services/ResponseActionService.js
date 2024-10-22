import Swal from "sweetalert2";
import { logout, startRefreshToken } from "../components/Auth";
import { TypeService } from "./TypeService";
import { AlertTokenNovalido } from "./AxiosConnection";


// import { uiModalClose } from "../redux-toolkit/Slices/Ui/uiSlice";
// Admnistra las respues genericas de la peticion con Axios
// al web api. No incluye 201 de exito entre otros, ya que estas
// respuestas la administra el propio componente de acciones

export const ManageAxiosResponse = (response) => {
  return async (dispatch) => {
    // console.log(response);
    switch (response.respuestaStatus) {
      case TypeService.AxiosApi401:
          AlertTokenNovalido()
          dispatch(logout())
          // dispatch(uiModalClose())
          break
      case TypeService.AxiosNoConexion: // Error de conexion con el APi
          Swal.fire({
          icon: 'error',
          title: 'Mensaje del sistema',
          text: 'Error de conexión con API..',
          backdrop: true,
          })
          break
      case TypeService.AxiosApi500: //Error interno en el API (Revisar log en en esta)
          Swal.fire({
          icon: 'error',
          title: 'Mensaje del sistema',
          text: 'Ocurrió un error en el servidor remoto, intente más tarde.',
          backdrop: true,
          })

          break
      case TypeService.AxiosApiOkFail: //Peticion correcta, pero exito en 0 (Error controlado en API)
          Swal.fire({
          icon: 'error',
          title: 'Mensaje del sistema',
          text: response.message,
          backdrop: true,
          })
      break
      default:
      // Error generico. Cuando no se captura el estaus devuelto por el API

      Swal.fire({
        icon: 'error',
        title: 'Mensaje del sistema',
        text: 'Ocurrió un error, intente más tarde.',
        backdrop: true,
      })

      break
  }
  }
}

//Cuando el Api, indica que se debe refrescar token para
// No perder la sesión
export const RefreshIsRequared = () => {
  return async (dispatch) => {
    dispatch(startRefreshToken())
  }
}

// Puede ser utilizado para mandar un mesaje al finalizar la
//Una peticion http con exito
// Mensaje: Texto que se pone en la alerta
export const FinalMessage = (Mensaje) => {
  
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 4000,
      // timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  
    Toast.fire({
      icon: "success",
      title: `${Mensaje}`,
    });
  
};

export const MensajeAdvertencia = (Mensaje) => {
  
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 6000,
    // timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "warning",
    title: `${Mensaje}`,
  });

};