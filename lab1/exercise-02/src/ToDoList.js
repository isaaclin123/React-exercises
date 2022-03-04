function ToDoList({ items, onTodoStatusChanged, onRemoveDescription }) {
  return (
    <div className="toDoList">
      <h1>My todos</h1>
      <ul>
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                value={item.description}
                checked={item.isComplete}
                onChange={() => onTodoStatusChanged(index, item.isComplete)}
              />
              <span>{item.description}</span>
              {item.isComplete ? <span>(Done!)</span> : null}
              &nbsp;
              <button
                onClick={(e) => {
                  onRemoveDescription(index);
                }}
              >
                X
              </button>
            </li>
          ))
        ) : (
          <p>There are no to-do litems!</p>
        )}
      </ul>
    </div>
  );
}
export default ToDoList;
