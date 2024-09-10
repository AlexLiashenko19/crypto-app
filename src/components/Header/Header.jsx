import { Button, Layout, Modal, Select, Space, Drawer } from 'antd';
import { useCryptoContext } from '../Contects/crypto-context';
import { useEffect, useState } from 'react';
import CoinInfoModal from '../CoinInfoModal.jsxx/CoinInfoModal';
import AddAssetForm from '../AddAssetForm/AddAssetForm';

const headerStyle = {
    width: '100%',
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-betwen',
    alignItems: 'center',
    backgroundColor: '#4096ff',
  };

function Header () {
    const [select, setSelect] = useState(false)
    const [coin, setCoin] = useState(null);
    const [modal, setModal] = useState(false)
    const [drawer, setDrawer] = useState(true)


    const { crypto } = useCryptoContext()

    useEffect(() => {
        const keypress = event => {
            if(event.key === '/') {
                setSelect((prev => !prev))
            }
        }
        document.addEventListener('keypress', keypress)
        return () => document.removeEventListener('keypress', keypress);
    }, [])

    function handleSelect (value) {
        setCoin(crypto.find((c) => c.id === value))        
        setModal(true)
    }

    return (
        <Layout.Header style={headerStyle}>
            <Select
                style={{
                  width: 250,
                }}
                open={select}
                onSelect={handleSelect}
                onClick={() => setSelect(prev => !prev)} 
                value="press / to open"
                options={crypto.map(coin => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon,
                }))}
                optionRender={(option) => (
                  <Space>
                    <img style={{ width: 20 }} src={option.data.icon} alt={option.data.label} /> {option.data.label}
                  </Space>
                )}
            />

            <Button type="primary" onClick={() => setDrawer(true)} style={{marginLeft: 'auto'}}>Primary Button</Button>

            <Modal 
            open={modal} 
            onCancel={() => setModal(false)}
            footer={null}>
                <CoinInfoModal coin={coin}/>
            </Modal>
            <Drawer 
            width={600} 
            title="Add Asset" 
            onClose={() => setDrawer(false)} 
            open={drawer} 
            destroyOnClose
            >
                <AddAssetForm onClose={() => setDrawer(false)} />
            </Drawer>
        </Layout.Header>
    )
}

export default Header;