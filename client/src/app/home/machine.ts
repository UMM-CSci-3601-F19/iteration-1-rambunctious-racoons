export interface Machine {
  id: string;
  running: boolean;
  status: string;
  room_id: string;
  type: string;

  remainingTime: number;
  vacantTime: number;
}
