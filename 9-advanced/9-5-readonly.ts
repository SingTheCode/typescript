{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // 가변성을 주면 굉장히 위험하다.
    // todo.title = "jaja";
  }
}
