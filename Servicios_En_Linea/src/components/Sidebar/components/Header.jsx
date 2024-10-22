import { Menu, MenuItem, SidebarHeader } from 'react-pro-sidebar'
import { MdExitToApp } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { changeProfile, startLogout } from '../../Auth'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'

export const Header = ({ collapsed, setCollapsed }) => {
  const dispatch = useDispatch()

  const dataPerfiles = JSON.parse(localStorage.getItem('RespuestaPerfiles'))
 

  const { perfil, userName } = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(startLogout())
  }

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleChangeProfile = () => {
    //Si es un usuario con un solo perfil
    // Inpide que se muestre el alert para cambiar de perfil.
    if (dataPerfiles.length === 1) {
      return
    }

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mr-4',
        cancelButton: 'btn btn-danger mr-4',
      },
      buttonsStyling: true,
    })

    swalWithBootstrapButtons
      .fire({
        title: `¿Desea cambiar del perfil ${perfil.nombre_Perfil}?`,
        text:
          'Los permisos podrían cambiar y observar información diferente al perfil actual',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
        backdrop: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('rel_perfil_Est')
          dispatch(changeProfile())
        }
      })
  }

  return (
    <SidebarHeader>
      <Menu iconShape="circle">
        {collapsed ? (
          <MenuItem
          className='menu-display'
            icon={<FaAngleDoubleRight />}
            onClick={handleCollapsedChange}
          ></MenuItem>
        ) : (
          <MenuItem
          className='menu-display'
            suffix={<FaAngleDoubleLeft />}
            onClick={handleCollapsedChange}
          ></MenuItem> )}
            <div
              style={{
                padding: '10px',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: 14,
                letterSpacing: '1px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {userName} <br />
              <br />
              <span
                className="badge gray pointer"
                onClick={handleChangeProfile}
              >
                {perfil.nombre_Perfil}
              </span>
              <div className="d-flex justify-content-end ">
                SALIR{' '}
                <MdExitToApp
                  style={{ width: '30px', height: '30px', cursor: 'pointer' }}
                  onClick={handleLogout}
                />
              </div>
            </div>
      </Menu>
    </SidebarHeader>
  )
}
