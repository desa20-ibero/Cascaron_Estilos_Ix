import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingRulesByMenu } from '../redux-toolkit/Slices/Ui/ui_thunk';
import { AssingMenuRouter, cleanMenuRouter, cleanRulesMenu } from '../components/Auth';



export const usePermissionsByMenu = ( menuScreen ) => {

  const rutas = useSelector(state => state.auth.rutas) || [];
  const dispatch = useDispatch();
  const { menuRouteId } = useSelector((state) => state.auth);

    useEffect(() => {    
        const menu = rutas.find(r => r.element === menuScreen);
        if(menu != null && menu != undefined){
          dispatch(AssingMenuRouter(menu.idPermission));
        }
        return () => {
          dispatch(cleanMenuRouter())
        }
      }, [rutas])
      
    
      useEffect(() => {   
        if(menuRouteId != null && menuRouteId > 0) {
          dispatch(startLoadingRulesByMenu(menuRouteId));
        }
        return () => {
          dispatch(cleanRulesMenu())
        }
      }, [menuRouteId])
      
}
