import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import profileImg from '../assets/profile.jpeg'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background gradient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__grid-bg" />

      <motion.div
        className="hero__container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="hero__content">
          <motion.p className="hero__greeting" variants={item}>
            Hi, I'm
          </motion.p>

          <motion.h1 className="hero__name" variants={item}>
            Yatish Sikka
          </motion.h1>

          <motion.p className="hero__tagline" variants={item}>
            I turn messy data and raw models into{' '}
            <span className="hero__gradient-text">AI that ships</span>.
          </motion.p>

          <motion.p className="hero__description" variants={item}>
            Machine Learning Engineer pursuing an M.S. in Applied Machine Learning at the
            University of Maryland, College Park. I work across the full ML stack —
            from research and experimentation to production-ready deployment.
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <a href="#projects" className="hero__btn hero__btn--primary">
              View Projects
              <FiArrowDown className="hero__btn-icon" />
            </a>
            <a href="#contact" className="hero__btn hero__btn--outline">
              Get in Touch
            </a>
          </motion.div>

          <motion.div className="hero__socials" variants={item}>
            <a href="https://github.com/YatishSikka" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/yatish-sikka-4b8197219" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="mailto:yatish.sikka96@gmail.com" aria-label="Email"><FiMail /></a>
          </motion.div>
        </div>

        <motion.div
          className="hero__image-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__image-container">
            <img src={profileImg} alt="Yatish Sikka" className="hero__image" />
            <div className="hero__image-ring" />
            <div className="hero__image-glow" />
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 100px clamp(24px, 5vw, 60px) 60px;
          position: relative;
          overflow: hidden;
        }
        .hero__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }
        .hero__orb--1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
          top: -200px;
          right: -100px;
        }
        .hero__orb--2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%);
          bottom: -100px;
          left: -100px;
        }
        .hero__grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
        }
        .hero__container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 80px;
          position: relative;
          z-index: 1;
        }
        .hero__content { flex: 1; max-width: 620px; }
        .hero__greeting {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          color: var(--accent-light);
          margin-bottom: 18px;
        }
        .hero__name {
          font-size: clamp(3rem, 7vw, 4.5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: 16px;
          background: linear-gradient(135deg, var(--text) 0%, var(--text-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero__tagline {
          font-size: clamp(1.1rem, 2.5vw, 1.35rem);
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 12px;
          font-weight: 400;
        }
        .hero__gradient-text {
          background: linear-gradient(135deg, var(--accent-light), var(--cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
        }
        .hero__description {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 500px;
        }
        .hero__actions {
          display: flex;
          gap: 14px;
          margin-bottom: 36px;
        }
        .hero__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: pointer;
        }
        .hero__btn--primary {
          background: var(--accent);
          color: white;
          box-shadow: 0 4px 20px rgba(99,102,241,0.3);
        }
        .hero__btn--primary:hover {
          background: var(--accent-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(99,102,241,0.4);
        }
        .hero__btn-icon { transition: transform 0.2s; }
        .hero__btn--primary:hover .hero__btn-icon { transform: translateY(2px); }
        .hero__btn--outline {
          border: 1px solid var(--border);
          color: var(--text-secondary);
          background: transparent;
        }
        .hero__btn--outline:hover {
          border-color: var(--accent);
          color: var(--accent-light);
          background: var(--accent-glow);
        }
        .hero__socials {
          display: flex;
          gap: 16px;
        }
        .hero__socials a {
          color: var(--text-muted);
          font-size: 1.15rem;
          transition: all 0.2s;
          padding: 8px;
          border-radius: 8px;
        }
        .hero__socials a:hover {
          color: var(--accent-light);
          background: var(--accent-glow);
        }
        .hero__image-wrap { flex-shrink: 0; }
        .hero__image-container {
          position: relative;
          width: 300px;
          height: 360px;
        }
        .hero__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          border-radius: 20px;
          position: relative;
          z-index: 2;
          border: 2px solid var(--border);
        }
        .hero__image-ring {
          position: absolute;
          inset: -8px;
          border-radius: 24px;
          border: 1px solid var(--accent-glow-strong);
          z-index: 1;
        }
        .hero__image-glow {
          position: absolute;
          inset: -30px;
          border-radius: 40px;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
          z-index: 0;
        }
        @media (max-width: 900px) {
          .hero__container {
            flex-direction: column-reverse;
            text-align: center;
            gap: 40px;
          }
          .hero__content { max-width: 100%; }
          .hero__description { margin: 0 auto 32px; }
          .hero__actions { justify-content: center; }
          .hero__socials { justify-content: center; }
          .hero__image-container { width: 220px; height: 270px; }
        }
        @media (max-width: 480px) {
          .hero__actions { flex-direction: column; align-items: center; }
          .hero__btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
