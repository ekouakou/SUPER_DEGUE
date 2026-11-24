import useReveal from '../hooks/useReveal'
import './Story.css'

function Story() {
  const [ref, visible] = useReveal()

  return (
    <section id="histoire" className="section story">
      <div ref={ref} className={`container story__inner reveal-group ${visible ? 'is-visible' : ''}`}>
        <div className="story__visual">
          <img
            className="story__image"
            src="/images/story-illustration.svg"
            alt="Bol de dégué crémeux avec lait frais et mil pilé"
          />
        </div>

        <div className="story__text">
          <span className="eyebrow">Notre histoire</span>
          <h2>De la cour familiale aux rayons des supermarchés</h2>
          <p>
            Super Déguè de Djéni est né d'une recette transmise de mère en fille : le dégué que l'on
            préparait en famille, à la main, pour les grandes occasions. Nous avons voulu
            rendre ce plaisir accessible tous les jours, sans jamais perdre le geste
            artisanal qui fait sa richesse.
          </p>
          <p>
            Depuis notre atelier à Abidjan, nous travaillons avec des coopératives locales
            de producteurs de mil et des fermes laitières partenaires, pour une chaîne
            courte, du champ au pot.
          </p>

          <ul className="story__timeline">
            <li>
              <strong>2019</strong>
              <span>Première recette testée en cuisine familiale</span>
            </li>
            <li>
              <strong>2021</strong>
              <span>Lancement de l'atelier artisanal à Abidjan</span>
            </li>
            <li>
              <strong>2024</strong>
              <span>Super Déguè de Djéni disponible dans plus de 50 points de vente</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Story
