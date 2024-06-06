import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/Global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { theme } from './styles/Theme';
import ContactDashboard from './pages/contact/ContactDashboard';
import CreateContact from './pages/contact/CreateContact';
import EditContact from './pages/contact/EditContact';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/home' element={<Home />} />

            <Route path='/contact'>
              <Route path='dashboard' element={<ContactDashboard />} />
              <Route path='create' element={<CreateContact />} />
              <Route path='edit/:id' element={<EditContact />} />
            </Route>
            <Route path='/products'>
              <Route path='dashboard' element={<ProductsDashboard />} />
              <Route path='create' element={<CreateProduct />} />
              <Route path='edit/:id' element={<EditProduct />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
