import type { TaskModel } from "../models/TaskModel";

//Fizz Buzz ->
export function getNextCycleType(currentCycle: number): TaskModel['type']{
  
  //8ºs ciclos são longBreakTime
  //ciclos pares são shortBreakTime
  //ciclos ímpares são workTime

  if(currentCycle % 8 === 0) return 'longBreakTime';
  if(currentCycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}