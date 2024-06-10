import { Icon, PageHeader } from '../../styles/Global';
import { ListContent } from '../../styles/pages/contactDashboard';
import { Button } from '../../styles/components';
import { Link } from 'react-router-dom';
import { ContactCard, Container, ListHeader } from '../../styles/pages/productsDashboard';

export default function ProductsDashboard() {
  return (
    <main>
      <Container>
        <PageHeader>
          <h1>Produtos</h1>

          <Link
            to='/products/create'
          >
            <Button>
              Adicionar
            </Button>
          </Link>
        </PageHeader>

        <section>
          <ListHeader>
            <h2 id="cod">Cód.</h2>
            <h2 id="name">Nome</h2>
            <h2>Valor</h2>
            <h2>Editar</h2>
          </ListHeader>

          <ListContent>
            <ContactCard>
              <p className="cod">00000</p>

              <p className="name">samir buarque</p>

              <p >R$ 00</p>
              

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
              <p className="cod">00000</p>

              <p className="name">samir buarque</p>

              <p>R$ 00</p>
              

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
              <p className="cod">00000</p>

              <p className="name">samir buarque</p>

              <p>R$ 00</p>
              

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
          </ListContent>
        </section>
      </Container>
    </main>
  );
}
