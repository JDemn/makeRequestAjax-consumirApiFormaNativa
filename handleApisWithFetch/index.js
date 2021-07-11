const API_URL = 'https://jsonplaceholder.typicode.com';
//ROOT NODE
const HTMLResponse = document.querySelector('#app');

//data .  creando fragment como react. nodos de html es document.createDocumentFragment()
const ul = document.createElement('ul');

//use fetch method

fetch(`${API_URL}/users`).then((response)=>response.json())
.then((users)=>{
    users.forEach(user =>{
        let element = document.createElement('li');
        //element have a child that is TextNode
        element.appendChild(document.createTextNode(`${user.name} ${user.email}`));
        //ul have a chil who is element
        ul.appendChild(element);
    });

    //Root node have a chil who is ul
    HTMLResponse.appendChild(ul);
    //const tpl = users.map((user)=>`<li>${user.name}  ${user.email}</li>`);
    //HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
});