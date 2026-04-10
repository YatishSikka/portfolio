import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import { useInView } from './useInView'

export default function Contact() {
  const [ref, inView] = useInView(0.2)

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact__container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="contact__overline">05. What's Next?</p>
          <h2 className="contact__title">Let's Connect</h2>
          <p className="contact__text">
            I'm actively looking for full-time Machine Learning Engineer roles starting May 2026.
            Whether you have an opportunity, want to collaborate on a project, or just want to chat
            about ML — I'd love to hear from you.
          </p>
          <a href="mailto:yatish.sikka96@gmail.com" className="contact__btn">
            <FiSend />
            Say Hello
          </a>
          <div className="contact__socials">
            <a href="https://github.com/YatishSikka" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/yatish-sikka-4b8197219" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
            <a href="mailto:yatish.sikka96@gmail.com" aria-label="Email"><FiMail size={20} /></a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact {
          padding: 120px clamp(24px, 5vw, 60px);
          text-align: center;
        }
        .contact__container {
          max-width: 600px;
          margin: 0 auto;
        }
        .contact__overline {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-light);
          margin-bottom: 16px;
        }
        .contact__title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }
        .contact__text {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.75;
          margin-bottom: 36px;
        }
        .contact__btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 36px;
          background: var(--accent);
          color: white;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 4px 20px rgba(99,102,241,0.3);
        }
        .contact__btn:hover {
          background: var(--accent-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(99,102,241,0.4);
        }
        .contact__socials {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 40px;
        }
        .contact__socials a {
          color: var(--text-muted);
          padding: 10px;
          border-radius: 10px;
          transition: all 0.2s;
        }
        .contact__socials a:hover {
          color: var(--accent-light);
          background: var(--accent-glow);
        }
      `}</style>
    </section>
  )
}
