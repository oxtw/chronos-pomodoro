import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  //Tips
  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por: <b>{state.config.shortBreakTime}min</b>
      </span>
    ),
    longBreakTime: <span>Descanso Longo.</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Proximo ciclo é de: <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Proximo descanso é de: <b>{state.config.workTime}min</b>
      </span>
    ),
    longBreakTime: <span>O próximo descanso será longo.</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
