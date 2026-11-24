
type taskStatus = 'Todo' | 'In-Progress' | 'Done';
interface Task{
    id: number;
    title: string;
    status: taskStatus;
}

function Advance(task: Task): Task{
    if (task.status === 'Todo'){return {...task, status:'In-Progress'}};
    if (task.status === 'In-Progress') { return {...task, status:'Done'}};
    return task
}

let nextId = 1;

// Add a new task — always starts as "todo".
function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = { id: nextId++, title, status: "Todo" };
  return [...tasks, newTask];
}

//Marking task as done
function completeTask(tasks: Task[], id: number): Task[] {
    return tasks.map((t)=>(t.id === id ? {...t, status: 'Done'}: t))
}

//return tasks matching the status:
function filter(tasks: Task[], status: taskStatus): Task[]{
    return tasks.filter((t)=> t.status === status)
} 

function advanceTask(task: Task[], id:number): Task[]{
    return task.map((t) => (t.id === id ? Advance(t):t ))
}

function deleteTask(task: Task[], id:number): Task[]{
    return task.filter((t)=> t.id !== id);
}

