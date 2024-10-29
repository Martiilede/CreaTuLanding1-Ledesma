import imagenlogo from "../../assets/imagen-logo.png"
import logo from "../../assets/logo.png"
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <header>
            <section className="imagen-logo">
                <img src={imagenlogo} alt="imagen del logo"></img>
            </section>
            <section className="logo">
                <img src={logo} alt="Logo"></img>
            </section>
            <nav className="navbar">
                <div>
                    <ul className="barramenu-container">
                     <li className="barramenu-container__lista"> 
                            <Link to="/" className="barramenu-container__lista__a">Inicio</Link>
                        </li>
                        <li className="barramenu-container__lista">
                            <Link to="/category/pizzas" className="barramenu-container__lista__a">PIZZAS</Link>
                            </li>
                        <li className="barramenu-container__lista">
                            <Link to="/category/empanadas" className="barramenu-container__lista__a">EMPANADAS</Link>
                            </li>
                        <li className="barramenu-container__lista">
                            <Link to="/quienes-somos"className="barramenu-container__lista__a">QUIENES SOMOS</Link></li>
                    </ul>
                </div>
            </nav>
            <CartWidget />
            
        </header>
    )
}

export default Navbar