import { useState } from 'react';
import api from '../../api/api';
import { Container, PageHeader } from '../../styles/Global';
import { Button } from '../../styles/components';
import { Form, Label, TextInput } from '../../styles/pages/createContact';
import { toast } from 'react-toastify';

function CreateIngredient() {
  const [ inputs, setInputs ] = useState({ name: '' });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await api.post(`/ingredient`, inputs);
      if (response.status === 201) {
        toast.success(`Ingrediente "${inputs.name}" cadastrado com sucesso".`)
      } 
    } catch (error: any) {
      toast.error("Não foi possível criar um novo ingrediente")
      console.error('Error:', error.message);
    }
  };
  
  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Novo contato</h1>
        </PageHeader>

        <Form onSubmit={handleSubmit}>
          <Label className='full-column'>
            Nome
            <TextInput
                  placeholder='Nome do ingrediente'
                  name="name" 
                  value={inputs.name || ""} 
                  onChange={handleChange}
            />
          </Label>

          <Button
            className='full-column'
            onClick={handleSubmit}
          >
            Adicionar
          </Button>
        </Form>
      </Container>
    </main>
  )
}

export default CreateIngredient