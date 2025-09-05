import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';

//Utilizar useState quando quiser o valor do input em tempo real.
//Utilizar useRef quando quiser o valor do input somente no momento do submit.
export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

      //Ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    console.log('Próximo ciclo:', nextCycle);


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
      duration: 1,
      type: 'workTime',
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => ({
      ...prevState,
      config: { ...prevState.config },
      activeTask: newTask,
      currentCycle: nextCycle,
      secondsRemaining, //conferir
      formattedSecondsRemaining: '00:00', //conferir

      // nunca formatar um array diretamente, sempre pegar os dados do array anterior
      tasks: [...prevState.tasks, newTask],
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
        />
      </div>

      <div className='formRow'>
        <p>Proximo intervalo é de 25min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
