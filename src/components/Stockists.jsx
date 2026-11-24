import useReveal from '../hooks/useReveal'
import './Stockists.css'

const CITIES = [
  { city: 'Abidjan', spots: 'Carrefour Riviera, Cosmos Yopougon, épiceries de quartier' },
  { city: 'Bouaké', spots: 'Marché central, supérettes locales' },
  { city: 'Yamoussoukro', spots: 'Supermarché Sococe, boutiques bio' },
  { city: 'San-Pédro', spots: 'Marché de San-Pédro, hôtels partenaires' },
]

function Stockists() {
  const [ref, visible] = useReveal()

  return (
    <section id="points-de-vente" className="section stockists">
      <div ref={ref} className={`container stockists__inner reveal-group ${visible ? 'is-visible' : ''}`}>
        <div className="stockists__text">
          <span className="eyebrow">Où nous trouver</span>
          <h2>Super Déguè de Djéni près de chez vous</h2>
          <p>
            Retrouvez notre gamme dans les grandes surfaces, épiceries et marchés
            partenaires à travers la Côte d'Ivoire. Impossible de trouver un point de vente
            près de chez vous ? Écrivez-nous, on vous aide.
          </p>

          <ul className="stockists__list">
            {CITIES.map((c) => (
              <li key={c.city}>
                <span className="stockists__dot" aria-hidden="true" />
                <div>
                  <strong>{c.city}</strong>
                  <p>{c.spots}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="stockists__card">
          <h3>Vous êtes commerçant ou distributeur ?</h3>
          <p>
            Rejoignez le réseau de points de vente Super Déguè de Djéni et proposez un
            produit local, sain et déjà plébiscité par vos clients.
          </p>
          <a href="#contact" className="btn btn-primary">
            Devenir revendeur
          </a>
        </div>
      </div>
    </section>
  )
}

export default Stockists
