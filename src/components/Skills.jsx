import { motion } from 'framer-motion'
import { useInView } from './useInView'

const categories = [
  {
    title: 'Languages',
    icon: '{ }',
    items: ['Python', 'Java/Apex', 'C/C++', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'ML Frameworks',
    icon: '>>',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'LangChain', 'Transformers', 'PEFT', 'Flower', 'NumPy', 'Pandas'],
  },
  {
    title: 'ML Specializations',
    icon: 'AI',
    items: ['LLM Finetuning (LoRA)', 'Model Quantization', 'RAG Systems', 'Prompt Engineering', 'Model Evaluation', 'Federated Learning', 'Computer Vision', 'Agentic AI'],
  },
  {
    title: 'Platforms & Tools',
    icon: '>>',
    items: ['Docker', 'Kubernetes', 'AWS', 'Linux', 'Git/GitHub', 'Hugging Face', 'MongoDB', 'BigQuery', 'Salesforce'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView(0.15)

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills__container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-num">04.</span> Skills & Tools
            <span className="section-line" />
          </h2>
        </motion.div>

        <div className="skills__grid">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="skills__card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="skills__card-header">
                <span className="skills__card-icon">{cat.icon}</span>
                <h3 className="skills__card-title">{cat.title}</h3>
              </div>
              <div className="skills__tags">
                {cat.items.map(item => (
                  <span key={item} className="skills__tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills {
          padding: 120px clamp(24px, 5vw, 60px);
        }
        .skills__container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .skills__card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 28px;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .skills__card:hover {
          border-color: rgba(99,102,241,0.25);
          box-shadow: 0 8px 30px rgba(99,102,241,0.06);
        }
        .skills__card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }
        .skills__card-icon {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent);
          background: var(--accent-glow);
          padding: 6px 10px;
          border-radius: 8px;
          font-weight: 600;
        }
        .skills__card-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text);
        }
        .skills__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skills__tag {
          font-size: 0.82rem;
          color: var(--text-secondary);
          background: var(--surface);
          padding: 6px 14px;
          border-radius: 8px;
          border: 1px solid var(--border);
          transition: all 0.2s;
        }
        .skills__tag:hover {
          color: var(--accent-light);
          border-color: var(--accent);
          background: var(--accent-glow);
          transform: translateY(-1px);
        }
        @media (max-width: 768px) {
          .skills__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
