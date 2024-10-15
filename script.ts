document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.querySelector<HTMLUListElement>('.todo-list');
    const triggerBtn = document.querySelector<HTMLButtonElement>('.trigger-btn');
    const addBtn = document.querySelector<HTMLButtonElement>('.add-btn');
    const addTodo = document.querySelector('.add-todo');
    const todoInput = document.querySelector<HTMLInputElement>('.todo-input');
    const todoItem = document.querySelectorAll('.todo-item');
    const emptyMessage = document.querySelector('.empty-list-message');
    const todoDay = document.querySelector<HTMLHeadingElement>('.todo-day');
    const todoDate = document.querySelector<HTMLParagraphElement>('.todo-date');

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    const addClickListenerToTodoItem = (item: Element): void => {
        item.addEventListener('click', () => {
            completedTodo(item);
        });
    };

    //Add a todo item
    const addTodoItem = (): void => {

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

        //step: 4 - insert text from input
        if (todoInput) {
            todoText.innerHTML = todoInput?.value;
        }

        //Step: 4 - insert todo item into todo list
        if (todoList && todoInput) {
            todoList.appendChild(todoItem);
            todoInput.value = '';
            addClickListenerToTodoItem(todoItem); // Add click listener to new item
        }
        renderEmptyListText();
    }

    const triggerTodoInput = (): void => {
        addTodo?.classList.toggle('hidden');
        triggerBtn?.classList.toggle('input-shown');
        if (triggerBtn) {
            if (triggerBtn.classList.contains('input-shown')) {
                triggerBtn.textContent = "Cancel";
            } else {
                triggerBtn.textContent = "+ New Todo";
            }
        }
    }

    const completedTodo = (item: Element): void => {
        item?.classList.toggle('completed');
    }

    const getDate = (): {
        day: string,
        date: number,
        month: string,
        year: number
    } => {
        const day = days[new Date().getDay()];
        const date = new Date().getDate();
        const month = months[new Date().getMonth()];
        const year = new Date().getFullYear();
        return { day, date, month, year }
    }

    const renderEmptyListText = (): void => {
        if (todoList && emptyMessage) {
            if (todoList.children.length === 0) {
                emptyMessage.classList.remove('hidden');
            } else {
                emptyMessage.classList.add('hidden');
            }
        }
        if (todoDay && todoDate) {
            todoDay.innerHTML = getDate().day;
            todoDate.innerHTML = `${getDate().date} ${getDate().month} ${getDate().year}`
        }
    }

    triggerBtn?.addEventListener('click', triggerTodoInput)

    addBtn?.addEventListener('click', addTodoItem)

    todoItem.forEach((item) => {
        addClickListenerToTodoItem(item);
    });

    renderEmptyListText()
})