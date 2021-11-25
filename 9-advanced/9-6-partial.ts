{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  // Partial<T> T의 key들을 optional하게 사용
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }
  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };
  const updated = updateTodo(todo, { priority: "low" });
  console.log(updated);
}
