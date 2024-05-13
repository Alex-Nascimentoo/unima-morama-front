import { Container, Icon, PageHeader } from '../../styles/Global';
import { ListHeader, ListContent } from '../../styles/pages/contactDashboard';
import { Button } from '../../styles/components';
import { Link } from 'react-router-dom';
import { ContactCard } from '../../styles/components/contactCard';

export default function ContactDashboard() {
  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Contatos</h1>

          <Link
            to='/contact/create'
          >
            <Button>
              Adicionar
            </Button>
          </Link>
        </PageHeader>

        <section>
          <ListHeader>
            <h2 id='company-name'>Nome Fantasia</h2>
            <h2>CNPJ/CPF</h2>
            <h2>Opções</h2>
          </ListHeader>

          <ListContent>
            <ContactCard>
              <p>John Doe's Company</p>

              <p>00.000.000/0000-00</p>

              <div>
                <Link to='/contact/edit/1'>
                  <Icon
                    $src='/icon-pencil.svg'
                    $size='1.6rem'
                  />
                </Link>

                <Icon
                  $src='/icon-trash.svg'
                  $size='1.6rem'
                />
              </div>
            </ContactCard>
            
            <ContactCard>
              <p>John Doe's Company</p>

              <p>00.000.000/0000-00</p>

              <div>
                <Link to='/contact/edit/2'>
                  <Icon
                    $src='/icon-pencil.svg'
                    $size='1.6rem'
                  />
                </Link>

                <Icon
                  $src='/icon-trash.svg'
                  $size='1.6rem'
                />
              </div>
            </ContactCard>
          </ListContent>
        </section>
      </Container>
    </main>
  );
}
