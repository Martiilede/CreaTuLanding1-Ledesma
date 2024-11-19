
import "./Footer.css"
export const Footer = () => {
  return (
    <footer class="footer__contenido">
        <div class="footer__contenido__redes">
            <h5>Síguenos en redes sociales.</h5>
            <ul>
                <li><a class="link" href="">Facebook</a></li>
                <li><a class="link" href="">Twitter</a></li>
                <li><a class="link" href="">Instagram</a></li>
            </ul>
        </div>
        <div class="footer__logo__final">
            <img src="./src/assets/logo.png" alt="Logo de Pizzeria"/>
        </div>
        <div class="footer__textofinal">
            <p>&copy; 2024 Pizzeria a la Pizza. Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}
