import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/marlisonmourao.png" 
          alt="photo user" 
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Marlison Mourão</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}