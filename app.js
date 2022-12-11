var userInput = document.getElementById("userInput")
var renderArea = document.getElementById("renderArea")

function addTodo(){
    if(userInput.value == "" ){
        alert("Don't press the button that says nothing")

    }else{
        var todoListLi = document.createElement("li")
        var todoListLiText = document.createTextNode(userInput.value)
        todoListLi.appendChild(todoListLiText)
        renderArea.appendChild(todoListLi)
        userInput.value = ""
        
        var changeTodo = document.createElement("button")
        changeTodo.innerText = "Change Todo"
        changeTodo.setAttribute("class" , "change-todo-btn")
        changeTodo.setAttribute("onClick" , "changeTodo(this)")
        todoListLi.appendChild(changeTodo)
        var deleteTodo = document.createElement("button")
        deleteTodo.innerText = "Delete Todo"
        deleteTodo.setAttribute("class" , "delete-todo-btn")
        deleteTodo.setAttribute("onClick" , "deleteTodo(this)")
        todoListLi.appendChild(deleteTodo)
        var over = document.getElementById("ol-Div")
        over.style.overflow = "scroll"
        
    }
}

function changeTodo(change){
    var changeTodoInput = prompt("Enter The Change Todo Value", change.parentNode.firstChild.nodeValue = changeTodoInput)
    change.parentNode.firstChild.nodeValue = changeTodoInput;
}

function deleteTodoAll(){
    renderArea.innerHTML = ""    
}
function deleteTodo(oneDel){
oneDel.parentNode.remove()
}