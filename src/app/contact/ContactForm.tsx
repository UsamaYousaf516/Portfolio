'use client';

import { useState } from 'react';
import s from './contact.module.css';

// TODO(usama): connect a form service (e.g. Formspree) or an API route — submitting only shows the confirmation for now.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className={s.form}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {sent ? (
        <div className={s.sent} role="status">
          <span className={s.sentIco}>✓</span>
          <h2 className={s.sentTitle}>Thanks — message received.</h2>
          <p className={s.formNote}>I&apos;ll reply within one to two working days.</p>
          <button type="button" onClick={() => setSent(false)} className={s.again}>
            Send another
          </button>
        </div>
      ) : (
        <>
          <div className={s.formHead}>
            <h2 className={s.formTitle}>Send a message</h2>
            <p className={s.formNote}>Roles, projects or a quick question — all welcome.</p>
          </div>
          <div className={s.fields}>
            <label className={s.label}>
              Name *
              <input name="name" required placeholder="Your name" autoComplete="name" className={s.input} />
            </label>
            <label className={s.label}>
              Email *
              <input name="email" required type="email" placeholder="you@company.com" autoComplete="email" className={s.input} />
            </label>
            <label className={s.label}>
              Company
              <input name="company" placeholder="Company or project" autoComplete="organization" className={s.input} />
            </label>
            <label className={s.label}>
              Reason for Contact
              <select name="reason" className={s.input}>
                <option>Full-time role</option>
                <option>Contract / freelance project</option>
                <option>Collaboration</option>
                <option>Just saying hi</option>
              </select>
            </label>
          </div>
          <label className={s.label}>
            Message *
            <textarea name="message" required rows={6} placeholder="Tell me about the role or product…" className={`${s.input} ${s.textarea}`} />
          </label>
          <button type="submit" className={`btn btn-dark btn-arrow btn-lift ${s.submit}`} data-magnetic="0.25">
            Send Message <span className="btn-ico">→</span>
          </button>
        </>
      )}
    </form>
  );
}
