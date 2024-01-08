import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const store = configureStore();
root.render(
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </Provider>
);