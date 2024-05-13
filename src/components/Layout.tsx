import React from 'react';
import {
  SideBar,
  Header,
  HeaderContainer
} from '../styles/components/Layout';
import { Icon } from '../styles/Global';
import { Link } from 'react-router-dom';
import { theme } from '../styles/Theme';

type LayoutProps = {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <Header>
        <HeaderContainer>
          <h1>Morama</h1>

          <Link to=''>
            <Icon
              $src='/icon-gear.svg'
              $color={theme.color.white}
            />
          </Link>
        </HeaderContainer>
      </Header>

      <SideBar>
        <Link to='/home' relative='path'>
          <Icon id='logo' $src="/icon-strawberry.svg" />
        </Link>

        <Link to=''>
          <Icon $src="/icon-cart.svg" />
        </Link>
        
        <Link to='/contact/dashboard'>
          <Icon $src="/icon-clients.svg" />
        </Link>
        
        <Link to=''>
          <Icon $src="/icon-products.svg" />
        </Link>
        
        <Link to=''>
          <Icon $src="/icon-money.svg" />
        </Link>
      </SideBar>

      { props.children }
    </>
  )
}

export default Layout