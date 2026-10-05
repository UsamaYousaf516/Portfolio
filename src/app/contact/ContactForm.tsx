'use client';

import { useState } from 'react';
import { site } from '@/lib/site';
import s from './contact.module.css';

export default function ContactForm() {
  const [draftOpened, setDraftOpened] = useState(false);

  return (
    <form
      className={s.form}
      onSubmit={(e) => {
        e.preventDefault();
        const fields = new FormData(e.currentTarget);
        const subject = `${fields.get('reason')} — ${fields.get('name')}`;
        const body = [
          `Name: ${fields.get('name')}`,
          `Email: ${fields.get('email')}`,
          `Company: ${fields.get('company') || 'Not provided'}`,
          '',
          String(fields.get('message')),
        ].join('\n');
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setDraftOpened(true);
      }}
    >
      {draftOpened ? (
        <div className={s.sent} role="status">
          <span className={s.sentIco}>↗</span>
          <h2 className={s.sentTitle}>Send Your Draft from Your Email App.</h2>
          <p className={s.formNote}>This website hasn&apos;t sent your message. If your email app didn&apos;t open, email <a href={`mailto:${site.email}`}>{site.email}</a> directly.</p>
          <button type="button" onClick={() => setDraftOpened(false)} className={s.again}>
            Back to Form
          </button>
        </div>
      ) : (
        <>
          <div className={s.formHead}>
            <h2 className={s.formTitle}>Discuss an Opportunity</h2>
            <p className={s.formNote}>Share the role, your team and what you&apos;re building. This form prepares a draft in your email app for you to send.</p>
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
              Company / Team
              <input name="company" placeholder="Your company or team" autoComplete="organization" className={s.input} />
            </label>
            <label className={s.label}>
              What Would You Like to Discuss?
              <select name="reason" className={s.input}>
                <option>AI developer role</option>
                <option>Software engineering role</option>
                <option>Contract opportunity</option>
                <option>Resume request</option>
                <option>Collaboration</option>
                <option>General enquiry</option>
              </select>
            </label>
          </div>
          <label className={s.label}>
            Message *
            <textarea name="message" required rows={6} placeholder="Tell me about the role, responsibilities and the software your team is building…" className={`${s.input} ${s.textarea}`} />
          </label>
          <button type="submit" className={`btn btn-dark btn-arrow btn-lift ${s.submit}`} data-magnetic="0.25">
            Open Email Draft <span className="btn-ico">→</span>
          </button>
        </>
      )}
    </form>
  );
}
