import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/Global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './styles/Theme';
import ContactDashboard from './pages/contact/ContactDashboard';
import CreateContact from './pages/contact/CreateContact';
import EditContact from './pages/contact/EditContact';
import ProductsDashboard from './pages/products/ProductsDashboard';
import CreateProducts from './pages/products/CreateProducts';
import EditProducts from './pages/products/EditProducts';
import Login from './pages/login/Login';
import PrivateRoutes from './components/PrivateRoutes';
import { AuthProvider } from './context/AuthProvider';
import MainDashboard from './pages/MainDashboard';
import Layout from './components/Layout';


function App() {
  return (
    <ThemeProvider theme={theme}>      
        <AuthProvider>
          <GlobalStyles />

          <BrowserRouter>
            <Layout>

              <Routes>
                <Route path='/login' element={<Login />} />

                <Route path='/' element={<PrivateRoutes />}>

                  <Route path='home' element={<MainDashboard />} />
                  <Route path='/contact'>
                    <Route path='dashboard' element={<ContactDashboard />} />
                    <Route path='create' element={<CreateContact />} />
                    <Route path='edit/:id' element={<EditContact />} />
                  </Route>
                  <Route path='/products'>
                    <Route path='dashboard' element={<ProductsDashboard />} />
                    <Route path='create' element={<CreateProducts />} />
                    <Route path='edit/:id' element={<EditProducts />} />
                  </Route>
                </Route>
              </Routes>
             </Layout>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
  )
}

export default App;
