import { useParams } from 'react-router-dom';
import { Container, PageHeader } from '../../styles/Global';
import { Button } from '../../styles/components';
import { Form, Label, SelectInput, TextInput } from '../../styles/pages/createContact';
import api from '../../api/api';
import { ChangeEvent, useEffect, useState } from 'react';
import { unit_systems } from '../../utils/auxData';
import { toast } from 'react-toastify';

function PurchaseIngredient() {
  const { id } = useParams();
  const [ingredientName, setIngredientName] = useState("");
  const [price, setPrice] = useState(0.00);
  const [quantity, setQuantity] = useState(0);
  const [unit_system, setUnitSystem] = useState(Object.keys(unit_systems)[0]);
  const ingredient = parseInt(id ? id : "");

  useEffect(() => {
    const fetchIngredient = async () => {
      try {
        const response = await api.get(`/ingredient/${id}`);
        if (response.status === 200) {
          const { name } = response.data;
          setIngredientName(name);
        } 
      } catch (error) {
        console.error('Error fetching ingredient:', error);
      }
    };
    fetchIngredient();
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.post(`/ingredient-order/`, { quantity, price, unit_system, ingredient });
      if (response.status === 201) {
        toast.success("Compra realizada com sucesso!");
      } 
    } catch (error) {
      toast.error('Erro na compra do ingrediente.');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'quantity':
        setQuantity(parseInt(value, 10) || 0);
        break;
      case 'price':
        setPrice(parseFloat(value) || 0.00);
        break;
      case 'unit_system': 
        setUnitSystem(value); 
        break;
      default:
        break;
    }
  };

  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Comprar {ingredientName}</h1>
        </PageHeader>

        <Form onSubmit={handleSubmit}>
          <Label className='full-column'>
            Quantidade
            <TextInput
              name="quantity"
              type="number"
              placeholder="Ex: 10"
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

          <Label className='full-column'>
            Unidade de medida
            <SelectInput
              name='unit_system' 
              onChange={handleChange}
            >
              {Object.entries(unit_systems).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </SelectInput>
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
