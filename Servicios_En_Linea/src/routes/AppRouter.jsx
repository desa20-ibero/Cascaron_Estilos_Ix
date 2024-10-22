import { Suspense, useEffect } from "react";import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import { DashboardRoutes } from "./DashboardRoutes";
import { AuthRoutes, startRefreshToken } from "../components/Auth";
import { Loading } from "../helpers/Loading";

export const AppRouter = () => {

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(startRefreshToken()); // Ayuda a renovar el token si se recarga la paginación
        //Agregr dispacth para crear funcion que renueve toke cada cierto tiempo
    }, [dispatch]);

    const { loading } = useSelector((state) => state.ui);
    const { checking, status } = useSelector((state) => state.auth); 

    if (checking) {
        return  <Loading type={"spinningBubbles"} color={"#485C8F"} />;
        }

  return (
    <Suspense fallback={<Loading type={"spinningBubbles"} color={"#485C8F"} />}>
    <BrowserRouter>
    {/* <Header/> */}
      {loading && <Loading type={"spinningBubbles"} color={"#485C8F"} />}
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRouter isLogged={(status == "authenticated"? true: false)}>
              <AuthRoutes />
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouter isLogged={(status == "authenticated"? true: false)}>
              <DashboardRoutes />
            </PrivateRouter>
          }
        />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    </Suspense>
  )
}
