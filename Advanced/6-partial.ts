{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  // Partial<T> 기존의 타입에서 원하는 부분만 업데이트 할 수 있도록 해주는 메서드
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "low",
  };

  const updated = updateTodo(todo, { priority: "high" });
  console.log(updated);
}
