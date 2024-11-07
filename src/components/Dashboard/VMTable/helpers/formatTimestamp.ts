import { intervalToDuration } from 'date-fns';

export function formatTimestamp(ms: number) {
  const duration = intervalToDuration({ start: 0, end: ms });

  const days = duration.days || 0;
  const hours = String(duration.hours || 0).padStart(2, '0');
  const minutes = String(duration.minutes || 0).padStart(2, '0');
  const seconds = String(duration.seconds || 0).padStart(2, '0');

  return `${days}:${hours}:${minutes}:${seconds}`;
}
