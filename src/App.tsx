import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/Global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { theme } from './styles/Theme';
import ContactDashboard from './pages/contact/ContactDashboard';
import CreateContact from './pages/contact/CreateContact';
import EditContact from './pages/contact/EditContact';
import FinanceDashboard from './pages/finance/FinanceDashboard';
import CreateFinance from './pages/finance/CreateFinance';



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

            <Route path='/finance'>
              <Route path='dashboard' element={<FinanceDashboard />} />
              <Route path='create' element={<CreateFinance />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
