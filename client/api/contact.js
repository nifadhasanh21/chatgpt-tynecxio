import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  try {
    const { name, email, service, budget, message } = req.body || {};

    // basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        message: "Please fill name, email and message."
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const toEmail = process.env.TO_EMAIL; // your inbox
    if (!toEmail) {
      return res.status(500).json({ ok: false, message: "Missing TO_EMAIL env." });
    }

    // "from" rules:
    // - Once you verify a domain, use something like: "TynecXio <hello@yourdomain.com>"
    // - For now, Resend lets you use onboarding sender in some setups
    const from = process.env.FROM_EMAIL || "TynecXio <onboarding@resend.dev>";

    const subject = `New TynecXio Inquiry — ${service || "General"} (${name})`;

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Service:</b> ${escapeHtml(service || "-")}</p>
        <p><b>Budget:</b> ${escapeHtml(budget || "-")}</p>
        <p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        <hr/>
        <p style="color:#666;font-size:12px">Sent from TynecXio website contact form.</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to: [toEmail],
      replyTo: email,
      subject,
      html
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ ok: false, message: "Email failed to send." });
    }

    return res.status(200).json({ ok: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: "Server error." });
  }
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
