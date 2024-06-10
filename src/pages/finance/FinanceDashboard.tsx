import { Container, PageHeader } from '../../styles/Global';
import { Button } from '../../styles/components';
import { Link } from 'react-router-dom';
import { ListContent, ListHeader, ContactCard, Header } from '../../styles/pages/financeDashboard';
import api from '../../api/api';
import { useEffect, useState } from 'react';

export default function FinanceDashboard() {
  const [ sales, setSales ] = useState([{ menu_item_id: 0, price: 0, quantity: 0, total: 0.00}])  

  const fetchContacts = async () => {
    try {
      const response = await api.get(`/sale`);
      
      if (response.status === 200) {
        setSales(response.data);
      } 
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  }

  useEffect(() => {
    fetchContacts()
  },[])
  
  return (
    
    <main>
      <Container>
        <PageHeader>
          <h1>Financeiro</h1>
          
          <Header>
            <Link
              to='/finance/create'
            >
              <Button>
                Adicionar
              </Button>
            </Link>
          </Header>
        </PageHeader>

        <section>
          <ListHeader>
            <h2 id='header-client-name'>Id</h2>
            <h2>Valor</h2>
            <h2>Quantidade</h2>
            <h2>Total</h2>
          </ListHeader>

          <ListContent>
            {sales.map(sale => (
              <ContactCard>
                <p key={`id ${sale.menu_item_id}`}>{sale.menu_item_id}</p>
                <p key={`price ${sale.menu_item_id}`}>{sale.price}</p>
                <p key={`quantity ${sale.menu_item_id}`}>{sale.quantity}</p>
                <p key={`total ${sale.menu_item_id}`}>{sale.total}</p>
              </ContactCard>
            ))}
          </ListContent>
        </section>
      </Container>
    </main>
  );
}
