import { Layout } from 'antd';
import Header from './components/Layout/Header';
import Sider from './components/Sider/Sider';
import Content from './components/Content/Content';
import { CryptoContextProvider } from './components/Contects/crypto-context.jsx';


const App = () => {
  return (    
  <CryptoContextProvider>
    <Layout>
      <Header/>
      <Layout>
        <Sider/>
        <Content/>
      </Layout>
    </Layout>
  </CryptoContextProvider>
  );
};

export default App;
