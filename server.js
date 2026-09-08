const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));

app.post('/save', (req,res)=>{
    const category = req.body.category;
    const name = req.body.name;
    console.log(name);
    console.log(category);
    if(category==='Science'){
        console.log('Heloo')
    }else if(category==='Maths'){
        console.log('Heldoo')
    }else if(category==='History'){
        console.log('Heloso')
    }else if(category==='Geography'){
        console.log('Heloao')
    }
    res.json({
        success:true,
        questions: '<soon the questions are gonna be added in questions.json and i will put up the    questions into here :D',
        name: name
    })
})

app.listen(port, ()=>{
    console.log(`The Server is running on http://localhost:${port}`);
})