import { useState } from 'react';
import { Container, PageHeader } from '../../styles/Global';
import { Label, TextInput } from '../../styles/pages/createContact';
import { Button, Form } from '../../styles/pages/createFinance';
import api from '../../api/api';
import { toast } from 'react-toastify';

function CreateFinance() {
  const [inputs, setInputs] = useState({ menu_item_id: '', price: '', quantity: '' });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = parseFloat(event.target.value);
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
  
    try {
      const response = await api.post(`/sale`, inputs);
      if (response.status === 201) {
        toast.success(`Transação cadastrada com sucesso.`)
      } 
    } catch (error: any) {
      toast.error("Não foi possível criar uma nova transação")
    }
  };

  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Nova Transação</h1>
        </PageHeader>

        <Form>
          {/* First row */}
          <Label>
            Nº pedido
            <TextInput
              name="menu_item_id"
              placeholder='Ex: 01'
              onChange={handleChange}
              />
          </Label>
          
          <Label>
            Valor
            <TextInput
              name="price"
              placeholder='Ex: 24,99'
              type='number'
              onChange={handleChange}
            />
          </Label>

          <Label>
            Quantidade
            <TextInput
              name="quantity"
              placeholder='Ex: 12'
              type='number'
              onChange={handleChange}
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