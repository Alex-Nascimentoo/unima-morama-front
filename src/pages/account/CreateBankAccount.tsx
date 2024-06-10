import { toast } from 'react-toastify';
import { Container, PageHeader } from '../../styles/Global';
import { Button } from '../../styles/components';
import { Form, Label, TextInput } from '../../styles/pages/createContact';

async function handleSubmit(e: any) {
  e.preventDefault();
  toast.success("Nova conta bancária enviada para cadastro");
}

function CreateBankAccount() {
  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Nova conta bancária</h1>
        </PageHeader>

        <Form>
          {/* First row */}
          <Label className='full-column'>
            Nome
            <TextInput
              placeholder='Conta muito top'
            />
          </Label>

          {/* Second row */}

          <Label>
            Instituição
            <TextInput
              placeholder='Banco Morama'
            />
          </Label>

          <Label>
            Saldo em conta
            <TextInput
              placeholder='9.999.999,97'
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

export default CreateBankAccount