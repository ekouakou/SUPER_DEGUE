import useReveal from '../hooks/useReveal'
import './Benefits.css'

const BENEFITS = [
  {
    icon: '🌾',
    title: 'Mil local & artisans',
    desc: 'Nous travaillons main dans la main avec des producteurs de mil de Côte d\'Ivoire.',
  },
  {
    icon: '🦠',
    title: 'Probiotiques naturels',
    desc: 'La fermentation lactique soutient une flore intestinale équilibrée.',
  },
  {
    icon: '🦴',
    title: 'Calcium & protéines',
    desc: 'Un encas qui participe à la santé des os et au renouvellement musculaire.',
  },
  {
    icon: '🌿',
    title: 'Sans conservateur',
    desc: 'Des ingrédients simples, une recette courte, rien à cacher.',
  },
]

function Benefits() {
  const [ref, visible] = useReveal()

  return (
    <section id="bienfaits" className="section benefits">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pourquoi Super Déguè de Djéni ?</span>
          <h2>Bon pour vous, bon pour le terroir</h2>
          <p>
            Le dégué est une recette traditionnelle ouest-africaine. Chez Super Déguè de
            Djéni, on la sublime sans jamais trahir ses bienfaits.
          </p>
        </div>

        <div ref={ref} className={`benefits__grid reveal-group ${visible ? 'is-visible' : ''}`}>
          {BENEFITS.map((b) => (
            <div className="benefit-card" key={b.title}>
              <span className="benefit-card__icon">{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
