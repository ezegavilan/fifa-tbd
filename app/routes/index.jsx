import style from "~/styles/index.css";
import Navbar from "../components/Navbar/Navbar";

export const links = () => {
    return [{ rel: "stylesheet", href: style }]
}

export default function Index() {
    return (
        <div className="main">
            <Navbar />

            <section className="container">
                <article className="main-board">
                    <div className="evento-container">
                        <span className="evento-badge"><p>Marzo</p></span>
                        <span className="evento-badge"><p>Abril</p></span>
                        <div className="evento-end">
                            <span className="evento-badge xl-badge">Large Badge</span>
                        </div>
                    </div>

                    <div className="resultados-container">
                        <div className="liga">
                            <span>ICON</span>
                        </div>

                        <div className="resultados">
                            <div className="local-info">
                                <img className="team-icon" src={ "/assets/argentina.png" } alt="teams-img"/>
                                <span>Argentina</span>
                            </div>

                            <span className="score-badge">
                                <p>3</p>
                                <p>:</p>
                                <p>2</p>
                            </span>

                            <div className="visitante-info">
                                <img className="team-icon" src={ "/assets/francia.png" } alt="teams-img"/>
                                <span>Francia</span>
                            </div>
                        </div>

                    </div>
                </article>
            </section>

        </div>
    );
}
