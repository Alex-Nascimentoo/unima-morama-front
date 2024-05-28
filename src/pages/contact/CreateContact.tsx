import { Container, PageHeader } from '../../styles/Global';
import { Button } from '../../styles/components';
import { Form, Label, SelectInput, TextInput } from '../../styles/pages/createContact';
import { states } from '../../utils/auxData';

async function handleSubmit(e: any) {
  e.preventDefault();
  alert("Novo contato enviado para cadastro");
}

function CreateContact() {
  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Novo contato</h1>
        </PageHeader>

        <Form>
          {/* First row */}
          <Label>
            CNPJ/CPF
            <TextInput
              placeholder='00.000.000/0001-00'
            />
          </Label>

          <Label>
            Telefone
            <TextInput
              placeholder='(00) 90000-0000'
            />
          </Label>

          {/* Second row */}
          <Label className='full-column'>
            Nome Fantasia
            <TextInput
              placeholder='Ex: Empresa Bonita'
            />
          </Label>

          {/* Third row */}
          <Label className='full-column'>
            Razão Social
            <TextInput
              placeholder='Ex: Empresa Bonita LTDA'
            />
          </Label>

          {/* Fourth row */}
          <Label>
            CEP
            <TextInput
              placeholder='00-000.000'
            />
          </Label>

          <Label>
            UF
            <SelectInput>
              { 
                Object.entries(states).map(([key, value]) => (
                  <option value={key}>{ value }</option>
                ))
              }
            </SelectInput>
          </Label>

          {/* Fifth row */}
          <Label>
            Cidade
            <TextInput
              placeholder='Ex: Maceió'
            />
          </Label>

          <Label>
            Bairro
            <TextInput
              placeholder='Ex: Bairro Linda Moradia'
            />
          </Label>
          
          {/* Sixth row */}
          <Label className='full-column'>
            Endereço
            <TextInput
              placeholder='Ex: Rua Muito Linda, n° 7'
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

export default CreateContact