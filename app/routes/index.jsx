import style from "~/styles/index.css";
import Navbar from "../components/Navbar/Navbar";

const imageArg = require("public/assets/argentina.png");

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

                    <div className="board">
                        <img className="team-icon" src={"/assets/argentina.png"}/>
                        <span>Argentina</span>
                    </div>
                </article>
            </section>

        </div>
    );
}
