import express from "express";

const app = express();
app.use(express.json())


const todoList = [

{
    todoText:"Create get  All Api",
    status: "todo"
},
{
    todoText: "Create get All Api",
    status: "todo",
  },

  {
    todoText:"Create something",
    status: "done"
},
{
    todoText: "Create whateve",
    status: "done",
  }



]


app.get("/get-completed-items-only", (req, res) => {
    let filteredRecords = todoList.filter((x) => x.status == "done");
    res.json(filteredRecords);
  });
  
  app.get("/get-todo-items-only", (req, res) => {
      let filteredRecords = todoList.filter((x) => x.status == "todo");
      res.json(filteredRecords);
    });





app.get("/get-all-to-do-items", (req, res) => {
    res.json(todoList);
  });

app.get("/", (req, res) => {
  res.json("Hello");
});

app.get("/get-owner-name", (req, res) => {
    let user = {
        firstName: "Keshav",
        lastName: "Patil"
    };

    res.json(user);
  });

  app.get("/get-project-information", (req, res) => {
    res.json("This is the project");
  });
  
const server = app.listen("3001", function () {
  console.log("Server listening ....");
});