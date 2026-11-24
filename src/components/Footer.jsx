import { asset } from '../lib/asset'
import './Footer.css'

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="logo logo--footer">
            <img className="logo__mark" src={asset('logo.svg')} alt="" aria-hidden="true" />
            Super Déguè de Djéni
          </a>
          <p>
            Fabriqué à Abidjan avec du lait et du mil locaux. Le bon goût de la Côte
            d'Ivoire, en pot.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">
              IG
            </a>
            <a href="#" aria-label="Facebook">
              FB
            </a>
            <a href="#" aria-label="TikTok">
              TT
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#produits">Nos produits</a></li>
            <li><a href="#bienfaits">Bienfaits</a></li>
            <li><a href="#histoire">Notre histoire</a></li>
            <li><a href="#points-de-vente">Où nous trouver</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li>contact@deguedjeni.ci</li>
            <li>+225 07 00 00 00 00</li>
            <li>Zone Industrielle de Yopougon, Abidjan, Côte d'Ivoire</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Légal</h4>
          <ul>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Super Déguè de Djéni. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
