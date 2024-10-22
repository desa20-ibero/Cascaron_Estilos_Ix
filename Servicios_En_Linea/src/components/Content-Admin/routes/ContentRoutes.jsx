import { Route, Routes } from "react-router-dom"
import { AccessRoutes } from "../../Sidebar/functions/AccessRoutes"
import { NotFound } from "../../404/NotFound"
import { ContentScreen } from "../pages/ContentScreen"


export const ContentRoutes = ({ routes }) => {
  return (
    <Routes>
    <Route path="/"  element={
            // AccessRoutes('CuentasdealumnosScreen', routes) ? (
              <ContentScreen />
            // ) : (
            //   <NotFound />
            // )
          }/>
  </Routes>
  )
}
