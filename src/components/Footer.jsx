export default function Footer() {
  return (
    <footer className="footer">
      <p>Designed & Built by Yatish Sikka</p>
      <style>{`
        .footer {
          text-align: center;
          padding: 32px 24px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border);
        }
      `}</style>
    </footer>
  )
}
