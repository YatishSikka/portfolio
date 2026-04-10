import { motion } from 'framer-motion'
import { useInView } from './useInView'

const techs = [
  'Python & PyTorch',
  'LangChain & RAG',
  'LLM Finetuning (LoRA)',
  'Docker & Kubernetes',
  'AWS & MLOps',
  'Computer Vision',
]

export default function About() {
  const [ref, inView] = useInView(0.2)

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-num">01.</span> About Me
            <span className="section-line" />
          </h2>
        </motion.div>

        <motion.div
          className="about__text"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p>
            Hello! I'm Yatish — a Machine Learning Engineer who loves the messy, practical
            side of AI: getting models out of notebooks and into the hands of real users.
            I enjoy working across the whole ML spectrum, from <strong>LLMs</strong> and{' '}
            <strong>agentic systems</strong> to <strong>classical ML</strong> and{' '}
            <strong>MLOps</strong> — basically wherever an interesting problem shows up.
          </p>
          <p>
            I'm currently pursuing my <strong>M.S. in Applied Machine Learning</strong> at
            the University of Maryland, College Park, after completing my{' '}
            <strong>B.Tech in Computer Science</strong> at VIT Vellore. Along the way I've
            worked across research labs, consulting firms, and product teams, which has
            given me a well-rounded view of how ML gets built, shipped, and actually used.
          </p>
          <p>
            I care a lot about writing clean code, designing systems that handle edge
            cases gracefully, and explaining complex ideas in plain language. When I'm
            not training models, you'll find me exploring new cities, experimenting with
            side projects, or diving into the latest ML research.
          </p>

          <div className="about__tech">
            <p className="about__tech-label">A few things I work with:</p>
            <ul className="about__tech-list">
              {techs.map(t => (
                <li key={t}>
                  <span className="about__tech-arrow">&#8250;</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <style>{`
        .about {
          padding: 120px clamp(24px, 5vw, 60px);
        }
        .about__container {
          max-width: 850px;
          margin: 0 auto;
        }
        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 48px;
          white-space: nowrap;
        }
        .section-num {
          font-family: var(--font-mono);
          font-size: 1rem;
          color: var(--accent);
          font-weight: 500;
        }
        .section-line {
          display: block;
          flex: 1;
          max-width: 300px;
          height: 1px;
          background: var(--border);
        }
        .about__text p {
          color: var(--text-secondary);
          margin-bottom: 18px;
          line-height: 1.8;
          font-size: 1rem;
        }
        .about__text strong {
          color: var(--text);
          font-weight: 600;
        }
        .about__tech { margin-top: 32px; }
        .about__tech-label {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-light);
          margin-bottom: 14px;
        }
        .about__tech-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 32px;
          max-width: 500px;
        }
        .about__tech-list li {
          font-size: 0.9rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
        }
        .about__tech-arrow {
          color: var(--accent);
          font-size: 1.15rem;
          font-weight: 700;
        }
        @media (max-width: 600px) {
          .about__tech-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
