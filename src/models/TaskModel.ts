export type TaskModel = {
  id: string;
  name: string;
  duration: number; // duration in minutes
  startData: number;
  completeDate: number | null; //quando timer chega no final
  interruptDate: number | null; //quando a task for interrompida
  type: 'workTime' | 'shortBreakTime' | 'longBreakTime';
};