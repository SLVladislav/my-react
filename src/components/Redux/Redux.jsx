import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/actions";



// Для того щоб в компоненті отримати дані зі стору єсть ХУК
const MyUseSelector = () => {  // Ця функція називається селектором і повинна повернути тільки ту частину стану, яка необхідна компоненту.
    const value = useSelector(state => state.some.value)
}

const StatusFilter = () => {
    const filter = useSelector(state => state.filters.status);
    return (
        <div>
            <button> All {filter === "all" && "is active"}</button>
            <button> Active {filter === "active" && "is active"}</button>
            <button> Completed {filter === "completed" && "is active" }</button>
        </div>
    )
}


const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
        case "active":
            return tasks.filter((task) => !task.completed);
        case "completed":
            return tasks.filter((task) => task.competed);
    
        default:
            return tasks;
    }
};

const TastList = () => {
    const tasks = useSelector((state) => state.tasks.items); // Отримуємо масив завдань із стану Redux

    const statusFilter = useSelector((state) => state.filters.status); // Отримуємо значення фільтра із стану Redux

    const visibleTasks = getVisibleTasks(tasks, statusFilter) // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
    return (
        <ul>
            {visibleTasks.map((task) => (
                <li key={task.id}>
                    <Task tast={task} />
                </li>
            ))}
        </ul>
    );
}


const TaskCounter = () => {
    const tasks = useSelector((state) => state.tasks.items);
    const count = tasks.reduce((acc, task) => {
        if (task.completed) {
            acc.completed += 1;
        } else {
            acc.active += 1;
        }
        return acc;
    },
        { active: 0, competed: 0 }
    );
    return (
        <div>
            <p>Active: {count.active}</p>
            <p>Completed: {count.competed}</p>
        </div>
    )
};



// Відправлення екшенів (dispatch)
const TaskForm = () => {
    const dispatch = useDispatch(); //Отримуємо посилання на функцію відправки екшенів
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        // Викликаємо фабрику екшену та передаємо дані для payload
        //Відправляємо результат – екшен створення завдання
        dispatch(addTask({
            id: crypto.ramdomUUID(),
            completed: false,
            text: form.elements.text.value
        }));
        form.reset();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="text" placeholder="Enter task text..." />
            <button type="submit">Add task</button>
        </form>
    )


}
