import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(

  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>

);