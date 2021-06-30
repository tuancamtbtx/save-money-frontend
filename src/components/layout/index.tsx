import React, { useMemo, memo, ReactNode, useContext, useState, useEffect } from 'react';
import { LayoutWrapper, ContentWrapper, LogoWrapper } from 'src/components/wrapper'
import { Layout, Menu } from 'antd';
import Head from 'next/head'
import UserDropDown from './user-dropdown'
const { Header, Sider, Content, Footer } = Layout
import Link from 'src/components/link'


declare var localStorage: any;

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  OrderedListOutlined,
  SendOutlined,
  AreaChartOutlined,
  GiftOutlined,
  SettingOutlined
}
  from '@ant-design/icons'

type IProps = {
  title?: string,
  children?: ReactNode,
  activeMenuKey?: string,
}
const BaseLayout: React.FC<IProps> = memo(({ title, activeMenuKey, children }: IProps) => {

  const [collapsed, setCollapsed] = useState(false)
  // Correct
  const [username, setUsername] = useState(undefined)

  useEffect(() => {
    setUsername(localStorage.getItem('username'))
  }, [])
  return (
    <LayoutWrapper>
      <Head>
        <title>{title} | Sổ Tiết Kiệm</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Header id='headerNav'>
          <div style={{ 'display': 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
            <div style={{
              color: '#fff',
              fontSize: '18px',
              lineHeight: '64px',
              padding: '0 24px',
              cursor: 'pointer',
              transition: 'color 0.3s',
            }}>
              {collapsed ?
                <MenuUnfoldOutlined
                  className="trigger"
                  onClick={() => setCollapsed(false)} /> :
                <MenuFoldOutlined className="trigger"
                  onClick={() => setCollapsed(true)} />}
            </div>
            <LogoWrapper>
              <img src='https://cdn.icon-icons.com/icons2/2104/PNG/512/bank_icon_129525.png' />
            </LogoWrapper>
          </div>
          <UserDropDown username={username} avatar="https://pickaface.net/gallery/avatar/unr_demo_181102_1037_17ut.png" />
        </Header>
        <Layout style={{ marginTop: '1px' }}>
          <Sider theme="light" trigger={null} collapsible collapsed={collapsed} style={{ padding: '0px' }}>
            <Menu selectedKeys={[activeMenuKey]} theme="light" mode="inline" >
              <Menu.ItemGroup key="g2" title="Quản Lí">
                <Menu.Item key="/report">
                  <Link path='/report'>
                    <a>
                      <AreaChartOutlined />
                      <span className='nav-text'>Báo Cáo</span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/saving">
                  <Link path='/saving'>
                    <a>
                      <OrderedListOutlined />
                      <span className='nav-text'>Sổ Tiết Kiệm</span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/withdrawal">
                  <Link path='/withdrawal'>
                    <a>
                      <GiftOutlined />
                      <span className='nav-text'>Rút Tiền</span>
                    </a>
                  </Link>
                </Menu.Item>  <Menu.Item key="/send">
                  <Link path='/send'>
                    <a>
                      <SendOutlined />
                      <span className='nav-text'>Gửi Tiền</span>
                    </a>
                  </Link>
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g1" title="Quản Trị">

                <Menu.Item key="/users">
                  <Link path='/users'>
                    <a>
                      <UserOutlined />
                      <span className='nav-text'>Quản Trị Viên</span>
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/customers">
                  <Link path='/customers'>
                    <a>
                      <SettingOutlined />
                      <span className='nav-text'>Khách Hàng</span>
                    </a>
                  </Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu>
          </Sider>
          <Layout style={{ marginTop: '1px' }}>
            <Content style={{ overflow: 'initial', minHeight: '100vh' }}>
              <ContentWrapper>
                {children}
              </ContentWrapper>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              ©  {new Date().getFullYear()} - NMCNPM HCMUS
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </LayoutWrapper>
  )
})
export default (BaseLayout)