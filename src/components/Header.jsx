import { useEffect, useState } from 'react'
import './Header.css'

const NAV_LINKS = [
  { href: '#produits', label: 'Nos produits' },
  { href: '#bienfaits', label: 'Bienfaits' },
  { href: '#histoire', label: 'Notre histoire' },
  { href: '#points-de-vente', label: 'Où nous trouver' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <img className="logo__mark" src="/logo.svg" alt="" aria-hidden="true" />
          Super Déguè de Djéni
        </a>

        <nav className={`main-nav ${open ? 'is-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#points-de-vente" className="btn btn-accent nav-cta" onClick={() => setOpen(false)}>
            Où acheter ?
          </a>
        </nav>

        <button
          type="button"
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
