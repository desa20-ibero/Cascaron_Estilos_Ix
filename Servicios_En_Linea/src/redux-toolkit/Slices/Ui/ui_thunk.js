import { loginRulesByMenu } from "../../../components/Auth";
import { AxiosDataTokenApp } from "../../../components/Auth/services/LoginApp";
import { appIdConfig } from "../../../config/Config";
import { ManageAxiosResponse, RefreshIsRequared } from "../../../services/ResponseActionService";
import { TypeService } from "../../../services/TypeService";
import { uiFinishLoading, uiStartLoading } from "./uiSlice";

export const startLoadingRulesByMenu = ( menuRouterId ) => {
    return async ( dispatch, getState ) => {
      
      const appId =  appIdConfig;
      const { perfil } = getState().auth;
  
      const profileId = perfil.idPerfil;
  
  
      dispatch(uiStartLoading('Cargando rutas...'))
  
      const resp = await AxiosDataTokenApp(
          "MenuRouter/GetRulesProfileByMenu",
          "get",
          null,
          {appId, profileId, menuRouterId}
        );
  
    
      dispatch(uiFinishLoading())
  
      //La peticion adcional inidica que ya debe actualizar el
      // El token para poder continuar con peticiones posteriores a la actual.
      if (resp.refresh) {
        dispatch(RefreshIsRequared())
      }
      //Si la respuesta es correcta,Aqui va codigo propio de las siguientes accioes a realizar
      if (resp.respuestaStatus === TypeService.AxiosApiOk) {
        dispatch(loginRulesByMenu(resp.data))
      }
      // administra las respuestas del api en caso de no ser exitosa
      else {
        dispatch(ManageAxiosResponse(resp))
      }
    }
  }
  