import useReveal from '../hooks/useReveal'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    name: 'Aïssatou D.',
    role: 'Cliente depuis 2022',
    quote:
      "Le goût du dégué de mon enfance, mais en pot prêt à emporter. Le parfum mangue est devenu mon petit-déjeuner du dimanche.",
  },
  {
    name: 'Moussa K.',
    role: 'Gérant d\'épicerie, Abidjan',
    quote:
      'Un produit qui tourne très vite en rayon. Mes clients apprécient la qualité constante et le fait que ce soit fabriqué localement.',
  },
  {
    name: 'Fatou S.',
    role: 'Nutritionniste',
    quote:
      "Je recommande Super Déguè de Djéni à mes patients pour un encas riche en calcium et en probiotiques, sans sucres ajoutés inutiles.",
  },
]

function Testimonials() {
  const [ref, visible] = useReveal()

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Ils aiment Super Déguè de Djéni</span>
          <h2>La confiance de nos clients</h2>
        </div>

        <div ref={ref} className={`testimonials__grid reveal-group ${visible ? 'is-visible' : ''}`}>
          {TESTIMONIALS.map((t) => (
            <figure className="testimonial-card" key={t.name}>
              <div className="testimonial-card__stars" aria-hidden="true">
                ★★★★★
              </div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
