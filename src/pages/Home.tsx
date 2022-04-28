import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import LoginIcon from "../assets/images/login.png";

import "../styles/auth.scss";

export function Home() {
    const navigate = useNavigate();
    const { user, signInWithGoogle } = useAuth();

    const [roomCode, setRoomCode] = useState("");

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle();
        }
        navigate("/rooms/new");
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === "") return;

        const roomRef = await database.ref(`/rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert(`Sala não existe.`);
            return;
        }

        navigate(`/rooms/${roomCode}`);
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illustration Symbol" />
                <strong>Crie sala de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas de sua audiencia em tempo real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Let-me AsK" />
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>

                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={(event) =>
                                setRoomCode(event.target.value)
                            }
                            value={roomCode}
                        />
                        <Button type="submit">
                            Entrar na Sala
                            <img src={LoginIcon} alt="Entrar na Sala" />
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}
