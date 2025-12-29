export default function ServiceCard({ title, bullets, outcome }) {
  return (
    <div className="card lift">
      <div style={{ fontWeight: 800, marginBottom: 8 }}>{title}</div>
      <ul className="list">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <div className="small" style={{ marginTop: 12 }}>
        <b>Outcome:</b> {outcome}
      </div>
    </div>
  );
}
