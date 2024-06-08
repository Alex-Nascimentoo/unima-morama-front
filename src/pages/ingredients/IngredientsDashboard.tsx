import { Container, Icon, PageHeader } from '../../styles/Global';
import { Button } from '../../styles/components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { ContactCard, ContactCardPurchases, DeleteButton, ListContent, ListHeader, ListHeaderPurchases, MainIngredients } from '../../styles/pages/ingredientsDashboard';

export default function IngredientDashboard() {
    const [ingredients, setIngredients] = useState(
        [
            {
                "id": 0,
                "name": "Placeholder",
                "created_at": "Placeholder",
                "client_id": 0
            },

        ]
    );
    const [purchases, setPurchases] = useState(
        [
            {
                "id": 0,
                "name": "Placeholder",
                "quantity": 0,
                "unit_system": "Placeholder",
                "price": "Placeholder",
                "total": "Placeholder",
                "created_at": "Placeholders",
                "ingredient_id": 0,
                "client_id": 0
            },
        ]
    );

  const fetchIngredients = async () => {
    try {
      const response = await api.get(`/ingredient`);
      
      if (response.status === 200) {
        setIngredients(response.data);
      } 
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  }

  const fetchPurchases = async () => {
    try {
      const response = await api.get(`/ingredient-order`);
      
      if (response.status === 200) {
        setPurchases(response.data);
      } 
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  }

  const deleteIngredient = async (ingredientId: number) => {
    try {
      const response = await api.delete(`/ingredient/${ingredientId}`);
      
      if (response.status === 200) {
        alert("Fonecedor excluído com sucesso.")
      } 
    } catch (error: any) {
      console.error('Error:', error.message);
    }
    fetchIngredients()
  }
  
  const deletePurchase = async (orderId: number) => {
    try {
      const response = await api.delete(`/ingredient-order/${orderId}`);
      
      if (response.status === 200) {
        alert("Fonecedor excluído com sucesso.")
      } 
    } catch (error: any) {
      console.error('Error:', error.message);
    }
    fetchPurchases()
  }

  useEffect(() => {
    fetchIngredients()
    fetchPurchases()
  }, []);

  
  return (
    <MainIngredients>
      <Container id='puchases'>
        <PageHeader>
          <h1>Compras</h1>

          <Link
            to='/ingredients/create'
          >
          </Link>
        </PageHeader>

        <section>
          <ListHeaderPurchases>
            <h2 id='name'>Nome</h2>
            <h2>Quantidade</h2>
            <h2>Medida</h2>
            <h2>Preço</h2>
            <h2>Total</h2>
            <h2>Opções</h2>
          </ListHeaderPurchases>

          <ListContent>
            
            {purchases.map(purchase => (
              <ContactCardPurchases key={`purcharse card ${purchase.id}`}>
                <p>{purchase.name}</p>
                <p>{purchase.quantity}</p>
                <p>{purchase.unit_system}</p>
                <p>{purchase.price}</p>
                <p>{purchase.total}</p>
                <div>
                  <DeleteButton onClick={
                    () => deletePurchase(purchase.id)
                  }>
                    <Icon
                      $src='/icon-trash.svg'
                      $size='1.6rem'
                    />
                  </DeleteButton>
                </div>
              </ContactCardPurchases>
            ))}
          </ListContent>
        </section>
      </Container>
      <Container>
        <PageHeader>
          <h1>Ingredientes</h1>

          <Link
            to='/ingredients/create'
          >
            <Button>
              Adicionar
            </Button>
          </Link>
        </PageHeader>

        <section>
          <ListHeader>
            <h2 id='company-name'>Nome</h2>
            <h2>Opções</h2>
          </ListHeader>

          <ListContent>
            
            {ingredients.map(ingredient => (
              <ContactCard key={`card ${ingredient.id}`}>
                <p>{ingredient.name}</p>

                <div>
                  <Link to={`/ingredients/purchase/${ingredient.id}`} key={`Purchase ${ingredient.id}`}>
                    <Icon
                      $src='/icon-cart.svg'
                      $size='1.6rem'
                    />
                  </Link>
                  
                  <Link to={`/ingredients/edit/${ingredient.id}`} key={`Edit ${ingredient.id}`}>
                    <Icon
                      $src='/icon-pencil.svg'
                      $size='1.6rem'
                    />
                  </Link>

                  <DeleteButton onClick={
                    () => deleteIngredient(ingredient.id)
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
      
    </MainIngredients>
  );
}
