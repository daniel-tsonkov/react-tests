export const TodoItem = (props) => {
  let className = 'todo';

  if (props.isCompleted) {
    className += ' is-completed';
  };

  return (
    <tr className={className}>
      <td>{props.title}</td>
      <td>{props.isCompleted ? 'Complete' : 'Incomplete'}</td>
      <td class="todo-action">
        <button class="btn todo-btn">Change status</button>
      </td>
    </tr>
  );
}