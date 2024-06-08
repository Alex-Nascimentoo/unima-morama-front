import { Container, Icon, PageHeader } from '../../styles/Global';
import { Button } from '../../styles/components';
import { Link } from 'react-router-dom';
import { ListContent, ListHeader, ContactCard, StatusCard, Filter, FilterButton, Header } from '../../styles/pages/financeDashboard';
import { useState } from 'react';
import { theme } from '../../styles/Theme';

export default function FinanceDashboard() {
  const [ filterState, toggleFilterState ] = useState(true);

  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Financeiro</h1>
          
          <Header>
            <FilterButton onClick={() => toggleFilterState(prev => !prev)}>
              {filterState ?
                <Filter $state={"recipt"}>
                  <p>Receitas</p>
                  <Icon $color={theme.color.green} $src="/icon-plus.svg" />
                </Filter>
                :
                <Filter $state={"debt"}>
                  Despesas
                  <Icon $color={theme.color.red} $src="/icon-dash.svg" />
                </Filter>
              }
            </FilterButton>

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
            <h2 id='header-client-name'>Cliente</h2>
            <h2>Pedido</h2>
            <h2>Valor</h2>
            <h2>Venc.</h2>
            <h2>Status</h2>
          </ListHeader>

          <ListContent>
            <ContactCard>
              <p>John Doe's Company</p>
              <p>Pedido</p>
              <p>0,00 R$</p>
              <p>00/00/000</p>
              <StatusCard $status='active'>Ativo</StatusCard>
            </ContactCard>

            <ContactCard>
              <p>John Doe's Company</p>
              <p>Pedido</p>
              <p>0,00 R$</p>
              <p>00/00/000</p>
              <StatusCard $status='paid'>Pago</StatusCard>
            </ContactCard>

            <ContactCard>
              <p>John Doe's Company</p>
              <p>Pedido</p>
              <p>0,00 R$</p>
              <p>00/00/000</p>
              <StatusCard $status='late'>Atrasado</StatusCard>
            </ContactCard>
          </ListContent>
        </section>
      </Container>
    </main>
  );
}
