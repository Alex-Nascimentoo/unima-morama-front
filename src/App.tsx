import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/Global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ContactDashboard from './pages/contact/ContactDashboard';
import Layout from './components/Layout';

import { theme } from './styles/Theme';
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
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
