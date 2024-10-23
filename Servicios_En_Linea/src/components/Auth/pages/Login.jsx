import { useEffect, useState } from 'react'
import ibero_login from '../../../img/ibero_login.png'
import { AuthEmployee } from '../components/AuthEmployee'
import '../styles/styles_login.css'
import Select from 'react-select'
import { AuthStudent } from '../components/AuthStudent'
import { startLoadingProfilesApp } from '../store/action_thunk'
import { useDispatch, useSelector } from 'react-redux'
import { getProfilesApp } from '../functions/functions'
import logoSuperior from '../../../img/logo_ibero_superior.png'

export const Login = () => {
  const dispatch =  useDispatch();
  const [selected, setSelected] = useState({value:1, label:'Administrador'})
  const [options, setOptions] = useState([])
  const { profilesApp } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startLoadingProfilesApp());
  }, []);

  useEffect(() => {
    if(profilesApp) setOptions(getProfilesApp(profilesApp));
  }, [profilesApp]);

  useEffect(() => {
    if(options.length > 0 && options!= undefined){
      setSelected(options[0])
    }
  }, [options]);

  const handleChange = (value) => {
    setSelected(value)
  }

  const renderView = () => {
    switch (selected.label) {
      case 'Administrador':
        return <AuthEmployee />;
      case 'Estudiante':
        return <AuthStudent profileId={selected.value}/>;
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {/* <!-- Columna de Imagen --> */}
        <div className="col-md-6 p-0 d-none d-md-block">
          <img
            src={ibero_login}
            alt="Imagen Decorativa"
            className="w-100 h-100"
          />
        </div>

        {/* <!-- Columna de Formulario de Login --> */}
        <div className="col-md-6 d-flex align-items-start justify-content-center">
           {/* Logo en la esquina superior derecha */}
       <div className="logo-container">
        <img src={logoSuperior} alt="Logo" className="logo" /> {/* Ajusta el tamaño según sea necesario */}
      </div>
          <div className="w-75">
            <br />
            <h2 className="h2-titulo">Servicios en Línea</h2>
            <br />
            <h2 className="titulo-login">Iniciar Sesión</h2>
            <div className="row mb-5">
              <div className="col-md-4">
                <p className="subtitulo-login">Ingresa con tu cuenta de </p>
              </div>
              <div className="col-md-4">
                <Select options={options} onChange={handleChange}  value={selected}  />
              </div>
            </div>
            {renderView()}
          </div>
        </div>
      </div>
    </div>
  )
}
