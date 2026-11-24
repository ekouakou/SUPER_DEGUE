import useReveal from '../hooks/useReveal'
import { asset } from '../lib/asset'
import './Products.css'

const PRODUCTS = [
  {
    name: 'Nature',
    image: asset('images/products/nature.svg'),
    desc: 'Le grand classique : lait fermenté et mil pilé, sans sucre ajouté.',
    tag: 'Best-seller',
  },
  {
    name: 'Mangue',
    image: asset('images/products/mangue.svg'),
    desc: 'Pulpe de mangue locale pour une touche solaire et gourmande.',
    tag: 'Fruité',
  },
  {
    name: 'Bissap-Fraise',
    image: asset('images/products/bissap-fraise.svg'),
    desc: "L'acidité du bissap rencontre la douceur de la fraise.",
    tag: 'Nouveauté',
  },
  {
    name: 'Vanille-Baobab',
    image: asset('images/products/vanille-baobab.svg'),
    desc: 'Pulpe de baobab et vanille de Madagascar, riche en vitamine C.',
    tag: 'Énergie',
  },
]

function Products() {
  const [ref, visible] = useReveal()

  return (
    <section id="produits" className="section products">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Notre gamme</span>
          <h2>Un dégué pour chaque envie</h2>
          <p>
            Préparés chaque jour à partir de lait frais et de mil local, nos pots sont
            fermentés avec soin pour une texture onctueuse et un goût authentique.
          </p>
        </div>

        <div ref={ref} className={`products__grid reveal-group ${visible ? 'is-visible' : ''}`}>
          {PRODUCTS.map((p) => (
            <article className="product-card" key={p.name}>
              <span className="product-card__tag">{p.tag}</span>
              <img className="product-card__image" src={p.image} alt={`Pot de dégué ${p.name}`} />
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
