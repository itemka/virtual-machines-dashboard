import { AlertLevel, VirtualMachine } from '@/types/virtualMachine.ts';

export const mockVirtualMachines: VirtualMachine[] = [
  {
    id: '3ad83858-e748-11ee-8c4d-000c29e84b1f-1',
    state: 'Running',
    hostServer: '43C07-27',
    cpu: 7.72,
    memory: 16.68,
    uptime: 360000000,
    alerts: { level: AlertLevel.Important, count: 3 },
  },
  {
    id: '3ad83858-e748-11ee-8c4d-000c29e84b1f-2',
    state: 'Stopped',
    hostServer: '43C07-27',
    cpu: 2.24,
    memory: 21.68,
    uptime: 420000000,
    alerts: { level: AlertLevel.Critical, count: 3 },
  },
  {
    id: '3ad83858-e748-11ee-8c4d-000c29e84b1f-3',
    state: 'Running',
    hostServer: '43C07-27',
    cpu: 5.72,
    memory: 12.68,
    uptime: 234000000,
    alerts: { level: AlertLevel.Moderate, count: 5 },
  },
  {
    id: '3ad83858-e748-11ee-8c4d-000c29e84b1f-4',
    state: 'Running',
    hostServer: '43C07-27',
    cpu: 7.72,
    memory: 16.68,
    uptime: 535235253,
    alerts: { level: AlertLevel.Good },
  },
  {
    id: '3ad83858-e748-11ee-8c4d-000c29e84b1f-5',
    state: 'Running',
    hostServer: '43C07-27',
    cpu: 7.72,
    memory: 16.68,
    uptime: 232432432,
    alerts: { level: AlertLevel.Critical, count: 1 },
  },
];
