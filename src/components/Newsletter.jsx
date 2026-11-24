import { useState } from 'react'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <section className="newsletter">
      <div className="container newsletter__inner">
        <div>
          <h2>Recevez nos nouveautés et bons plans</h2>
          <p>Nouvelles saveurs, promotions et points de vente : directement dans votre boîte mail.</p>
        </div>

        {sent ? (
          <p className="newsletter__success">Merci ! Vous êtes bien inscrit(e). 🎉</p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Adresse e-mail"
            />
            <button type="submit" className="btn btn-accent">
              S'inscrire
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
