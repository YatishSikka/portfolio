import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'

const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-bracket">{'{'}</span>
          YS
          <span className="navbar__logo-bracket">{'}'}</span>
        </a>

        <ul className="navbar__links">
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <a href={`#${item.toLowerCase()}`} className="navbar__link">
                <span className="navbar__link-num">0{i + 1}.</span>
                {item}
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <a
              href="https://drive.google.com/file/d/13dkoiYwYa_tDe3V2dKobp0zrai1gp_Lk/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="navbar__resume"
            >
              Resume
            </a>
          </motion.li>
        </ul>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenuAlt4 size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul>
              {navItems.map((item, i) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>0{i + 1}.</span> {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://drive.google.com/file/d/13dkoiYwYa_tDe3V2dKobp0zrai1gp_Lk/view?usp=sharing" target="_blank" rel="noreferrer" className="navbar__resume">
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 100;
          padding: 0 clamp(24px, 5vw, 60px);
          height: 72px;
          display: flex;
          align-items: center;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          background: transparent;
        }
        .navbar--scrolled {
          background: rgba(10, 10, 11, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .navbar__inner {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar__logo {
          font-family: var(--font-mono);
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text);
          letter-spacing: -0.5px;
        }
        .navbar__logo-bracket {
          color: var(--accent);
          font-weight: 400;
        }
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }
        .navbar__link {
          font-size: 0.875rem;
          color: var(--text-secondary);
          transition: color 0.2s;
          font-weight: 400;
        }
        .navbar__link:hover { color: var(--accent-light); }
        .navbar__link-num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent);
          margin-right: 4px;
        }
        .navbar__resume {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          padding: 8px 20px;
          border: 1px solid var(--accent);
          border-radius: 6px;
          color: var(--accent-light);
          transition: all 0.2s;
        }
        .navbar__resume:hover {
          background: var(--accent-glow);
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .navbar__toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text);
          cursor: pointer;
          padding: 4px;
        }
        .navbar__mobile {
          position: fixed;
          top: 0;
          right: 0;
          width: 280px;
          height: 100vh;
          background: var(--bg-secondary);
          border-left: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99;
        }
        .navbar__mobile ul {
          display: flex;
          flex-direction: column;
          gap: 28px;
          text-align: center;
        }
        .navbar__mobile a {
          font-size: 1.1rem;
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .navbar__mobile a:hover { color: var(--accent-light); }
        .navbar__mobile span {
          font-family: var(--font-mono);
          color: var(--accent);
          font-size: 0.85rem;
          display: block;
          margin-bottom: 4px;
        }
        @media (max-width: 768px) {
          .navbar__links { display: none; }
          .navbar__toggle { display: block; }
        }
      `}</style>
    </motion.nav>
  )
}
