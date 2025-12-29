import { useState } from "react";
import MagneticButton from "./MagneticButton.jsx";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "UI/UX Design",
    budget: "$350 - $600",
    message: ""
  });

  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  function update(k, v) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: "error", msg: data?.message || "Something went wrong." });
      } else {
        setStatus({ type: "success", msg: "Thanks! We received your message." });
        setForm({ name: "", email: "", service: "UI/UX Design", budget: "$350 - $600", message: "" });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="card lift" onSubmit={onSubmit}>
      <div style={{ fontWeight: 950, fontSize: 20 }}>Send a message</div>
      <p className="p">We reply within 24–48 hours.</p>

      <div className="row2" style={{ marginTop: 14 }}>
        <input
          className="input"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          required
        />
        <input
          className="input"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          type="email"
          required
        />
      </div>

      <div className="row2" style={{ marginTop: 12 }}>
        <select className="select" value={form.service} onChange={(e) => update("service", e.target.value)}>
          <option>UI/UX Design</option>
          <option>Website / Web App</option>
          <option>E-Commerce Store</option>
          <option>Mobile App UI</option>
          <option>Brand Identity</option>
          <option>Marketing & Growth</option>
        </select>

        <select className="select" value={form.budget} onChange={(e) => update("budget", e.target.value)}>
          <option>$200 - $450</option>
          <option>$350 - $600</option>
          <option>$400 - $900</option>
          <option>$500 - $1,000</option>
          <option>$1,000+</option>
        </select>
      </div>

      <textarea
        className="textarea"
        style={{ marginTop: 12 }}
        placeholder="Tell us about your project..."
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
        required
      />

      <div style={{ marginTop: 14 }}>
        <MagneticButton as="button" className="primary wide" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </MagneticButton>
      </div>

      {status.msg && (
        <div
          style={{
            marginTop: 12,
            padding: "12px 14px",
            borderRadius: 16,
            border: "1px solid var(--line)",
            background: status.type === "success" ? "rgba(34,197,94,.10)" : "rgba(239,68,68,.10)"
          }}
        >
          <b>{status.type === "success" ? "Success:" : "Error:"}</b> {status.msg}
        </div>
      )}
    </form>
  );
}
