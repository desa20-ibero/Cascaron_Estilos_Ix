
import { SidebarFooter } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import sidebarLogoIbero from "../../../img/logo_ibero.png";

export const Footer = () => {
  return (
    <SidebarFooter style={{ textAlign: "center" }}>
      <div
        className="sidebar-btn-wrapper"
        style={{
          padding: "20px 24px",
        }}
      >
        <Link className="navbar-brand" to="/">
          <img alt="Logo Ibero" src={sidebarLogoIbero} height={75} width={190} />
        </Link>
      </div>
    </SidebarFooter>
  );
}
