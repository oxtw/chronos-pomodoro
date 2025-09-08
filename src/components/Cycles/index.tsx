import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

import styles from './styles.module.css';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleSteps = Array.from({ length: state.currentCycle });
  
  const cycleDescriptionMap = {
    workTime: 'foco',
    shortBreakTime: 'pausa curta',
    longBreakTime: 'pausa longa'
  }
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        {cycleSteps.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span 
            key={`${nextCycle}`}
            className={`${styles.cycleDot} ${styles[nextCycleType]} `}
            aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
            title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]} ${nextCycleType}_${nextCycle}`}            ></span>
          );
        })}
      </div>
    </div>
  );
}
