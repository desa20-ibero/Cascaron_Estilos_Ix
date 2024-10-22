import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { MyTextInput } from '../../Form-components/MyTextInput'
import * as Yup from 'yup'
import { REACT_APP_RECAPTCHA_GOOGLE } from '../../../config/Config'
import '../styles/styles_login.css'
import { startLogin } from '../store/action_thunk'

export const AuthEmployee = () => {
  const [token, setToken] = useState('')

  let formData = {
    email: 'gala@ibero.mx',
    password: '123456',
  }

  ///Si es produccion, quita el usuario pruebas
  if (
    window.location.href.includes('https://prestamoequipo.ibero.mx/') ||
    window.location.href.includes('https://prestamoequipodes.ibero.mx/') ||
    window.location.href.includes('https://prestamoequipopru.ibero.mx/')
  ) {
    formData = {
      email: '',
      password: '',
    }
  }

  const requerido = 'Este campo es requerido'

  const [usuario, setUser] = useState(false)

  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={formData}
      onSubmit={({ email, password }) => {
        try {
            const executeRecaptcha = async () => {
            const token = await window.grecaptcha.execute(
              REACT_APP_RECAPTCHA_GOOGLE,
              { action: 'submit' },
            )
            setToken(token) // Aquí puedes usar el token como desees
            token != ''
              ? dispatch(startLogin(email, password, usuario, token))
              : ''
          }

          executeRecaptcha()
        } catch (err) {
          console.log(err)
          setToken('')
        }
      }}
      validationSchema={Yup.object({
        email: Yup.string().required(requerido),
        password: Yup.string().required(requerido),
      })}
    >
      {(formik) => (
        <Form noValidate>
          <div className="row">
            <div className="col sm-12 col-md-12 mb-4">
              <div className="form-group">
                <label htmlFor="email" className="color-title">
                  Email
                </label>
                <Field
                  className="form-control form-control-login mb-0"
                  name="email"
                  placeholder="Email"
                  required
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-danger"
                  role="alert"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col sm-12 col-md-12">
              <label htmlFor="password" className="color-title">
                Contraseña
              </label>
              <Field
                className="form-control form-control-login mb-0"
                name="password"
                placeholder="Password"
                type="password"
                required
              />
              <ErrorMessage
                name="password"
                component="span"
                className="text-danger"
                role="alert"
              />
            </div>
          </div>

          <div className="row">
            <div className="content-btn -mrgnTop-1r mt-5">
              <input className="ingresar-btn" type="submit" value="Ingresar" />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
