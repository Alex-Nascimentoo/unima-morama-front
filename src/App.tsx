import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/Global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './styles/Theme';
import ContactDashboard from './pages/contact/ContactDashboard';
import CreateContact from './pages/contact/CreateContact';
import EditContact from './pages/contact/EditContact';
import FinanceDashboard from './pages/finance/FinanceDashboard';
import CreateFinance from './pages/finance/CreateFinance';
import BankAccountDashboard from './pages/account/BankAccountDashboard';
import CreateBankAccount from './pages/account/CreateBankAccount';
import EditBankAccount from './pages/account/EditBankAccount';
import ProductsDashboard from './pages/products/ProductsDashboard';
import CreateProducts from './pages/products/CreateProducts';
import EditProducts from './pages/products/EditProducts';
import Login from './pages/login/Login';
import PrivateRoutes from './components/PrivateRoutes';
import { AuthProvider } from './context/AuthProvider';
import MainDashboard from './pages/MainDashboard';
import Layout from './components/Layout';
import IngredientDashboard from './pages/ingredients/IngredientsDashboard';
import CreateIngredient from './pages/ingredients/CreateIngredients';
import PurchaseIngredient from './pages/ingredients/PurchaseIngredients';
import EditIngredient from './pages/ingredients/EditIngredients';

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
                    
                    <Route path='/ingredients'>
                      <Route path='dashboard' element={<IngredientDashboard />} />
                      <Route path='create' element={<CreateIngredient />} />
                      <Route path='purchase/:id' element={<PurchaseIngredient />} />
                      <Route path='edit/:id' element={<EditIngredient />} />

                    </Route>

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

                    <Route path='/finance'>
                      <Route path='dashboard' element={<FinanceDashboard />} />
                      <Route path='create' element={<CreateFinance />} />
                    </Route>
                    
                    <Route path='/bank_account'>
                      <Route path='dashboard' element={<BankAccountDashboard />} />
                      <Route path='create' element={<CreateBankAccount />} />
                      <Route path='edit/:id' element={<EditBankAccount />} />
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
