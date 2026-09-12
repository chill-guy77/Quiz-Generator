
document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('form');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        formdata = new FormData(form);
        const category = formdata.get('categoryy');
        const name = document.querySelector('input[type="text"]').value;
        const limit = document.querySelector('input[type="number"').value;
        const difficulty = formdata.get("difficulty");
        console.log("limit");
        if(limit>20){
            alert("Please enter a value under 20!");
        }else{
        console.log(name);
        console.log(category);
        fetch('/save',{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: name,
                category: category,
                limit: limit,
                difficulty: difficulty
            })
        })
        .then(response => response.json())
        .then(result=>{
            if(result.success){
                const namee = result.name;
                const questions = result.questions;
                console.log(questions);
                console.log(name);
            }
        })
        .catch(e => console.error(e));
    }
    })

})