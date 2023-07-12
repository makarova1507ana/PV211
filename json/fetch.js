const requestUrl = 'https://jsonplaceholder.typicode.com/users';


function sendRequest(method, url, body = null) {
    headers = {
        'Content-type': 'application/json'
    }
    if (body != null) { //если что-то все-таки передали, то преобразовываем к JSON
        body = JSON.stringify(body);
    }
    return fetch(url, {
            method: method,
            body: body,
            headers: headers
        }).then(response => { return response.json() }) // fetch  возвращает promise    
}


body = {
    name: 'Maya Manson',
    age: 44
}

/*GET request */
document.querySelector('input').addEventListener('click', function() {
        sendRequest('GET', requestUrl)
            .then(data => (
                console.log('good data', data))) //в случае успешного выполнения кода
            .catch(err => (
                console.log('error data', err))) //в случае неуспешного выполнения кода
    }

);

/*POST request */
document.querySelector('button').addEventListener('click', function() {
    sendRequest('POST', requestUrl, body)
        .then(data => (
            console.log('good data', data))) //в случае успешного выполнения кода
        .catch(err => (
            console.log('error data', err))) //в случае неуспешного выполнения кода
});