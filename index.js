function App(){
    const [todos, setTodos] = React.useState([
      {
        text: 'Count 100 beans',
        isCompleted: false,
      },
      {
        text: 'Stetch ankle while reciting Nacho Libre quotes',
        isCompleted: false,
      },
      {
        text: 'Take a stroll down memory lane',
        isCompleted: false,
      }        
    ]);
  
    const addTodo = text => {
      const newTodos = [...todos, {text, isCompleted:false}];
      setTodos(newTodos);
    }
    const removeTodo = index => {
      let temp = [...todos];    
      temp.splice(index, 1);
      setTodos(temp);
    }
  
    return(
      <div className="app">
        <div className="todo-list" >
          {todos.map((todo, i) => (
            <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    );
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );