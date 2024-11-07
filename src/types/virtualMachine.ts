export interface VirtualMachine {
  id: string;
  state: 'Running' | 'Stopped';
  hostServer: string;
  cpu: number;
  memory: number;
  uptime: number;
  alerts: {
    level: AlertLevel;
    count?: number;
  };
}

export enum AlertLevel {
  Important = 'Important',
  Critical = 'Critical',
  Moderate = 'Moderate',
  Good = 'Good',
}

export interface VirtualMachineFormData {
  vmName: string;
  cpu: number;
  ram: number;
  virtualizedCpu: boolean;
}
