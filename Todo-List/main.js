// 1. 할 일 추가 / 취소 / 삭제 기능 구현

const input = document.getElementById("input");
const list = document.getElementById("list");

const add = () => {
  if (input.value) {
    const coverTodo = document.createElement("div");
    const todo = document.createElement("p");
    const remove = document.createElement("button");

    coverTodo.style.marginBottom = "5px";
    coverTodo.style.display = "flex";
    coverTodo.style.alignItems = "center";
    coverTodo.style.fontSize = "18px";

    remove.style.marginLeft = "10px";
    remove.style.width = "20px";
    remove.style.height = "20px";

    todo.innerText = `⦁ ${input.value}`;
    remove.innerText = "-";

    coverTodo.appendChild(todo);
    coverTodo.appendChild(remove);

    list.appendChild(coverTodo);

    input.value = "";

    todo.addEventListener("dblclick", () => {
      if (todo.style.textDecoration == "line-through") {
        todo.style.textDecoration = "none";
      } else {
        todo.style.textDecoration = "line-through";
      }
    });

    remove.addEventListener("click", () => {
      list.removeChild(coverTodo);
    });
  }
};
