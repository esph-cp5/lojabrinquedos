import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h1>LOJA DE BRINQUEDOS</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
