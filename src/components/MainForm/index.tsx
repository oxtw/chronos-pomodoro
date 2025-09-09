import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

//Utilizar useState quando quiser o valor do input em tempo real.
//Utilizar useRef quando quiser o valor do input somente no momento do submit.
export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    //Ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    //Se o input estiver vazio, não faz nada.
    if (taskNameInput.current === null) return;

    //const do valor do input, .trim() faz o input não aceitar espaços em branco como string.
    const taskName = taskNameInput.current.value.trim();

    //Validação simples, se o input estiver vazio, alerta o usuário.
    if (!taskName) {
      alert('Por favor, digite o nome da tarefa.');
      return;
    }

    //proxima task
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => ({
      ...prevState,
      config: { ...prevState.config },
      activeTask: newTask,
      currentCycle: nextCycle,
      secondsRemaining, //conferir
      formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), //conferir
      tasks: [...prevState.tasks, newTask],
    }));
  }

  function handleInterruptTask() {
    setState(prevState => ({
      ...prevState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00',
      tasks: prevState.tasks.map(task => {
        if( prevState.activeTask && prevState.activeTask.id === task.id){
          return {...task,  interruptedDate: Date.now() };
        }
        return task;
      }),
    }));
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite Algo...'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className='formRow'>
        <p>Proximo intervalo é de 25min</p>
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask && (
          <DefaultButton
            title='Iniciar nova tarefa'
            aria-label='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
            key='botao_submit'
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            title='Interromper tarefa atual'
            aria-label='Interromper tarefa atual'
            type='button'
            color='red'
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            key='botao_button'
          />
        )}
      </div>
    </form>
  );
}
