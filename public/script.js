
document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('form');
    const submitt = document.querySelector("#submitt");
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        formdata = new FormData(form);
        const category = formdata.get('categoryy');
        const name = document.querySelector('input[type="text"]').value;
        const limit = document.querySelector('input[type="number"]').value;
        const difficulty = formdata.get("difficulty");
        const result = document.querySelector('#result');
        console.log("limit");
        if(limit>20){
            alert("Please enter a value under 20!");
        }else{
            submitt.disabled= true;
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
        document.querySelector("#result").style.visibility = "visible";
        document.querySelector("#questions-result").style.visibility = "visible";
        const rp = document.querySelector("#result-p")
        rp.style.display = "revert";
        rp.innerHTML = `Here are your questions <b> ${namee} </b>`;
                const remove = `
                <button id="remove-output"> Remove </button>
                `
    for(let i=0; i<questions.length;i++){
        const result5 = ` <br>
        <div class= "actualquestions">
        ${i + 1}. ${questions[i].question}
        </div> 
        `;
        document.querySelector("#result").insertAdjacentHTML('beforeend',result5);
    }
    const result2 = document.querySelector("#result");
    document.querySelector("#result").insertAdjacentHTML('beforeend',remove);
    document.getElementById("remove-output").addEventListener('click',()=>{
        document.querySelector("#result").innerHTML = `
        <h2 style="display: none;" id="questions-result">Questions:</h2>
            <p id="result-p" style="display: none;"></p>
        `
        submitt.disabled = false;
    })
            }
        })
        .catch(e => console.error(e));
    }
    })
    
})