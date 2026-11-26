// app.ts
import type { Task, TaskStatus } from "./model.js";
import { addTask, advanceTask, deleteTask, filterByStatus } from "./model.js";

let tasks: Task[] = [];
let filter: "all" | TaskStatus = "all";

// Grab elements — cast so tsc knows exactly what they are.
const titleInput = document.getElementById("title") as HTMLInputElement;
const addBtn = document.getElementById("add") as HTMLButtonElement;
const listEl = document.getElementById("list") as HTMLUListElement;

addBtn.onclick = () => {
  const title = titleInput.value.trim();   // .value is known & typed
  if (!title) return;
  tasks = addTask(tasks, title);           // returns a fresh Task[]
  render();
};

function render(): void {
  // 1. pick which tasks to show (filterByStatus is typed to TaskStatus)
  const shown: Task[] =
    filter === "all" ? tasks : filterByStatus(tasks, filter);

  // 2. clear the old rows
  listEl.innerHTML = "";

  // 3. build one <li> per task
for (const t of shown) {
  const li = document.createElement("li");

  const div = document.createElement('div');
  const titleSpan = document.createElement("span");
  titleSpan.textContent = t.title;

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = t.status;
  if (t.status==='todo'){badge.style.backgroundColor='#fdf3d6'}
  if (t.status==='in-progress'){badge.style.backgroundColor='#eae5ff'}
  if (t.status==='done'){badge.style.backgroundColor='#d8edea'}

const advBtn = document.createElement("button");
if (t.status === 'todo' || t.status === 'in-progress') {
    advBtn.className = 'addbtn';
    advBtn.textContent = "advance →";
    advBtn.onclick = () => {
        tasks = advanceTask(tasks, t.id);
        render();
    };
} else {
    advBtn.className = 'done';
    advBtn.textContent = "✔done";
}
  const delBtn = document.createElement("button");
  delBtn.className='delbtn'
  delBtn.textContent = "✕";
  delBtn.onclick = () => { tasks = deleteTask(tasks, t.id); render(); };

  li.appendChild(titleSpan);
  div.appendChild(badge);
  div.appendChild(advBtn);
  div.appendChild(delBtn);
  li.appendChild(div)
  listEl.appendChild(li);
}
}