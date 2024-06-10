import { Icon, PageHeader } from '../../styles/Global';
import { DeleteButton, ListContent } from '../../styles/pages/contactDashboard';
import { Button } from '../../styles/components';
import { Link } from 'react-router-dom';
import { ContactCard, Container, ListHeader } from '../../styles/pages/productsDashboard';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { toast } from 'react-toastify';

export default function ProductsDashboard() {
  const [ productsContent, setProductsContent ] = useState([{ name:"", price: "", id: 0 }])

  const fetchProducts = async () => {
    try {
      const response = await api.get(`/menu-item/`);
      
      if (response.status === 200) {
        setProductsContent(response.data.name);
      } 
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  }


  const deleteContacts = async (itemId: number) => {
    try {
      const response = await api.delete(`/menu-item/${itemId}`);
      
      if (response.status === 200) {
        toast.success("Fonecedor excluído com sucesso.")
        console.log("excluiu")
      } 
    } catch (error: any) {
        toast.error("Erro na exclusão do fornecedor.");
    }
  }
  

  useEffect(() => {
    fetchProducts();
  }, [ productsContent ]);
  
  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Produtos</h1>

          <Link
            to='/products/create'
          >
            <Button>
              Adicionar
            </Button>
          </Link>
        </PageHeader>

        <section>
          <ListHeader>
            <h2 id="name">Nome</h2>
            <h2>Valor</h2>
            <h2>Editar</h2>
          </ListHeader>

          <ListContent>
            {productsContent.map((product) => (
              <ContactCard>
                <p className="name">{product.name}</p>
                <p>{product.price}</p>
                <DeleteButton onClick={
                    () => deleteContacts(product.id)
                }>               
                  <Icon
                    $src='/icon-trash.svg'
                    $size='1.6rem'
                  />
                </DeleteButton> 
              </ContactCard>
            ))}
          </ListContent>
        </section>
      </Container>
    </main>
  );
}
