import { useHistory } from 'react-router-dom'

import Illustration from '../assets/images/Illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button';

import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';


export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth()

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }
    history.push('/rooms/new')
  }

  return (
    <div id="page-auth">
      <aside>

        <img src={Illustration} alt="Illustration" />
        <strong>Cria sala de Q&A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>

      </aside>
      <main>

        <div className="main-content">
          <img src={logoImg} alt="letmeask" />

          <button onClick={handleCreateRoom} className="create-roon">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="serarator">ou entre em uma sala</div>

          <form>
            <input
              type="text"
              placeholder="Digite o Código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>

        </div>
      </main>
    </div>
  );
}
