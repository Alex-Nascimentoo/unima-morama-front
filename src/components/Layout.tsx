import React from 'react';
import { Icon } from '../styles/Global';
import { Link } from 'react-router-dom';
import { theme } from '../styles/Theme';
import { Header, HeaderContainer, SideBar } from '../styles/Layout';
import { useAuth } from '../hooks/useAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type LayoutProps = {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const { authUser } = useAuth();

  return (
    <>
      {authUser && (
        <div>
          <Header>
            <HeaderContainer>
              <h1>Morama</h1>
              <Link to=''>
                <Icon $src='/icon-gear.svg' $color={theme.color.white} />
              </Link>
            </HeaderContainer>
          </Header>

          <SideBar>
            <Link to='/home'>
              <Icon id='logo' $src="/icon-strawberry.svg" />
            </Link>
            
            <Link to='/ingredients/dashboard'>
              <Icon $src="/icon-cart.svg" />
            </Link>

            <Link to='/contact/dashboard'>
              <Icon $src="/icon-clients.svg" />
            </Link>

            <Link to='/products/dashboard'>
              <Icon $src="/icon-products.svg" />
            </Link>

            <Link to='/finance/dashboard'>
              <Icon $src="/icon-money.svg" />
            </Link>
            {/*
            <Link to='/bank_account/dashboard'>
              <Icon $src="/icon-wallet.svg" />
            </Link>
            */}
             
          </SideBar>
        </div>
      )}
      {props.children}
      <ToastContainer
        position="bottom-right" />
    </>
  );
}

export default Layout;
