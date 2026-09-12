const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
let questions;
const fs = require('fs');
const { json } = require('stream/consumers');
const { diff } = require('util');
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));

// const data = fs.readFileSync('questions.json', utf8);
// questions = json.parse(data);
fs.readFile('questions.json', (err, data)=>{
     questions = JSON.parse(data);
})

app.post('/save', (req,res)=>{
    const category = req.body.category;
    const name = req.body.name;
    const limit = req.body.limit;
    const difficulty = req.body.difficulty;
    const selected_questions = questions.filter(q => q.category === category);
    const selected_questions1 = selected_questions.filter(q=>q.difficulty === difficulty).sort(() => Math.random() - 0.5).slice(0, limit);

    console.log(selected_questions1);
    res.json({
        success:true,
        questions: selected_questions1,
        name: name
    })
})

app.listen(port, ()=>{
    console.log(`The Server is running on http://localhost:${port}`);
})