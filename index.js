const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

let tasks = [];
let completed = [];


app.post('/addtask', (req, res) => {
    let newTask = req.body.newtask;
    if (newTask) {
        tasks.push(newTask);
    } else {
        console.log('Field is empty!');
    }
    res.redirect('/');
});

app.post('/deletetask', (req, res) => {
    let completeTask = req.body.check;
    if( typeof completeTask === 'string') {
        completed.push(completeTask);
        tasks.splice(tasks.indexOf(completeTask), 1);
    } else if (completeTask === 'object') {
        for (let i = 0; i < completed.length; i++) {
            completed.push(completeTask);
            tasks.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect('/');
});

app.get("/", function(req, res) {    
    res.render("index", { tasks: tasks, completed: completed });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});