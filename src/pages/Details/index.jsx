import { Container, Links } from "./style";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

export function Details() {
  return (
    <Container>
      <Header />

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="">https://www.rocketseat.com.br/</a>
          </li>
          <li>
            <a href="">https://www.rocketseat.com.br/</a>
          </li>
        </Links>
      </Section>

      <Button title="Voltar" />
    </Container>
  );
}
