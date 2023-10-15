const task = (title) => {
    let taskObject = {
        "title": title,
    }
    let editTask = (newTitle) => {
        taskObject.title = newTitle;
    }

    return { taskObject, editTask };
};

const newTask = task("bruh");
console.log(newTask.taskObject.title);
newTask.editTask("laskdjflksdjf");
console.log(newTask.taskObject.title);

function filterList(data, filterType) {
    let x = [];
    if (filterType === 2700 || filterType === 3500) {
        x = data.filter((element) => {
            return element.room_fee === filterType
        });
    }
    else if (filterType === 0 || filterType === 1) {
        x = data.filter((element) => {
            return element.room_status === filterType
        });
    }
    return x
}