import { Provider } from 'react-redux'
import { store } from './redux-toolkit/Store'
import { AppRouter } from './routes/AppRouter'
import { REACT_APP_RECAPTCHA_GOOGLE } from './config/Config';


const script = document.createElement('script');
script.src = `https://www.google.com/recaptcha/api.js?render=${REACT_APP_RECAPTCHA_GOOGLE}`; // Ruta al script que deseas ejecutar
document.body.appendChild(script);
function App() {

  return (
    <Provider store={store}>     
        <AppRouter/>        
    </Provider>
  )
}

export default App
