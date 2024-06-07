import { PageHeader } from '../../styles/Global';
import { TextInput } from '../../styles/pages/createContact';
import { handleSubmit } from '../../controllers/contactController';
import { BackgroundImg, Button, RightCard, LeftCard, Screen, Form, Img, Label, Container, ImgLabel } from '../../styles/pages/login'

function Login() {
  return (
    <main>
        <BackgroundImg src="https://as1.ftcdn.net/v2/jpg/01/22/20/44/1000_F_122204437_cka92jJ8XOTh4vrPu9fGq686qltKmNWE.jpg" alt="background" />      
        <Screen>
              <Container>
              <LeftCard>
                <ImgLabel>
                  MORAMA
                </ImgLabel>
                <Img src="https://images.unsplash.com/photo-1519197462-7755f76e6fbd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Chocolate com Morangos" />
              </LeftCard>

              <RightCard>
              <Form>
                <Label>
                  Bem-vindo!
                </Label>
                
                <TextInput
                  placeholder='Nome de Usuário'
                />
              
                <TextInput
                  placeholder='Senha'
                />
              
                <Button
                  className='full-column'
                  onClick={handleSubmit}
                >
                  Adicionar
                </Button>
              </Form>
            </RightCard>
            </Container>
        </Screen>
    </main>
  )
}

export default Login