import { Menu, MenuItem, SidebarHeader } from "react-pro-sidebar";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { changeProfile, startLogout } from "../../Auth";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import userLogo from "../../../img/user_icon.png";


export const Header = ({ collapsed, setCollapsed }) => {
  const dispatch = useDispatch();

  const dataPerfiles = JSON.parse(localStorage.getItem("RespuestaPerfiles"));

  const { perfil, userName } = useSelector((state) => state.auth);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleChangeProfile = () => {
    //Si es un usuario con un solo perfil
    // Inpide que se muestre el alert para cambiar de perfil.
    if (dataPerfiles.length === 1) {
      return;
    }

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success mr-4",
        cancelButton: "btn btn-danger mr-4",
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: `¿Desea cambiar del perfil ${perfil.nombre_Perfil}?`,
        text: "Los permisos podrían cambiar y observar información diferente al perfil actual",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
        backdrop: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("rel_perfil_Est");
          dispatch(changeProfile());
        }
      });
  };

  return (
    <SidebarHeader>
      <Menu iconShape="circle" className="mt-4">
        {collapsed ? (
          <>
            <MenuItem
              className="menu-display"
              icon={<FaAngleDoubleRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          </>
        ) : (
          <MenuItem
            className="menu-display mb-3"
            onClick={handleCollapsedChange}
          >
            {" "}
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaAngleDoubleLeft />
              <span style={{ marginLeft: "15px" }}>Minimizar</span>
            </div>
          </MenuItem>
        )}
        <div className="profile-container">
         
            <img
              src={userLogo} // Cambia esto por la URL de la imagen del alumno
              alt="Perfil"
              className="profile-image"
            />
           {!collapsed &&
          <div className="profile-info">
            {userName} <br />
            <br />
            <span className="badge pointer" onClick={handleChangeProfile}>
              {perfil.nombre_Perfil}
            </span>
          </div>
}
        </div>
      </Menu>
    </SidebarHeader>
  );
};
