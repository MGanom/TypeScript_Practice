{
  type ToDo = {
    title: string;
    description: string;
  };

  // Bad
  function display1(todo: ToDo) {
    todo.title = "oops";
  }

  // Good
  function display2(todo: Readonly<ToDo>) {
    // todo.title = "oops"; // Readonly이기 때문에 오류
  }
}
