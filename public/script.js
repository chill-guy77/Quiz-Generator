
document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('form');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        formdata = new FormData(form);
        const category = formdata.get('categoryy');
        const name = document.querySelector('input[type="text"]').value;
        console.log(name);
        console.log(category);
        fetch('/save',{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: name,
                category: category
            })
        })
        .then(response => response.json())
        .then(result=>{
            if(result.success){
                const namee = result.name;
                console.log(name);
            }
        })
        .catch(e => console.error(e));
    })
})