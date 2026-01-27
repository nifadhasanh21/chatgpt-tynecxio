import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_vtswxoj";
const TEMPLATE_ID = "template_l3f9lo8";
const PUBLIC_KEY = "8jFqNlKh0Ha-ywcCE";

export default function ContactForm() {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setOk(false);
    setError("");

    try {
      // IMPORTANT: await + proper success handling
      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY
      });

      // EmailJS usually returns status 200 when success
      if (res?.status === 200) {
        setOk(true);
        setError("");
        formRef.current?.reset();

        // hide success after 4s (optional)
        setTimeout(() => setOk(false), 4000);
      } else {
        setOk(false);
        setError("Email failed. Please try again.");
      }
    } catch (err) {
      setOk(false);
      // err.text is common in EmailJS
      setError(err?.text || err?.message || "Email failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} className="contactForm" onSubmit={onSubmit}>
      <div className="formHeader">
        <div className="h3">Send a message</div>
        <div className="small">We reply within 24–48 hours.</div>
      </div>

      <div className="formGrid">
        <div className="field">
          <label className="label">Name *</label>
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />
        </div>

        <div className="field">
          <label className="label">Email *</label>
          <input
            className="input"
            name="email"
            type="email"
            placeholder="you@email.com"
            required
          />
        </div>

        <div className="field">
          <label className="label">Service</label>
          <select className="input" name="service" defaultValue="General / Not sure">
            <option>General / Not sure</option>
            <option>UI & UX Design</option>
            <option>Website / Web App Development</option>
            <option>E-Commerce Store</option>
            <option>Mobile App UI</option>
            <option>Brand Identity & Graphics</option>
            <option>Digital Marketing & Growth</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Budget (optional)</label>
          <select className="input" name="budget" defaultValue="$350 - $600">
            <option>$70 - $100</option>
            <option>$100 - $200</option>
            <option>$200 - $300</option>
            <option>$300 - $400</option>
            <option>$400 - $500</option>
            <option>Not sure yet</option>
          </select>
        </div>

        <div className="field full">
          <label className="label">Project details *</label>
          <textarea
            className="input textarea"
            name="message"
            placeholder="Tell us about your project..."
            required
          />
        </div>
      </div>

      <button className={`btn primary wide ${loading ? "isLoading" : ""}`} type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>

      {ok && (
        <div className="notice success">
          ✅ Message sent successfully.
        </div>
      )}

      {error && (
        <div className="notice error">
          <b>Error:</b> {error}
        </div>
      )}
    </form>
  );
}