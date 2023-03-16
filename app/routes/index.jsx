import style from "~/styles/index.css";
import Navbar from "../components/Navbar/Navbar";

export const links = () => {
    return [{ rel: "stylesheet", href: style }]
}

export default function Index() {
    return (
        <div className="main">
            <Navbar />
        </div>
    );
}
