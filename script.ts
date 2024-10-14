document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.querySelector('.todo-list');
    const addBtn = document.querySelector('.add-btn');
    const insertBtn = document.querySelector('.insert-btn');

    //Create a todo item
    const createTodoItem = (): void => {
        console.log('hi')
        //Step: 1 - create necesseary elements for a todo item
        let todoItem = document.createElement('li');
        let todoText = document.createElement('p');
        let todoStatusIndicator = document.createElement('div');

        //Step: 2 - add classes to those elements
        todoItem.classList.add('todo-item');
        todoText.classList.add('todo-text');
        todoStatusIndicator.classList.add('todo-status-indicator');

        //Step: 3 - insert text and indicator into Todo Item
        todoItem.appendChild(todoText);
        todoItem.appendChild(todoStatusIndicator);

        //Step: 4 - insert todo item into todo list
        todoList?.appendChild(todoItem)
    }

    addBtn?.addEventListener('click', () => {
        createTodoItem()
    })
})