import { Container } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <row className="align-items-center">
          <col xs={12} md={6} xl={7}>
            <span className="tagline">Bem vindo ao meu Portifolio</span>
            <h1>
              {`Olá eu sou uma Desenvolvedora Web`}
              <span className="wrap">Front-end Developer</span>
            </h1>
          </col>
        </row>
      </Container>
    </section>
  );
};
