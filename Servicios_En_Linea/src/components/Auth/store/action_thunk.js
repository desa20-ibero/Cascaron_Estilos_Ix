import Swal from 'sweetalert2'
import {
  uiFinishLoading,
  uiModalClose,
  uiStartLoading,
} from '../../../redux-toolkit'
import {
  AlertTokenNovalido,
  AxiosData,
} from '../../../services/AxiosConnection'
import { TypeService } from '../../../services/TypeService'
import {
  login,
  loginCambioPerfil,
  loginCheckingFinish,
  loginPerfilLoadRutas,
  loginRulesByMenu,
  loginSelecionPerfil,
  logout,
  setProfilesInfo,
} from './authSlice'
import { ManageAxiosResponse } from '../../../services/ResponseActionService'
import { appIdConfig } from '../../../config/Config'
import { AxiosDataTokenApp, AxiosLoginData } from '../services/LoginApp'

export const startLogin = (emailOrUser, password, isUser, token) => {
  return async (dispatch) => {
    dispatch(uiStartLoading('Iniciando Sesión...'))

    const IdDetApp = appIdConfig

    const resp = await AxiosLoginData(
      'Auth/Login',
      'post',
      { emailOrUser, password, isUser, IdDetApp },
      null,
    )

    // let jsonSt = JSON.stringify(fakeLogin);
    // const resp = JSON.parse(jsonSt);

    dispatch(uiFinishLoading())

    if (resp.respuestaStatus === TypeService.AxiosApiOk) {
      const expiryToke = JSON.parse(atob(resp.data[0].token.split('.')[1])).exp
      const expiryRefreshToke = JSON.parse(
        atob(resp.data[0].refreshToken.split('.')[1]),
      ).exp
      localStorage.setItem('token', resp.data[0].token)
      localStorage.setItem('token-exp-date', expiryToke)
      localStorage.setItem('refreshToken', resp.data[0].refreshToken)
      localStorage.setItem('refreshToken-exp-date', expiryRefreshToke)

      // console.log(resp.data)
      let profileToDelete = 'AdminApp'

      // Filtrar el array para excluir el objeto con el profile especificado
      resp.data = resp.data.filter((obj) => obj.profile !== profileToDelete)
      localStorage.setItem('RespuestaPerfiles', JSON.stringify(resp.data))

      dispatch(
        login({
          userName: resp.data[0].userName,
          userId: resp.data[0].userId,
        }),
      )
    } else {
      dispatch(ManageAxiosResponse(resp))
    }
  }
}

export const startLoginStudent = (account, digit, password, profileId, token) => {
  return async (dispatch) => {
    dispatch(uiStartLoading('Iniciando Sesión...'))

    const idDetApp = appIdConfig

    const resp = await AxiosLoginData(
      'Auth/LoginExternoComunicados',
      'post',
      { account, digit, password, idDetApp, profileId  },
      null,
    )

    // let jsonSt = JSON.stringify(fakeLogin);
    // const resp = JSON.parse(jsonSt);

    dispatch(uiFinishLoading())

    if (resp.respuestaStatus === TypeService.AxiosApiOk) {
      const expiryToke = JSON.parse(atob(resp.data.token.split('.')[1])).exp
      const expiryRefreshToke = JSON.parse(
        atob(resp.data.refreshToken.split('.')[1]),
      ).exp
      localStorage.setItem('token', resp.data.token)
      localStorage.setItem('token-exp-date', expiryToke)
      localStorage.setItem('refreshToken', resp.data.refreshToken)
      localStorage.setItem('refreshToken-exp-date', expiryRefreshToke)

      // console.log(resp.data)
      let profileToDelete = 'AdminApp'

      // Filtrar el array para excluir el objeto con el profile especificado
      //resp.data = resp.data.filter((obj) => obj.profile !== profileToDelete)
      localStorage.setItem('RespuestaPerfiles', JSON.stringify([resp.data]))

      dispatch(
        login({
          userName: resp.data.userName,
          userId: resp.data.comunidadUserId,
        }),
      )
    } else {
      dispatch(ManageAxiosResponse(resp))
    }
  }
}

export const startRefreshToken = () => {
  return async (dispatch, getState) => {
    const { accountNumber } = getState().auth
    dispatch(uiStartLoading('Validando Sesión...'))

     const resp = await AxiosDataTokenApp('Auth/refreshToken', 'get', null, null)
    // let jsonSt = JSON.stringify(refresh);
    // const resp = JSON.parse(jsonSt);


    dispatch(uiFinishLoading())

    if (resp.respuestaStatus === TypeService.AxiosApiOk) {
      const expiryToke = JSON.parse(atob(resp.data.token.split('.')[1])).exp
      const expiryRefreshToke = JSON.parse(
        atob(resp.data.refreshToken.split('.')[1]),
      ).exp
      localStorage.setItem('token', resp.data.token)
      localStorage.setItem('token-exp-date', expiryToke)
      localStorage.setItem('refreshToken', resp.data.refreshToken)
      localStorage.setItem('refreshToken-exp-date', expiryRefreshToke)

      dispatch(
        login({ userName: resp.data.userName, userId: resp.data.userId }),
      )
    } else if (resp.respuestaStatus === TypeService.AxiosApi401) {
      if (!!accountNumber) {
        AlertTokenNovalido()
      }

      dispatch(startLogout())
    } else {
      dispatch(loginCheckingFinish())
      Swal.fire('Error', 'Ocurrio un error, intente mas tarde', 'error')
    }
  }
}

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch(logout())
    dispatch(uiModalClose())
  }
}

export const changeProfile = () => {
  return async (dispatch) => {
    dispatch(loginCambioPerfil())
  }
}

// Inicia el proceso de agregar la informacion del perfil selecionado del logout
// del usuario que inicio sesion. antes de llamar este metodo
// Solo se conoce la nomina y el id perfil
export const starProfileInformation = (datosPerfil) => {
  return async (dispatch) => {
    const profile = {
      idPerfil: datosPerfil.profileId,
      nombre_Perfil: datosPerfil.profile,
    }
    localStorage.setItem('rel_perfil_Est', datosPerfil.profileId)

    dispatch(loginSelecionPerfil(profile))
    dispatch(startLoadingProfileRouters(datosPerfil.profileId))
  }
}

//Carga las rutas del perfil que inicio sesion
export const startLoadingProfileRouters = (profileId) => {
  return async (dispatch) => {
    const appId = appIdConfig

    dispatch(uiStartLoading('Cargando rutas...'))


    const resp = await AxiosDataTokenApp(
      'MenuRouter/GetMenuRouter',
      'get',
      null,
      { appId, profileId },
    )

    // let jsonSt = JSON.stringify(fakeRoutes);
    // const resp = JSON.parse(jsonSt);

    dispatch(uiFinishLoading())

    //La peticion adcional inidica que ya debe actualizar el
    // El token para poder continuar con peticiones posteriores a la actual.
    if (resp.refresh) {
      dispatch(RefreshIsRequared())
    }
    //Si la respuesta es correcta,Aqui va codigo propio de las siguientes accioes a realizar
    if (resp.respuestaStatus === TypeService.AxiosApiOk) {
      dispatch(loginPerfilLoadRutas(resp.data))
    }
    // administra las respuestas del api en caso de no ser exitosa
    else {
      dispatch(ManageAxiosResponse(resp))
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

//Carga las reglas de negocio por menu
export const startLoadingRulesByMenu = (menuRouterId) => {
  return async (dispatch, getState) => {
    const appId = appIdConfig
    const { perfil } = getState().auth

    const profileId = perfil.idPerfil

    dispatch(uiStartLoading('Cargando rutas...'))

    const resp = await AxiosDataTokenApp(
      'MenuRouter/GetRulesProfileByMenu',
      'get',
      null,
      { appId, profileId, menuRouterId },
    )

    // let jsonSt = JSON.stringify(menuAppDesarrollo);
    // const resp = JSON.parse(jsonSt);

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

export const startLoadingProfilesApp = () => {
  return async (dispatch, getState) => {
    const appId = appIdConfig

    dispatch(uiStartLoading('Cargando rutas...'))

    const resp = await AxiosLoginData(
      'Auth/ProfilesByAppId',
      'get',
      null,
      { appId },
    )

    dispatch(uiFinishLoading())

    if (resp.refresh) {
      dispatch(RefreshIsRequared())
    }
    
    if (resp.respuestaStatus === TypeService.AxiosApiOk) {
      dispatch(setProfilesInfo(resp.data))
    }

    else {
      dispatch(ManageAxiosResponse(resp))
    }
  }
}
