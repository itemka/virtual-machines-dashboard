import { AlertLevel, VirtualMachine } from '@/types/virtualMachine.ts';

export function generateRandomAlert(): VirtualMachine['alerts'] {
  const levels = [
    AlertLevel.Critical,
    AlertLevel.Important,
    AlertLevel.Moderate,
    AlertLevel.Good,
  ];
  const randomLevel = levels[Math.floor(Math.random() * levels.length)];
  const randomCount = Math.floor(Math.random() * 5) + 1;

  return randomLevel === AlertLevel.Good
    ? { level: randomLevel }
    : { level: randomLevel, count: randomCount };
}
