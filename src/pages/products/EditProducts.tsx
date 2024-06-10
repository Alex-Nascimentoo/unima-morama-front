import { toast } from 'react-toastify';
import { Container, PageHeader } from '../../styles/Global';
import { Button } from '../../styles/components';
import { Form, Label, SelectInput, TextInput } from '../../styles/pages/createContact';
import { suppliers } from '../../utils/auxData';

async function handleSubmit(e: any) {
  e.preventDefault();
  toast.success("Contato editado com sucesso!");
}

function EditProducts() {
  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Novo produto</h1>
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

export default EditProducts