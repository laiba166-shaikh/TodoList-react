export const searchUserTodos = (todos, searchValue) => {
  var searchTodos = [];
  searchTodos = todos.filter((todo) => {
    return todo.description.includes(searchValue);
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
