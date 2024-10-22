import { uiFinishLoading, uiStartLoading } from '../../../redux-toolkit'
import { AxiosData } from '../../../services/AxiosConnection'
import { ManageAxiosResponse, RefreshIsRequared } from '../../../services/ResponseActionService'
import { TypeService } from '../../../services/TypeService'
import { setProductsAF } from './products_activo_fijo_Slice'

export const startLoadingProductsAFInformation = (filters) => {
  return async (dispatch, getState) => {
    dispatch(uiStartLoading('Cargando información...'))

    let jsonSt = JSON.stringify(fakeSucces)
    const resp = JSON.parse(jsonSt)

    //   const resp = await AxiosData('Binnacle', 'get', null, {
    //     startDate,
    //     endDate,
    //     idApp
    //   })

    dispatch(uiFinishLoading())

    if (resp.refresh) {
      dispatch(RefreshIsRequared())
    }

    if (resp.respuestaStatus === TypeService.AxiosApiOk) {
      dispatch(setProductsAF({ data: resp.data }))
    } else {
      dispatch(ManageAxiosResponse(resp))
    }
  }
}
