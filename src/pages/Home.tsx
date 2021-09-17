import { useHistory } from 'react-router-dom'

import Illustration from '../assets/images/Illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button';

import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';


export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }
    history.push('/rooms/new')
  }

  async function handleJoinRoon(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()) {
      alert('Sala Não existe.');
      return;
    }

    history.push(`/rooms/${roomCode}`)

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

          <form onSubmit={handleJoinRoon}>
            <input
              type="text"
              placeholder="Digite o Código da sala"
              onChange={event => setRoomCode(event.target.value) }
              value={roomCode}
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
