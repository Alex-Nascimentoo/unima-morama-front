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
        setProductsContent(response.data);
      } 
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  }


  const deleteProduct = async (itemId: number) => {
    try {
      const response = await api.delete(`/menu-item/${itemId}`);
      
      if (response.status === 204) {
        toast.success("Produto excluído com sucesso.")
        fetchProducts();
      } 
    } catch (error: any) {
        toast.error("Erro na exclusão do Produto.");
    }
  }
  

  useEffect(() => {
    fetchProducts();
  }, [ ]);
  
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
              <ContactCard key={`Card ${product.name}`}>
                <p className="name" key={`Name ${product.name}`}>{product.name}</p>
                <p key={`Price ${product.name}`}>{product.price}</p>
                <DeleteButton key={`Button ${product.name}`} onClick={
                    () => deleteProduct(product.id)
                }>               
                  <Icon
                    key={`Trash Icon ${product.name}`}
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
