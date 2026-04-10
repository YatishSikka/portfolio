import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from './useInView'

const jobs = [
  {
    company: 'UMD',
    title: 'Graduate Research Assistant',
    fullCompany: 'University of Maryland',
    date: 'Mar 2025 — May 2025',
    location: 'College Park, MD',
    points: [
      'Designed and executed LLM-based extraction pipeline, reducing manual effort by 90% and enabling analysis across 50 states and millions of job postings',
      'Developed custom evaluation framework achieving 95%+ precision on structured field extraction across 10+ job posting formats',
      'Implemented embedding-based classification methods for occupation and region-level salary trend analysis',
      'Presented technical findings to research stakeholders, translating complex ML methodologies for non-technical policy audiences',
    ],
  },
  {
    company: 'Accelerize360',
    title: 'Software Developer Intern',
    fullCompany: 'Accelerize360',
    date: 'Jan 2024 — Jul 2024',
    location: 'Hyderabad, India',
    points: [
      'Partnered with 5+ enterprise clients to design and implement custom Salesforce CRM solutions, reducing manual workflows by 30%',
      'Integrated Salesforce Data Cloud features into internal dashboards, improving data accuracy for sales/marketing teams',
      'Designed data preprocessing pipelines for ML projects, boosting model performance by 25%',
      'Collaborated with cross-functional teams to deliver scalable solutions meeting client-specific requirements',
    ],
  },
  {
    company: 'EY',
    title: 'Machine Learning Intern',
    fullCompany: 'Ernst and Young',
    date: 'May 2023 — Jul 2023',
    location: 'Gurugram, India',
    points: [
      'Contributed to data cleansing workflows for production ML solutions in EY\'s Business Consulting PI platform',
      'Automated data preprocessing workflows in Python (pandas), reducing manual cleaning effort by 40% for financial ML datasets',
      'Implemented and deployed scalable preprocessing scripts in production environments with cross-functional teams',
    ],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView(0.15)

  return (
    <section className="experience" id="experience" ref={ref}>
      <div className="experience__container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-num">02.</span> Experience
            <span className="section-line" />
          </h2>
        </motion.div>

        <motion.div
          className="experience__content"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="experience__tabs">
            {jobs.map((job, i) => (
              <button
                key={i}
                className={`experience__tab ${active === i ? 'experience__tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                {job.company}
              </button>
            ))}
            <div
              className="experience__tab-indicator"
              style={{ transform: `translateY(${active * 48}px)` }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="experience__panel"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="experience__title">
                {jobs[active].title}
                <span className="experience__company"> @ {jobs[active].fullCompany}</span>
              </h3>
              <p className="experience__meta">
                {jobs[active].date} &middot; {jobs[active].location}
              </p>
              <ul className="experience__points">
                {jobs[active].points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .experience {
          padding: 120px clamp(24px, 5vw, 60px);
        }
        .experience__container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .experience__content {
          display: flex;
          gap: 48px;
        }
        .experience__tabs {
          display: flex;
          flex-direction: column;
          position: relative;
          min-width: 160px;
        }
        .experience__tab {
          background: none;
          border: none;
          border-left: 2px solid var(--border);
          padding: 12px 20px;
          font-size: 0.88rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          cursor: pointer;
          text-align: left;
          transition: all 0.2s;
          height: 48px;
          white-space: nowrap;
        }
        .experience__tab:hover {
          color: var(--accent-light);
          background: var(--accent-glow);
        }
        .experience__tab--active {
          color: var(--accent-light);
        }
        .experience__tab-indicator {
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 48px;
          background: var(--accent);
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          border-radius: 2px;
          box-shadow: 0 0 12px var(--accent-glow-strong);
        }
        .experience__panel {
          flex: 1;
        }
        .experience__title {
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .experience__company {
          color: var(--accent-light);
          font-weight: 500;
        }
        .experience__meta {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }
        .experience__points li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 14px;
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.65;
        }
        .experience__points li::before {
          content: '>';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-family: var(--font-mono);
          font-weight: 700;
        }
        @media (max-width: 768px) {
          .experience__content {
            flex-direction: column;
            gap: 24px;
          }
          .experience__tabs {
            flex-direction: row;
            overflow-x: auto;
            min-width: auto;
          }
          .experience__tab {
            border-left: none;
            border-bottom: 2px solid var(--border);
          }
          .experience__tab--active {
            border-bottom-color: var(--accent);
          }
          .experience__tab-indicator { display: none; }
        }
      `}</style>
    </section>
  )
}
