import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

import { useAuth } from '../../hooks/auth'

export function Header() {
  const { signOut } = useAuth()

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/marlisonmourao.png" alt="photo user" />

        <div>
          <span>Bem-vindo</span>
          <strong>Marlison Mourão</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
