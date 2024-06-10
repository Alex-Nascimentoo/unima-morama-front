import { Container, PageHeader } from '../../styles/Global';
import { Button } from '../../styles/components';
import { Form, Label, SelectInput, TextInput } from '../../styles/pages/createContact';
import api from '../../api/api';
import { useState } from 'react';
import { toast } from 'react-toastify';

function PurchaseIngredient() {
  const [ inputs, setInputs ] = useState({});
  
  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.post(`/ingredient-order/`, inputs);
      if (response.status === 200) {
        toast.success("Produto cadastrado com sucesso!");
      } 
    } catch (error) {
      toast.error('Erro no cadastro do produto.');
    }
  };

  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Cadastrar produto</h1>
        </PageHeader>

        <Form onSubmit={handleSubmit}>
          <Label className='full-column'>
            Name
            <TextInput
              name="name"
              placeholder="Ex: Pizza"
              onChange={handleChange}
            />
          </Label>

          <Label className='full-column'>
            Preço
            <TextInput
              name="price"
              type="number"
              step="0.01"
              placeholder="Ex: 25.00"
              onChange={handleChange}
            />
          </Label>

          
          <Button className='full-column' type="submit">
            Salvar
          </Button>
        </Form>
      </Container>
    </main>
  );
}

export default PurchaseIngredient;
