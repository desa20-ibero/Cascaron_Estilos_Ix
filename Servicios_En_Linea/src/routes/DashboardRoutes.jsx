import React, { Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { SelectProfile } from "../components/SelectProfile";
import { Loading } from "../helpers/Loading";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/pages";
import { NotFound } from "../components/404/NotFound";
import { HomeScreen } from "../components/Home/pages";
import { ContentRoutes } from "../components/Content-Admin/routes/ContentRoutes";
import { FaBars } from "react-icons/fa";
import logoSuperior from '../img/logo_ibero_superior.png'

export const DashboardRoutes = () => {
  const { perfilSelected } = useSelector((state) => state.auth);
  const rutas = useSelector((state) => state.auth.rutas) || [];

  const [toggled, setToggled] = useState(false);

  // Esta bandera es activada en usuarios de mas de un perfil y desde el nombre del perfil en
  // el componente header del sidebar. Lo que hace que se  habra la pantalla de seleccionar perfil
  // y cargar los perfiles e informacion necesaria del  perfil.

  if (!perfilSelected) {
    return <SelectProfile />;
  }

  //una vez el usuario tiene el perfil selecciona (En automatico para los que tiene solo un perfil selecciona)
  // Se retorna las rutas privadas de la aplicacion a las cuales puede acceder el usuario con una sesion activa

  if (rutas.length === 0) {
    return (
      <div className="animate__animated animate__flash">
        <h1>Cargando Rutas</h1>
      </div>
    );
  }

  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };

  return (
    <Suspense fallback={<Loading type={"spinningBubbles"} color={"#485C8F"} />}>
      <div className="btn-toggle" onClick={handleToggleSidebar}>
        <FaBars />
      </div>
      
       {/* Logo en la esquina superior derecha */}
       <div className="logo-container">
        <img src={logoSuperior} alt="Logo" className="logo" /> {/* Ajusta el tamaño según sea necesario */}
      </div>

      <div className={`app ${toggled ? "toggled" : ""}`}>
        <Sidebar toggled={toggled} setToggled={setToggled} />   
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomeScreen />} />
            <Route
              path="/productos-activo-fijo/*"
              element={<ContentRoutes routes={rutas} />}
            />
          </Routes>
      </div>
    </Suspense>
  );
};
