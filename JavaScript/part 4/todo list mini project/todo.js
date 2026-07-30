let todo = [];

while(true){
    let req = prompt("Enter your choice:");
    if(req == "quit"){
        console.log("Quiting App");
        break;
    }

    if (req == "list"){
        console.log("--------------");
        for(task of todo){
            console.log(task);
        }
        console.log("--------------");
    } else if(req == "add"){
        let task = prompt("enter your task to todo");
        todo.push(task);
        console.log("task added!");
    } else if(req == "delete"){
        let idx = prompt("enter your task index that you want to remove:");
        todo.splice(idx, 1);
        console.log("task deleted!!!!")
    }
   

}