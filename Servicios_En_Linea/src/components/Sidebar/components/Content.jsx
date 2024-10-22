import React from 'react'
import { Menu, MenuItem, SidebarContent } from 'react-pro-sidebar'
import { useSelector } from 'react-redux'
import { FaGenderless   }from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export const Content = () => {

    const rutas = useSelector((state) => state.auth.rutas) || []

    if (rutas.length === 0) {
      return (
        <div className="animate__animated animate__flash">
          <h5>Cargando Rutas...</h5>
        </div>
      )
    }

    const procesarTexto = (texto) => {
      // Convertir a minúsculas y reemplazar espacios por guiones
      const resultado = texto.toLowerCase().replace(/\s+/g, '-');
      return resultado;
    };

  return (
    <SidebarContent>
    <Menu> 
      {
        rutas.length > 0 &&
        rutas.map((item) => (
          (item.access == 1) &&
          <MenuItem key={item.idPermission}
          icon={<FaGenderless  />}         
          >
          {item.permission}
          <NavLink
              key={`${item.idPermission}-${item.permission}`}
              className={({ isActive }) =>
              'nav-item nav-link' + (isActive ? 'active' : '')
              }
              to={`/${procesarTexto(item.permission)}`}
          />
          </MenuItem>
        ))
      }     
       
    </Menu>
  </SidebarContent>
  )
}
