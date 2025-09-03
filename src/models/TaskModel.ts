import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number; // duration in minutes
  startDate: number;
  completeDate: number | null; //quando timer chega no final
  interruptedDate: number | null; //quando a task for interrompida
  type: keyof TaskStateModel['config'];
};