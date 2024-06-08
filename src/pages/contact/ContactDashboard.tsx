import { Container, Icon, PageHeader } from '../../styles/Global';
import { ListHeader, ListContent, DeleteButton, ContactCard } from '../../styles/pages/contactDashboard';
import { Button } from '../../styles/components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api/api';

export default function ContactDashboard() {
  const [contacts, setContacts] = useState(
    [{
      "id": 0,
      "name": "Fornecedor",
      "created_at": "",
      "client_id": 0
    }]
);

  const fetchContacts = async () => {
    try {
      const response = await api.get(`/supplier`);
      
      if (response.status === 200) {
        setContacts(response.data);
      } 
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  }

  const deleteContacts = async (supplierId: number) => {
    try {
      const response = await api.delete(`/supplier/${supplierId}`);
      
      if (response.status === 200) {
        alert("Fonecedor excluído com sucesso.")
      } 
    } catch (error: any) {
      console.error('Error:', error.message);
    }
    fetchContacts()
  }
  
  useEffect(() => {
    fetchContacts()
  }, []);

  
  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Contatos</h1>

          <Link
            to='/contact/create'
          >
            <Button>
              Adicionar
            </Button>
          </Link>
        </PageHeader>

        <section>
          <ListHeader>
            <h2 id='company-name'>Nome Fantasia</h2>
            <h2>Opções</h2>
          </ListHeader>

          <ListContent>
            
            {contacts.map(contact => (
              <ContactCard key={`card ${contact.id}`}>
                <p>{contact.name}</p>

                <div>
                  <Link to={`/contact/edit/${contact.id}`} key={contact.id}>
                    <Icon
                      $src='/icon-pencil.svg'
                      $size='1.6rem'
                    />
                  </Link>

                  <DeleteButton onClick={
                    () => deleteContacts(contact.id)
                  }>
                    <Icon
                      $src='/icon-trash.svg'
                      $size='1.6rem'
                    />
                  </DeleteButton>
                </div>
              </ContactCard>
            ))}
          </ListContent>
        </section>
      </Container>
    </main>
  );
}
