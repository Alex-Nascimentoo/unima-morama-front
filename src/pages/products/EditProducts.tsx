import { Container, PageHeader } from '../../styles/Global';
import { Button } from '../../styles/components';
import { Form, Label, SelectInput, TextInput } from '../../styles/pages/createContact';
import { states } from '../../utils/auxData';

async function handleSubmit(e: any) {
  e.preventDefault();
  alert("Contato editado com sucesso!");
}

function EditProducts() {
  return (
    null
  )
}

export default EditProducts