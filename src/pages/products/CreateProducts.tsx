import { Container, PageHeader } from '../../styles/Global';
import { Button } from '../../styles/components';
import { Form, Label, SelectInput, TextInput } from '../../styles/pages/createProducts';
import { suppliers } from '../../utils/auxData';
import { Form, Label, SelectInput, TextInput } from '../../styles/pages/createContact';
import { states } from '../../utils/auxData';
import { handleSubmit } from '../../controllers/contactController';

function CreateProducts() {
  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Novo contato</h1>
        </PageHeader>

        <Form>
          {/* First row */}
          <Label className='full-column'>
            Nome
            <TextInput
              placeholder='Ex: John Doe'
            />
          </Label>

          {/* Second row */}
          <Label className='full-column'>
            Fornecedor
            <SelectInput>
              { 
                suppliers.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))
              }
            </SelectInput>
          </Label>

          {/* Third row */}
          <Label>
            Preço
            <TextInput type='number'
              placeholder='00-000.000'
            />
          </Label>

          <Label>
            Estoque
            <TextInput 
              placeholder='39'
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

export default CreateProducts