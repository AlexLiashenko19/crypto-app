import { Layout } from 'antd';
import Header from './components/Layout/Header';
import Sider from './components/Sider/Sider';
import Content from './components/Content/Content';


const App = () => {
  return (    
  <Layout>
    <Header/>
  <Layout>
    <Sider/>
    <Content/>
  </Layout>
</Layout>
  );
};

export default App;
