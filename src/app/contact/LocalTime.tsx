'use client';

import { useEffect, useState } from 'react';
import s from './contact.module.css';

const time = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Karachi' });
const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long', timeZone: 'Asia/Karachi' });

/** Live local time in Pakistan, so remote teams can see the overlap at a glance. */
export default function LocalTime() {
  // Rendered on the client only: the server's clock would not match the visitor's render.
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={s.clock}>
      <span className={s.clockLabel}>Local time · PKT (GMT+5)</span>
      <span className={s.clockTime}>{now ? time.format(now) : ' '}</span>
      <span className={s.clockNote}>{now ? `${weekday.format(now)} in Pakistan` : 'Pakistan'} · Open to remote teams</span>
      <span className={s.clockRing} aria-hidden="true" />
      <span className={s.clockDot} aria-hidden="true" />
    </div>
  );
}
