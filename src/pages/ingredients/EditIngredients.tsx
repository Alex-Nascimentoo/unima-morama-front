import { useParams } from 'react-router-dom';
import { Container, PageHeader } from '../../styles/Global';
import { Button } from '../../styles/components';
import { Form, Label, TextInput } from '../../styles/pages/createContact';
import api from '../../api/api';
import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function EditIngredient() {
  const { id } = useParams()
  const [ ingredientName, setIngredientName ] = useState("")

  const fetchContact = async () => {
    try {
      const response = await api.get(`/supplier/${id}`);
      
      if (response.status === 200) {
        setIngredientName(response.data.name);
      } 
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  }

  const editContact = async () => {
    try {
      const response = await api.patch(`/supplier/${id}`);
      
      if (response.status === 200) {
        toast.success("Ingrediente editado com sucesso!")
      } 
    } catch (error: any) {
      toast.error("Erro na edição do ingrediente")
      console.error('Error:', error.message);
    }
  }
  
  async function handleSubmit(e: any) {
    e.preventDefault();
    editContact()
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIngredientName(e.target.value); 
  };


  useEffect(() => {
    fetchContact()
  }, [id]);
  
  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Editar ingrediente</h1>
        </PageHeader>

        <Form>
          <Label className='full-column'>
            Nome do Ingrediente
            <TextInput
              placeholder='Ex: Cebolinha'
              value={ingredientName}
              onChange={handleChange}
            />
          </Label>

          <Button
            className='full-column'
            onClick={handleSubmit}
          >
            Salvar
          </Button>
        </Form>
      </Container>
    </main>
  )
}

export default EditIngredient