function Todo({ todo, index, remove }) {
    function handle() {
      console.log("Ping:", index);
      remove(index);
    }
    function complete() {
      var element = document.getElementById(index);
      element.classList.toggle("strikediag");
    }
    return (
      <div className="todo row">
        <div className="col-8" id={index}>
          {todo.text}
        </div>
        <div className="col-2">
          <i className="bi bi-calendar-check icon-right" onClick={complete}></i>{" "}
        </div>
        <div className="col-2">
          <i className="bi bi-trash icon-right" onClick={handle}></i>
        </div>
      </div>
    );
  }