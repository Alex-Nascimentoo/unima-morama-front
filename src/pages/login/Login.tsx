import { TextInput } from '../../styles/pages/createContact';
import { BackgroundImg, Button, RightCard, LeftCard, Screen, Form, Img, Label, Container, ImgLabel, MainLogin } from '../../styles/pages/login'
import { setCookie } from 'nookies';
import axios from 'axios';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";

function Login() {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { setAuthUser } = useAuth()
  const navigate = useNavigate();
  setAuthUser(false)
  
  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      console.log(inputs);
      const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/auth`, inputs);
      
      if (response.status === 200) {
        const { client_id, access_token } = response.data;

        setCookie(null, 'access_token', access_token, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/', 
        });
        setCookie(null, 'client_id', client_id, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/', 
        });
        setAuthUser(true)
        navigate("/home")

      } 
    } catch (error: any) {
      console.error('Error:', error.message);
      alert(`${error}`)
    }
  };
  
  return (
    <MainLogin>
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
              <Form onSubmit={handleSubmit}>
                <Label>
                  Bem-vindo!
                </Label>
                
                <TextInput
                  placeholder='Nome de Usuário'
                  name="email" 
                  value={inputs.email || ""} 
                  onChange={handleChange}
                />
              
                <TextInput
                  placeholder='senha'
                  type="password" 
                  name="password" 
                  value={inputs.password || ""} 
                  onChange={handleChange}
                />
              
                <Button
                  className='full-column'
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Form>
            </RightCard>
            </Container>
        </Screen>
    </MainLogin>
  )
}

export default Login