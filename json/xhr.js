//promise
const requestUrl = 'https://jsonplaceholder.typicode.com/users';


function sendRequest(method, url, body = null) { // body=null -параметр с заданным значением по умолчанию
    new Promise((resolve, reject) => { //resolve  успешная обработка, reject вызываем если просохоидт какая-то ошибка
            let xhr = new XMLHttpRequest();
            xhr.open(method, url); //Метод и ссылку
            xhr.responseType = 'json';

            xhr.setRequestHeader('Content-type', 'application/json'); // передаем серверу, что отправка данных будет через json
            xhr.onload = () => { //при загрузке данных

                if (xhr.status >= 400) {
                    reject(xhr.response); //xhr.response[0]['name']);
                } else {
                    resolve(xhr.response);
                }
            }
            xhr.onerror = () => { // после загрузки какая-то другая ошибка
                reject(xhr.response);
            }
            xhr.send(JSON.stringify(body)); //отправка самого запроса body- тело запроса
        })
        .then(data => (
                console.log('good data', data)) //return !!!
        ) //в случае успешного выполнения кода

    .catch(err => (
            console.log('error data', err))) //в случае неуспешного выполнения кода

}
// body(any name) - объект в js
/*array_users: [{
            name: 'Jhon Jhonson',
            age: 23
        },
        {
            name: 'Maya Manson',
            age: 44
        }
    ] */
body = {
    name: 'Maya Manson',
    age: 44
}

/*GET request */
//document.querySelector('button').addEventListener('click', function() { sendRequest('GET', requestUrl) });

/*POST request */
document.querySelector('button').addEventListener('click', function() {
    sendRequest('POST', requestUrl, body);
});
document.querySelector('input').addEventListener('click', function() { sendRequest('GET', requestUrl) });

//function array_name_users()        

// эмуляция синхронной работы сервера
/* console.log('Request data');
setTimeout(()=>{
    console.log('Preparing data');
    console.log('response data');

},2000)*/


// эмуляция асинхронной работы сервера
/* console.log('Request data');
setTimeout(()=>{
    console.log('Preparing data');
    
    setTimeout(()=>{// вложенная конструкция
        console.log('Preparing data');

        setTimeout(()=>{// вложенная конструкция
        console.log('response data');

        
             setTimeout(()=>{// вложенная конструкция
                console.log('response data');
        
            },2000)
        },2000)

    },2000)

},2000)*/



// this is better
/* function f(){
console.log('Request data');
let process = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('Preparing data');
        preparing_data = 'my_data';
        resolve(preparing_data);// когда выполнится выполняем, какое-то другое действие
    },2000) // в ожидании когда процесс выполнится
}).then(preparing_data  => {// когда процесс process выполнится
    console.log(preparing_data);       //то выполним действие

   
    console.log('modified data');
    modified_data = 'return modified my_data';
    return modified_data
}).then(modified_data=>{
    
        console.log(modified_data);       //то выполним действие
    
})
}*/