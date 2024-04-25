#! /usr/bin/env node
import inquirer from "inquirer";




let todos = [];
let condition =true;


while(condition)
{
let operations = await inquirer.prompt (
    [
        {
            name:"operator",
            type:"list",
            message:("Select an operation:  "),
            choices:["Add Task" , "Show Task" , "Delete Task" , "Exit"]
        }
    ]
);

if (operations.operator === "Add Task") {
       let add = await inquirer.prompt (
        [
            {
                name:"addTodo",
                type:"input",
                message:("What do you want to add in your ToDo? ")
            }
        ]
       )
       todos.push(add.addTodo);
       condition = add.addTodo;
       console.log('Your ToDo list is: ', '\n' , todos)
}

else if (operations.operator === "Show Task") {
    console.log(todos);
}
else if (operations.operator === "Delete Task") {
    let deleteTask = await inquirer.prompt(
        [
            {
                name:"deleteTodo",
                type:"list",
                message:("Select the task to delete: "),
                choices:todos.map(item => item)
            }
        ]
    )
    let newTodos:any[] = todos.filter(val => val !== deleteTask.deleteTodo);
    todos =[...newTodos]
    console.log(todos);
}
else if (operations.operator === "Exit") {
    console.log("\t\t Thank You For Using To Do List App");
}
else {
    console.log(("Please Select A Valid Option"));
};
}