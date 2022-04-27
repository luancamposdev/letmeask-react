import { Link } from "react-router-dom";

// import { useAuth } from "../hooks/useAuth";
import Button from "../components/Button";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import "../styles/auth.scss";

export function NewRoom() {
    // const { user } = useAuth();
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
                    <h2>Criar uma nova sala</h2>

                    <form>
                        <input type="text" placeholder="Nome da sala" />
                        <Button type="submit">Criar Sala</Button>
                    </form>

                    <p>
                        Quer entrar em uma sala existente?{" "}
                        <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
