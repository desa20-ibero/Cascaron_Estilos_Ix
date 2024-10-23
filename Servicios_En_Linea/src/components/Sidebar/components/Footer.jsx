
import { SidebarFooter } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { MdExitToApp } from 'react-icons/md'

import sidebarLogoIbero from "../../../img/logo_ibero.png";
import { useDispatch } from "react-redux";
import { startLogout } from "../../Auth";

export const Footer = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <SidebarFooter>
      <div
      style={{
          padding: "20px 24px",
        }}
      >
        <div>

                <MdExitToApp
                  style={{ width: '30px', height: '30px', cursor: 'pointer' }}
                  onClick={handleLogout}
                />
                                Cerrar sesión{' '}
              </div>
      </div>
    </SidebarFooter>
  );
}
