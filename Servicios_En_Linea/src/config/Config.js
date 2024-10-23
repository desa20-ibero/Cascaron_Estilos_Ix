const VITE_API_KEY = import.meta.env.VITE_API_KEY


let appIdConfig = 352;
let configGlobal = {
  urlApiIbero: '',
  urlApiGestion: '',
}

let REACT_APP_RECAPTCHA_GOOGLE = "6LffPqspAAAAACVEj6E3PGtb8bUpOwtwlaLN_TU6";
let REACT_APP_CLAVE_SECRETA ="6LffPqspAAAAAHT8Q1s-9-LaVVc7s94JVlIq0H6B";


if (VITE_API_KEY === 'local') {
  configGlobal = {
    // urlApiIbero: 'https://localhost:7031/api/',
    urlApiGestion: 'https://administracion-ditdes.ibero.mx/back/api/'
  }
   REACT_APP_RECAPTCHA_GOOGLE = "6LeDv5YpAAAAALmo1SGOJnWBHyh-Rkeb7YWFoHuV";
   REACT_APP_CLAVE_SECRETA ="6LeDv5YpAAAAAHNYo96SezE2JlfQUe-3EwQlo4I9";
}

if (VITE_API_KEY === 'development') {
  configGlobal = {
    // urlApiIbero: 'https://cuentasdes.secundariaibero.mx/back/api/',
    urlApiGestion: 'https://administracion-ditdes.ibero.mx/back/api/'
  }
}

if (VITE_API_KEY === 'test') {
  configGlobal = {
    // urlApiIbero: 'https://cuentaspru.secundariaibero.mx/back/api/',
    urlApiGestion: 'https://administracion-ditpru.ibero.mx/back/api/'
  }
}

if (VITE_API_KEY === 'production') {
  configGlobal = {
    // urlApiIbero: 'https://cuentas.secundariaibero.mx/back/api/',
    urlApiGestion: 'https://administracion-dit.ibero.mx/back/api/'
  }
}




export { configGlobal, appIdConfig, REACT_APP_RECAPTCHA_GOOGLE, REACT_APP_CLAVE_SECRETA }
