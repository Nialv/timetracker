export interface TimeActivity {
  user_id: string;
  task_id: string;
  subtask_id: string;
  client_id: string;
  focal_point: string;
  date: string;
  hours: number;
  notes?: string;
  status: string;
}
