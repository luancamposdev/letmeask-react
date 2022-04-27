import { useNavigate } from "react-router-dom";

import Button from "../components/Button";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

export function Home() {
    const navigate = useNavigate();
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
                    <button
                        className="create-room"
                        onClick={() => navigate("/rooms/new")}
                    >
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>

                    <form>
                        <input
                            type="text"
                            placeholder="Digiete o código da sala"
                        />
                        <Button type="submit">Entrar na Sala</Button>
                    </form>
                </div>
            </main>
        </div>
    );
}
