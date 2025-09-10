import type { TaskStateModel } from '../../models/TaskStateModel';
import { TaskActionTypes, type TaskActionModel } from './TaskActions';

export function taskReducer(state: TaskStateModel, action: TaskActionModel) {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
    
      return state;
    }
    case TaskActionTypes.INTERRUPT_TASK: {
    
      return state;
    }
    case TaskActionTypes.RESET_STATE: {
     
      return state;
    }
  }

  //SEMPRE deve retornar o ESTADO.
  return state;
}
