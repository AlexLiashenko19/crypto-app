import { Layout, Spin } from 'antd';
import Header from '../Header/Header';
import Sider from '../Sider/Sider';
import Content from '../Content/Content';
import { useCryptoContext } from '../Contects/crypto-context';

const AppLayout = () => {
   const {loading, assets} = useCryptoContext()

   if (loading) {
    return <Spin fullscreen/>
   }
   
  return (
    <Layout>
      <Header/>
      <Layout>
        <Sider/>
        <Content/>
      </Layout>
    </Layout>
  )
}

export default AppLayout
