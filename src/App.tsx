import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/Global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { theme } from './styles/Theme';
import ContactDashboard from './pages/contact/ContactDashboard';
import CreateContact from './pages/contact/CreateContact';
import EditContact from './pages/contact/EditContact';
import BankAccountDashboard from './pages/account/BankAccountDashboard';
import CreateBankAccount from './pages/account/CreateBankAccount';
import EditBankAccount from './pages/account/EditBankAccount';



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

            <Route path='/bank_account'>
              <Route path='dashboard' element={<BankAccountDashboard />} />
              <Route path='create' element={<CreateBankAccount />} />
              <Route path='edit/:id' element={<EditBankAccount />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
