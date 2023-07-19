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

//обрабатывать JSON -файл и показывать ифномарция в DOM
function showUsers(arrayUsers) {
    for (user of arrayUsers) { // перебор значений
        //console.log(user); // целиком пользователь
        hr = document.createElement('hr'); // просто разделитель
        document.body.append(hr);
        for (title in user) { // перебор свойства или индексов (для js нет разницы) 
            //console.log(title, user[title]) // свойство, значение этого свойства
            if (title == 'address' || title == 'company') {
                strong = document.createElement('strong'); // просто разделитель
                strong.innerHTML = title + ' : ';
                document.body.append(strong);
                br = document.createElement('br'); // просто разделитель
                document.body.append(br);
                for (attribute in user[title]) {
                    if (attribute == 'geo') {
                        document.body.append('lat' + ' : ' + user[title][attribute]['lat']);
                        br = document.createElement('br'); // просто разделитель
                        document.body.append(br);
                        document.body.append('lng' + ' : ' + user[title][attribute]['lng']);
                        br = document.createElement('br'); // просто разделитель
                        document.body.append(br);
                    } else {
                        document.body.append(attribute + ' : ' + user[title][attribute]);
                        br = document.createElement('br'); // просто разделитель
                        document.body.append(br);
                    }

                }
                br = document.createElement('br'); // просто разделитель
                document.body.append(br);
            } else {
                document.body.append(title + ' : ' + user[title]);
                br = document.createElement('br'); // просто разделитель
                document.body.append(br);
            }
        }
    }

}

body = {
    name: 'Maya Manson',
    age: 44
}

/*GET request */
document.querySelector('input').addEventListener('click', function() {
        sendRequest('GET', requestUrl)
            .then(data => ( // data - JSON -файл
                //console.log('good data', data))) //в случае успешного выполнения кода
                showUsers(data)))
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