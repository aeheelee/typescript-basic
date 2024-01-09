export interface ITodoItem {
  id: number;
  text: string;
  isComplete?: boolean;
}

interface ITodo {
  todos: ITodoItem[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

function Todo({ todos, completeTodo, removeTodo }: ITodo) {
  return (
    <div className="wrapper-todo">
      {todos.map((todo, index) => {
        const todoClass = todo.isComplete ? 'todo-row complete' : 'todo-row';

        return (
          <div className={todoClass} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
            </div>
            <div className="icons">
              <i
                className="fas fa-times delete-icon"
                onClick={() => removeTodo(todo.id)}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
