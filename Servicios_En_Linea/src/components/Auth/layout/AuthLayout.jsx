
import LogonIbero from '../../../img/logo_ibero.png';
import iberoBg from "../../../img/VIP-IBERO-020.jpg";


export const AuthLayout = ({ children }) => {
  return (
    <section
    className="h-100 gradient-form"
    style={{ backgroundColor: '#eee' }}
  >
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black p-4">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center">
                    <img
                      src={LogonIbero}
                      style={{ width: '185px' }}
                      alt="logo"
                    />
                    <h4 className="mt-1 mb-5 pb-1">Préstamos Ibero</h4>
                  </div>
                    { children }
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2" style={{ backgroundImage: `url(${iberoBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-1"></h4>
                    <p className="small mb-0">
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
