import { useState } from 'react';
import { Container, Icon, PageHeader } from '../../styles/Global';
import { theme } from '../../styles/Theme';
import { Label, SelectInput, TextInput } from '../../styles/pages/createContact';
import { Button, Form } from '../../styles/pages/createFinance';
import { Filter, FilterButton } from '../../styles/pages/financeDashboard';
import { clients, paymentMethods, banks } from '../../utils/auxData';

async function handleSubmit(e: any) {
  e.preventDefault();
  alert("Novo contato enviado para cadastro");
}

function CreateFinance() {
  const [ filterState, toggleFilterState ] = useState(true);

  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Nova Transação</h1>

          <FilterButton onClick={() => toggleFilterState(prev => !prev)}>
              {filterState ?
                <Filter state={filterState}>
                  <p>Receita</p>
                  <Icon $color={theme.color.green} $src="/icon-plus.svg" />
                </Filter>
                :
                <Filter state={filterState}>
                  Despesa
                  <Icon $color={theme.color.red} $src="/icon-dash.svg" />
                </Filter>
              }
            </FilterButton>
        </PageHeader>

        <Form>
          {/* First row */}
          <Label>
            Nº pedido
            <TextInput
              placeholder='0000'
            />
          </Label>

          <Label className='third-column'>
            Cliente
            <SelectInput>
              { 
                Object.entries(clients).map(([key, value]) => (
                  <option value={key}>{ value }</option>
                ))
              }
            </SelectInput>
          </Label>

          {/* Second row */}
          <Label>
            Forma de pgt.
            <SelectInput>
              { 
                Object.entries(paymentMethods).map(([key, value]) => (
                  <option value={key}>{ value }</option>
                ))
              }
            </SelectInput>
          </Label>
          <Label>
            Valor
            <TextInput
              placeholder='99.999,99'
            />
          </Label>

          <Label>
            Conta
            <SelectInput>
              { 
                Object.entries(banks).map(([key, value]) => (
                  <option value={key}>{ value }</option>
                ))
              }
            </SelectInput>
          </Label>

          <Label>
            Vencimento
            <TextInput
              placeholder='00/00/0000'
            />
          </Label>

          <div className='full-column'>
            <Button
              onClick={handleSubmit}
            >
              Adicionar
            </Button>
          </div>
        </Form>
      </Container>
    </main>
  )
}

export default CreateFinance