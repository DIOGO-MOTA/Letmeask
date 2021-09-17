import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth  } from '../hooks/useAuth';


import Illustration from '../assets/images/Illustration.svg'
import logoImg from '../assets/images/logo.svg'


import { Button } from '../components/Button';

import '../styles/auth.scss';
import { database } from '../services/firebase';


export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoon (event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === ''){
      return;
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`${firebaseRoom.key}`)
    
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

          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoon}>
            <input 
               type="text" 
               placeholder="Nome da sala" 
               onChange={event => setNewRoom(event.target.value)}
               value={newRoom}
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
