import imagenlogo from "../../assets/imagen-logo.png"
import logo from "../../assets/logo.png"
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

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
                            <a className="barramenu-container__lista__a" href="">INICIO</a></li>
                        <li className="barramenu-container__lista">
                            <a className="barramenu-container__lista__a" href="">QUIENES SOMOS</a></li>
                        <li className="barramenu-container__lista">
                            <a className="barramenu-container__lista__a" href="">DONDE ESTAMOS</a></li>
                        <li className="barramenu-container__lista">
                            <a className="barramenu-container__lista__a" href="">DEJANOS TU OPINION</a></li>
                    </ul>
                </div>
            </nav>
            <CartWidget />
        </header>
    )
}

export default Navbar