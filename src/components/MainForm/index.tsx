import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/TaskActions';
import { Tips } from '../Tips';
import { showMessage } from '../../adapters/showMessage';

//Utilizar useState quando quiser o valor do input em tempo real.
//Utilizar useRef quando quiser o valor do input somente no momento do submit.
export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  //Ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dissmiss();

    //Se o input estiver vazio, não faz nada.
    if (taskNameInput.current === null) return;

    //const do valor do input, .trim() faz o input não aceitar espaços em branco como string.
    const taskName = taskNameInput.current.value.trim();

    //Validação simples, se o input estiver vazio, alerta o usuário.
    if (!taskName) {
      showMessage.warn('Por favor, digite o nome da tarefa.');
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

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
    showMessage.sucess('Tarefa iniciada com sucesso!');
  }
  function handleInterruptTask() {
    showMessage.dissmiss();
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });

    showMessage.error('Tarefa interrompida.');
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
        <Tips />
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
