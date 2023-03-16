const Navbar = () => {
    return (
        <nav>
            <h1 className="text-xl title">FIFA TBD</h1>

            <ul>
                <li>
                    <div className="nav-item">
                        <span className="fa-solid fa-futbol item-icon"></span>
                        <p>Partidos</p>
                    </div>
                </li>

                <li>
                    <div className="nav-item">
                        <span className="fa-regular fa-clock item-icon"></span>
                        <p>Recientes</p>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
