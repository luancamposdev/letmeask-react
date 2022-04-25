import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

export function Home() {
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
                    <button>
                        <img src={googleIconImg} alt="Log0o do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div>Ou entre em uma sala</div>

                    <form>
                        <input
                            type="text"
                            placeholder="Digiete o código da sala"
                        />
                        <button type="submit">Entrar na Sala</button>
                    </form>
                </div>
            </main>
        </div>
    );
}
