import Logo from '../../../img/logo_ibero.png'

export const HomeScreen = () => {
  return (
    <>
    <main>
        <div className="container d-flex align-items-center justify-content-center mt-5 animate__animated animate__fadeIn">
          <img style={{ width: "50%", height: "90%" }} src={Logo} />
         
        </div>
        <div className="-mrgnTop-1r mt-5 d-flex justify-content-center animate__animated animate__fadeIn">
          <h3 className="fs-2">Sistema de acceso DIT</h3>
        </div>
      </main>
    </>
  )
}
