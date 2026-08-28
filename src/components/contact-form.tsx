"use client";

import { useRef, useState } from "react";

export function ContactForm() {
  const formStartedAt = useRef(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity() || status === "sending") return;

    const siteToken = process.env.NEXT_PUBLIC_STUDIO_SITE_TOKEN;
    if (!siteToken) {
      setStatus("error");
      return;
    }

    const data = new FormData(form);
    const fields = Object.fromEntries(data.entries());
    const honeypot = String(data.get("website") || "");
    setStatus("sending");

    try {
      const response = await fetch("https://studio.atondix.de/api/collect/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          siteToken,
          fields,
          honeypot,
          formStartedAt: formStartedAt.current || Date.now(),
          path: window.location.pathname,
          url: window.location.href,
          referrer: document.referrer,
          consent: "pending",
        }),
      });
      if (!response.ok) throw new Error(`Form submission failed (${response.status})`);
      form.reset();
      formStartedAt.current = 0;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="content-width contact-form"
      onFocusCapture={() => { formStartedAt.current ||= Date.now(); }}
      onSubmit={submit}
    >
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label>Name<input type="text" name="name" maxLength={255} autoComplete="name" required /></label>
      <div className="contact-form__row">
        <label>E-Mail-Adresse<input type="email" name="email" maxLength={255} autoComplete="email" required /></label>
        <label>Telefonnummer (optional)<input type="tel" name="phone" maxLength={120} autoComplete="tel" /></label>
      </div>
      <label>Betreff<input type="text" name="subject" maxLength={255} required /></label>
      <label>Deine Nachricht<textarea name="message" rows={7} maxLength={2000} required /></label>
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Wird gesendet …" : "Senden"}
      </button>
      <p aria-live="polite" role={status === "error" ? "alert" : undefined}>
        {status === "sent" ? "Vielen Dank! Deine Nachricht wurde gesendet." : null}
        {status === "error" ? <>Das hat leider nicht geklappt. Schreibe bitte an <a href="mailto:irinashevtsova74@gmail.com">irinashevtsova74@gmail.com</a>.</> : null}
      </p>
    </form>
  );
}
