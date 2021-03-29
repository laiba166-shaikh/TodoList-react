export const searchUserTodos = (todos, searchValue) => {
  var searchTodos = [];
  todos.map((todo) => {
    if (todo.description.includes(searchValue)) {
      searchTodos.push(todo);
    }
    return todo;
  });
  return searchTodos;
};

export const setCompleteTodos = (todos = [], todoId) => {
  todos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, completed: true } : { ...todo }
  );
  return todos;
};

export const setActiveTodos = (todos = [], todoId) => {
  todos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, completed: false } : { ...todo }
  );
  return todos;
};
