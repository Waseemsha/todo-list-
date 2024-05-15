import inquirer from "inquirer";
console.log("\n\tWELCOME! TO WASEEM SHAH TODO_LIST\n");
let todos = ["Waseem", "Ahmed"];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select an operator",
            name: "select",
            choices: ["Add", "Update", "View", "Delete"],
        });
        if (ans.select == "Add") {
            let addtodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Add item in the list"
            });
            todos.push(addtodo.todo);
            todos.forEach(todo => console.log(todo));
            //console.log(todos);
        }
        if (ans.select == "Update") {
            let Updatetodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "Updates items in the list",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Add items in the list"
            });
            let newTodo = todos.filter(val => val !== Updatetodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "View") {
            console.log("******TO DO LIST******");
            console.log(todos);
        }
        if (ans.select == "Delete") {
            let DeleteTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "Update items in the list",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== DeleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
