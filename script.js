// 變數
const list = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");
const done = document.querySelector("#my-done");


let todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

//新增
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

//判斷是否有輸入內容
function checkText(text) {
  const inputValue = input.value;
  if (inputValue.trim().length > 0) {
    //trim:移除字串開始跟結尾的空白字元
    addItem(text); //字元長度大於0，新增
    input.classList.remove("is-invalid"); //新增字元後刪除警示
    input.value = ""; //清空輸入框
  } else {
    //小於0代表未輸入字元
    input.classList.add("is-invalid"); //加入警示
    input.value = ""; //清空輸入框
  }
}


//監聽器:輸入文字且點擊btn後新增
addBtn.addEventListener("click", function (e) {
  const inputValue = input.value; 
  checkText(inputValue);
});
//設置鍵盤事件，按下Enter鍵後可直接新增
input.addEventListener("keypress", function (e) { 
  const inputValue = input.value; 
  if (event.key === "Enter") { //鎖定 Enter 鍵
    checkText(inputValue);
  }
});

// Delete and check
//設定事件監聽器for todo list
list.addEventListener("click", function (event) {
  const target = event.target;
  const parentElement = target.parentElement; 
  if (target.classList.contains("delete")) {
    parentElement.remove(); //刪除
  } else if (target.tagName === "LABEL") {
    target.classList.toggle("checked");
    done.appendChild(parentElement)
  }
});
                   

//設定事件監聽器for done list 
done.addEventListener("click", function (event) {
  const target = event.target;
  const parentElement = target.parentElement; 
  if (target.classList.contains("delete")) {
    parentElement.remove(); //刪除
  } else if (target.tagName === "LABEL") { 
    parentElement.remove()  
    target.classList.toggle("checked"); 
    list.appendChild(parentElement)
  }
})


 
