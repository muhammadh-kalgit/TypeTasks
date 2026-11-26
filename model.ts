export type TaskStatus = "todo" | "in-progress" | "done";
export interface Task{
    id: number;
    title: string;
    status: TaskStatus;
}

export function Advance(task: Task): Task{
    if (task.status === "todo"){return {...task, status:"in-progress"}};
    if (task.status === "in-progress") { return {...task, status:"done"}};
    return task
}

let nextId = 1;

// Add a new task — always starts as "todo".
export function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = { id: nextId++, title, status: "todo" };
  return [...tasks, newTask];
}

//Marking task as done
export function completeTask(tasks: Task[], id: number): Task[] {
    return tasks.map((t)=>(t.id === id ? {...t, status: "done"}: t))
}

//return tasks matching the status:
export function filterByStatus(tasks: Task[], status: TaskStatus): Task[]{
    return tasks.filter((t)=> t.status === status)
} 

export function advanceTask(task: Task[], id:number): Task[]{
    return task.map((t) => (t.id === id ? Advance(t):t ))
}

export function deleteTask(task: Task[], id:number): Task[]{
    return task.filter((t)=> t.id !== id);
}