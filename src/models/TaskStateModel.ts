import type { TaskModel } from "./TaskModel";

//Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; //Historico, MainForm
  secondsRemaining: number; // Home, Countdown, Historico, MainForm, Button
  formattedSecondsRemaining: string;// Titulo, Countdown
  activeTask: TaskModel | null;//Countdown, Historico, MainForm, Button
  currentCycle: number; //Home
  config: {
    workTime: number;// MainForm
    shortBreakTime: number;// MainForm
    longBreakTime: number;// MainForm
  };
}