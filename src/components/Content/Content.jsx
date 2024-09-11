import { Layout, Typography } from "antd";
import { useCryptoContext } from "../Contects/crypto-context";
import PortfolioChart from "../PortfolioChart/PortfolioChart";
import AssetsTable from "../AssetsTable/AssetsTable";

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  color: '#fff',
  backgroundColor: '#001529',
};

const Content = () => {
  const { assets, crypto } = useCryptoContext();

  const cryptoPriceMap = crypto.reduce((acc, c) => {
    acc[c.id] = c.price;
    return acc
  }, {})

  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{ textAlign: 'left', color: '#fff' }}>
        Portfolio: {' '}
        {assets
          .map((asset) =>  asset.amount * cryptoPriceMap[asset.id])
          .reduce((acc, v) => (acc += v), 0)
          .toFixed(2)}
        $
      </Typography.Title>
      <PortfolioChart/>
      <AssetsTable/>
    </Layout.Content>
  );
};

export default Content;
