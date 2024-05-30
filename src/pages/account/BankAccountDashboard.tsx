import { Container, Icon, PageHeader } from '../../styles/Global';
import { ListContent } from '../../styles/pages/contactDashboard';
import { Button } from '../../styles/components';
import { Link } from 'react-router-dom';
import { ContactCard } from '../../styles/components/contactCard';
import { ListHeader } from '../../styles/pages/bankAccountDashboard';

export default function BankAccountDashboard() {
  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Contas bancárias</h1>

          <Link
            to='/bank_account/create'
          >
            <Button>
              Adicionar
            </Button>
          </Link>
        </PageHeader>

        <section>
          <ListHeader>
            <h2 id='account-name'>Nome</h2>
            <h2>Instituição</h2>
            <h2>Saldo</h2>
            <h2>Editar</h2>
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
