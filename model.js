export function Advance(task) {
    if (task.status === "todo") {
        return { ...task, status: "in-progress" };
    }
    ;
    if (task.status === "in-progress") {
        return { ...task, status: "done" };
    }
    ;
    return task;
}
let nextId = 1;
// Add a new task — always starts as "todo".
export function addTask(tasks, title) {
    const newTask = { id: nextId++, title, status: "todo" };
    return [...tasks, newTask];
}
//Marking task as done
export function completeTask(tasks, id) {
    return tasks.map((t) => (t.id === id ? { ...t, status: "done" } : t));
}
//return tasks matching the status:
export function filterByStatus(tasks, status) {
    return tasks.filter((t) => t.status === status);
}
export function advanceTask(task, id) {
    return task.map((t) => (t.id === id ? Advance(t) : t));
}
export function deleteTask(task, id) {
    return task.filter((t) => t.id !== id);
}
//# sourceMappingURL=model.js.map