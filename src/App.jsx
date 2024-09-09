import { CryptoContextProvider } from './components/Contects/crypto-context.jsx';
import AppLayout from './components/AppLayout/AppLayout.jsx';


const App = () => {
  return (    
  <CryptoContextProvider>
    <AppLayout/>
  </CryptoContextProvider>
  );
};

export default App;
