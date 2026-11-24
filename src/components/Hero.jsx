import { asset } from '../lib/asset'
import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__text">
          <span className="eyebrow">100% naturel · Fabriqué en Côte d'Ivoire</span>
          <h1>
            Le dégué, <span className="hero__highlight">réinventé</span> avec amour.
          </h1>
          <p className="hero__subtitle">
            Du lait fermenté crémeux, du mil artisanal et de vrais fruits. Super Déguè de
            Djéni revisite la recette traditionnelle du dégué pour en faire un en-cas
            gourmand, sain et 100% local — du producteur à votre cuillère.
          </p>
          <div className="hero__actions">
            <a href="#produits" className="btn btn-primary">
              Découvrir la gamme
            </a>
            <a href="#points-de-vente" className="btn btn-ghost">
              Où l'acheter ?
            </a>
          </div>

          <div className="hero__stats">
            <div>
              <strong>100%</strong>
              <span>Lait & mil locaux</span>
            </div>
            <div>
              <strong>0</strong>
              <span>Conservateur</span>
            </div>
            <div>
              <strong>+50</strong>
              <span>Points de vente</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <img
            className="hero__image"
            src={asset('images/products/hero-collection.svg')}
            alt="Gamme de produits Super Déguè de Djéni"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
