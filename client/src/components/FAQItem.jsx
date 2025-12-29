import { useState } from "react";

export default function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card" style={{ padding: 0, overflow: "hidden" }}>
      <button
        className="btn ghost"
        onClick={() => setOpen(v => !v)}
        style={{
          width: "100%",
          justifyContent: "space-between",
          border: "none",
          borderRadius: 0,
          padding: "16px 18px"
        }}
      >
        <span style={{ fontWeight: 700 }}>{q}</span>
        <span className="small">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div style={{ padding: "0 18px 16px 18px" }}>
          <p className="p" style={{ marginTop: 0 }}>{a}</p>
        </div>
      )}
    </div>
  );
}
