function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()
	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}
	function draw(todos) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var todoElem = document.getElementById('todo-list')
		var countElem = document.getElementById('count')
		var template = '<ul>'
		//DONT FORGET TO LOOP
		count = 0
		for (var i = 0; i < todos.length; i++) {
			var todo = todos[i];
			if (todos[i].completed == false) {
				count++
			}
			if (todo.completed == true) {
				template += `
			<li>Whats next? ${todo.currentTask} </li>
			<button type="button" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Exterminate!</button>
			<button type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')">Completed!</button>
			<input type="checkbox" checked="checked" onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')" ${todo.completed}>
			`

			} else {
				template += `
			<li>Whats next? ${todo.currentTask} </li>
			<button type="button" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Exterminate!</button>
			<button type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')">Completed!</button>
			<input type="checkbox" onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')" ${todo.completed}>
			`
			}
		}
		template += '</ul>'
		todoElem.innerHTML = template
		countElem.innerHTML = count
		console.log(count)
	}
	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target.addTodo.value
		var todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			currentTask: form
		}
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}
	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
		console.log(todo.completed)
	}
	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}
	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	getTodos()
}
