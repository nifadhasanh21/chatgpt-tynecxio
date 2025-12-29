export default function PackageCard({ name, tagline, includes, timeline, price, buttonText, badge }) {
  return (
    <div className="card lift">
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:12 }}>
        <div>
          <div style={{ fontWeight: 900 }}>{name}</div>
          <div className="small">{tagline}</div>
        </div>
        {badge && <span className="badge">{badge}</span>}
      </div>

      <ul className="list" style={{ marginTop: 12 }}>
        {includes.map((x, i) => <li key={i}>{x}</li>)}
      </ul>

      <div className="hr"></div>
      <div className="small"><b>Timeline:</b> {timeline}</div>
      <div className="small" style={{ marginTop: 6 }}><b>Price:</b> {price}</div>

      <a className="btn primary" href="#contact" style={{ marginTop: 14, width: "100%" }}>
        {buttonText}
      </a>
    </div>
  );
}
