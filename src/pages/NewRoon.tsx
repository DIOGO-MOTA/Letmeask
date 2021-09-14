import { Link } from 'react-router-dom'
import Illustration from '../assets/images/Illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { useAuth } from '../hooks/useAuth';

import { Button } from '../components/Button';

import '../styles/auth.scss';


export function NewRoon() {

  async function handleCreateRoon () {

  }

//  const {} = useAuth()

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

          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoon}>
            <input 
               type="text" 
               placeholder="Nome da sala" 
               />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
         <p>
           Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
         </p>
        </div>
      </main>
    </div>
  );
}
