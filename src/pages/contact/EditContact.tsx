import { useParams } from 'react-router-dom';
import { Container, PageHeader } from '../../styles/Global';
import { Button } from '../../styles/components';
import { Form, Label, TextInput } from '../../styles/pages/createContact';
import api from '../../api/api';
import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';



function EditContact() {
  const { id } = useParams()
  const [ contactContent, setContactContent ] = useState("")

  const fetchContact = async () => {
    try {
      const response = await api.get(`/supplier/${id}`);
      
      if (response.status === 200) {
        setContactContent(response.data.name);
      } 
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  }

  const editContact = async () => {
    try {
      const response = await api.patch(`/supplier/${id}`);
      
      if (response.status === 200) {
        toast.success("Contato editado com sucesso!")
      } 
    } catch (error: any) {
      toast.error('Erro na edição de contatos.');
    }
  }
  
  async function handleSubmit(e: any) {
    e.preventDefault();
    editContact()
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContactContent(e.target.value); 
  };


  useEffect(() => {
    fetchContact()
  }, [id]);
  
  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Editar contato</h1>
        </PageHeader>

        <Form>
          <Label className='full-column'>
            Nome Fantasia
            <TextInput
              placeholder='Ex: Empresa Bonita'
              value={contactContent}
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

export default EditContact