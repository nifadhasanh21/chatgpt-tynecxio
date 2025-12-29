export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        {title && <h2 className="h2">{title}</h2>}
        {subtitle && <p className="p">{subtitle}</p>}
        <div style={{ marginTop: 18 }}>{children}</div>
      </div>
    </section>
  );
}
