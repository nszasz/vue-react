import {ref, watchEffect} from "vue";

// Create a single instance of the store outside the function
const tasks = ref(JSON.parse(localStorage.getItem("tasks")) || []);

export function useTodoStore() {
  const addTask = (task) => {
    tasks.value.push({ id: Date.now(), text: task, done: false });
  };

  const toggleTask = (id) => {
    const task = tasks.value.find(t => t.id === id);
    if (task) task.done = !task.done;
  };

  const removeTask = (id) => {
    tasks.value = tasks.value.filter(t => t.id !== id);
  };

  // ✅ Auto-save tasks whenever they change
  watchEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  });

  return { tasks, addTask, toggleTask, removeTask };
}


// reactive() examples:

// ✅ Encapsulates state & logic together → Easy to maintain.
// ✅ Functions remain reactive → No need to reference store.tasks separately.
// ✅ Direct access to reactive properties inside methods → Cleaner syntax.
// import { reactive } from "vue";
//
// const store = reactive({
//   tasks: [],
//   addTask(task) {
//     store.tasks.push({ id: Date.now(), text: task, done: false });
//   },
//   toggleTask(id) {
//     const task = store.tasks.find(t => t.id === id);
//     if (task) task.done = !task.done;
//   },
//   removeTask(id) {
//     store.tasks.splice(store.tasks.findIndex(task => task.id === id), 1);
//   }
// });
//
// export function useTodoStore() {
//   return store;
// }

// ✅ Functions remain independent → Easier for unit testing.
// ✅ No unnecessary reactivity for methods → Slightly better performance.
// ✅ More flexible for future extensions → If functions need additional dependencies, they can be modified separately.
// import { reactive } from "vue";
//
// const state = reactive({ tasks: [] });
//
// const addTask = (task) => {
//   state.tasks.push({ id: Date.now(), text: task, done: false });
// };
//
// const toggleTask = (id) => {
//   const task = state.tasks.find(t => t.id === id);
//   if (task) task.done = !task.done;
// };
//
// const removeTask = (id) => {
//   state.tasks.splice(state.tasks.findIndex(task => task.id === id), 1);
// };
//
// export function useTodoStore() {
//   return { state, addTask, toggleTask, removeTask };
// }