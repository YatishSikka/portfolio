import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'
import { useInView } from './useInView'

const featured = [
  {
    title: 'Voice-Ops Agent — Voice-Native Automation Assistant',
    description: 'Voice-controlled Telegram assistant that turns a spoken message into a spoken reply in roughly 2 seconds end-to-end, chaining Groq Whisper, Llama 3.3 70B, and Orpheus TTS. Tools are discovered at runtime rather than hardcoded — any n8n workflow tagged agent-tool is read over the n8n API and exposed as a callable LLM tool, so new capabilities ship as workflows instead of code. Currently manages a Google Calendar, confirming irreversible actions out loud and running slow jobs in the background to report back as a voice note.',
    tech: ['Voice AI', 'n8n', 'Groq', 'Llama 3.3 70B', 'FastAPI', 'Telegram Bot API'],
    github: 'https://github.com/YatishSikka/voice-ops-agent',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
  },
  {
    title: 'ShieldAI — LLM Safety Gateway',
    description: 'OpenAI-compatible end-to-end safety framework routing all LLM traffic through a multi-stage pipeline with input/output guardrails, PII redaction, and policy enforcement. Fine-tuned a DeBERTa safety classifier on 10K+ samples achieving 94% F1 on jailbreak and prompt injection detection with under 50ms latency overhead. Built an automated red team framework with 30+ adversarial payloads, reducing attack success rate from 35% to under 5%.',
    tech: ['LLM Safety', 'DeBERTa', 'Guardrails', 'PII Redaction', 'FastAPI', 'Red Teaming'],
    github: 'https://github.com/YatishSikka/ShieldAI',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #6366f1 100%)',
  },
  {
    title: 'ComplaintIQ — Agentic Complaint Intelligence',
    description: 'Multi-agent AI platform with 6 collaborative LangGraph agents that transform raw consumer complaints into structured intelligence — automating intake classification, root cause analysis, compliance risk detection, and resolution planning. Semantic search via ChromaDB and sentence-transformers for cross-complaint pattern detection; automated regulatory risk flagging across 4+ frameworks (Reg Z, UDAAP, FCRA, ECOA).',
    tech: ['LangGraph', 'Multi-Agent', 'ChromaDB', 'FastAPI', 'React', 'Docker'],
    github: 'https://github.com/YatishSikka/ComplaintIQ',
    demo: 'https://yatishsikka-complaintiq.hf.space',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #06b6d4 100%)',
  },
  {
    title: 'Identity-Preserving Story Visualization',
    description: 'Developing an identity conditioning module for diffusion-based story generation, integrating IP-Adapter\'s decoupled cross-attention into StoryDiffusion to reduce character identity drift. Benchmarking CLIP, DINOv2, and InsightFace encoders on PororoSV (10K+ stories).',
    tech: ['Generative AI', 'PyTorch', 'Diffusion Models', 'Computer Vision'],
    github: 'https://github.com/YatishSikka/MSML612-Project',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  },
  {
    title: 'Market Monitor System',
    description: 'Production-grade agentic AI system for financial market intelligence processing news, policy documents, and SEC filings. Achieved 87% decision correctness through data-centric iteration, improving reliability by 45% without changing the underlying LLM.',
    tech: ['Agentic AI', 'Vector DB', 'Docker', 'CI/CD', 'AWS'],
    github: 'https://github.com/YatishSikka/agentic-ai-data-project',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
  },
  {
    title: 'FinSight — Financial Document Intelligence',
    description: 'Multimodal AI platform analyzing financial document images (10-K filings, balance sheets) via Gemini 2.5 Flash. Features Q&A, filing comparison, and a financial ratio engine computing 9 metrics with color-coded dashboards. Deployed on HuggingFace Spaces.',
    tech: ['Multimodal LLMs', 'FastAPI', 'Streamlit', 'Docker'],
    demo: 'https://yatishsikka-finsight.hf.space',
    gradient: 'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)',
  },
]

const other = [
  {
    title: 'FloodVision',
    description: 'Deep learning system for all-weather flood detection combining SAR and optical imagery. Achieved 29x performance improvement under adverse conditions with synthetic cloud augmentation.',
    tech: ['Deep Learning', 'CV', 'HPC'],
    github: 'https://github.com/YatishUMD/FloodVision',
  },
  {
    title: 'EchoQA',
    description: 'Production-grade RAG system using FAISS and LangChain for real-time Q&A from multiple news sources. Reduced hallucinations by 35% through prompt optimization.',
    tech: ['RAG', 'FAISS', 'LangChain'],
    github: 'https://github.com/YatishSikka/News_research_tool',
  },
  {
    title: 'Federated Learning for AVs',
    description: 'Containerized FL system with YOLOv9 and Flower framework. Boosted mAP by 6-9% and cut AWS instance launch time from ~10 min to under 1 min.',
    tech: ['MLOps', 'YOLOv9', 'AWS'],
    github: 'https://github.com/YatishSikka/Containerized-Federated-Learning-for-Autonomous-Driving-Utilizing-MLOps',
  },
  {
    title: 'StackOverflow Auto-Responder',
    description: 'GPT-4 powered agent using LangChain and SerpAPI to autonomously generate context-aware coding solutions. Improved accuracy by 40%.',
    tech: ['Agentic AI', 'LangChain', 'GPT-4'],
    github: 'https://github.com/YatishSikka/stackoverflow_agent',
  },
  {
    title: 'Optimized Q&A with Mistral-7B',
    description: 'Full finetuning lifecycle using LoRA/PEFT. Reduced inference latency by 3x and GPU memory by 80% via AutoGPTQ quantization.',
    tech: ['LLMs', 'LoRA', 'Quantization'],
    github: 'https://github.com/YatishSikka/quantized_llm_qa',
  },
  {
    title: 'SumScribe',
    description: 'End-to-end video summarization using LLaMA 2-7B-32K and Whisper. Transforms videos into text summaries in under 30 seconds.',
    tech: ['LLMs', 'Whisper', 'Haystack'],
    github: 'https://github.com/YatishSikka/yt_video_summarizer',
  },
]

export default function Projects() {
  const [ref, inView] = useInView(0.1)

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects__container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-num">03.</span> Projects
            <span className="section-line" />
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="projects__featured">
          {featured.map((p, i) => (
            <motion.article
              key={i}
              className="project-featured"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            >
              <div className="project-featured__accent" style={{ background: p.gradient }} />
              <div className="project-featured__content">
                <div className="project-featured__header">
                  <div>
                    <p className="project-featured__label">Featured Project</p>
                    <h3 className="project-featured__title">{p.title}</h3>
                  </div>
                  <div className="project-featured__links">
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live Demo">
                        <FiExternalLink size={18} />
                      </a>
                    )}
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <FiGithub size={18} />
                    </a>
                  </div>
                </div>
                <p className="project-featured__desc">{p.description}</p>
                <div className="project-featured__footer">
                  <ul className="project-featured__tech">
                    {p.tech.map(t => <li key={t}>{t}</li>)}
                  </ul>
                  {p.status && <span className="project-featured__status">{p.status}</span>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          className="projects__other-title"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Other Noteworthy Projects
        </motion.h3>

        <div className="projects__grid">
          {other.map((p, i) => (
            <motion.article
              key={i}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
            >
              <div className="project-card__header">
                <FiFolder className="project-card__icon" />
                <a href={p.github} target="_blank" rel="noreferrer" className="project-card__link" aria-label="GitHub">
                  <FiGithub size={18} />
                </a>
              </div>
              <h4 className="project-card__title">{p.title}</h4>
              <p className="project-card__desc">{p.description}</p>
              <ul className="project-card__tech">
                {p.tech.map(t => <li key={t}>{t}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .projects {
          padding: 120px clamp(24px, 5vw, 60px);
        }
        .projects__container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .projects__featured {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 72px;
        }
        .project-featured {
          position: relative;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .project-featured:hover {
          border-color: var(--border-hover);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .project-featured__accent {
          height: 3px;
          width: 100%;
        }
        .project-featured__content {
          padding: 32px 36px;
        }
        .project-featured__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .project-featured__label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-light);
          margin-bottom: 6px;
        }
        .project-featured__title {
          font-size: 1.35rem;
          font-weight: 700;
        }
        .project-featured__links {
          display: flex;
          gap: 4px;
          flex-shrink: 0;
        }
        .project-featured__links a {
          color: var(--text-muted);
          transition: color 0.2s;
          padding: 6px;
          border-radius: 6px;
        }
        .project-featured__links a:hover { color: var(--accent-light); }
        .project-featured__desc {
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .project-featured__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .project-featured__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .project-featured__tech li {
          font-family: var(--font-mono);
          font-size: 0.73rem;
          color: var(--text-muted);
          background: var(--surface);
          padding: 4px 12px;
          border-radius: 6px;
          border: 1px solid var(--border);
        }
        .project-featured__status {
          font-family: var(--font-mono);
          font-size: 0.73rem;
          color: var(--green);
          background: rgba(34,197,94,0.08);
          border: 1px solid rgba(34,197,94,0.2);
          padding: 4px 12px;
          border-radius: 100px;
        }
        .projects__other-title {
          text-align: center;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 36px;
          color: var(--text);
        }
        .projects__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 18px;
        }
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(99,102,241,0.3);
          box-shadow: 0 15px 40px rgba(0,0,0,0.25);
        }
        .project-card__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .project-card__icon {
          color: var(--accent);
          font-size: 2rem;
        }
        .project-card__link {
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .project-card__link:hover { color: var(--accent-light); }
        .project-card__title {
          font-size: 1.08rem;
          font-weight: 600;
          margin-bottom: 10px;
          transition: color 0.2s;
        }
        .project-card:hover .project-card__title { color: var(--accent-light); }
        .project-card__desc {
          color: var(--text-secondary);
          font-size: 0.88rem;
          line-height: 1.65;
          flex-grow: 1;
          margin-bottom: 20px;
        }
        .project-card__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .project-card__tech li {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
        }
        .project-card__tech li:not(:last-child)::after {
          content: ' · ';
          margin-left: 8px;
        }
        @media (max-width: 768px) {
          .projects__grid { grid-template-columns: 1fr; }
          .project-featured__content { padding: 24px; }
        }
      `}</style>
    </section>
  )
}
