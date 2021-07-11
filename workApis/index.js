//handle APIS before ECMAC SCRIPT 6
const API_URL = 'https://jsonplaceholder.typicode.com';

//ONJECT HTML HTTP REQUEST
const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200){
        /* 0 = unset, no se ha llamado al método open
            1 = opened: se ha llamado al método open
            2 = header_received: se está llamando al método send()
            3 = loading : está recibiendo la respuesta
            4 = done : se ha completado la operación
            TODO LO ANTERIOR OCURRE SOBRE EL OBJETO xhr
        */

            //see response console.log(this.response);
        const data = JSON.parse(this.response);
        // pintar el api
        const HTMLResponse = document.querySelector('#app');

        //itereando sobre los datos
        const tpl = data.map(user => `<li>${user.name} ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    }
}

//call function onRequestHandler trought a call back. in object xhr

xhr.addEventListener('load', onRequestHandler); //status 0, missing call open method
xhr.open('GET', `${API_URL}/users`); //state 1
xhr.send(); //handle state 2,3,4