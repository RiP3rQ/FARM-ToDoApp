import TodoItem from "./Todo";

export default function TodoView(props) {
  return (
    <div>
      <ul>
        {props.todoList.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
