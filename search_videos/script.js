//Реализовать веб-страницу для поиска фильмов. 
// поиск фильмов по названию или типу, (поиск по жанру, поиск по году)
// +   //макет для поиска - форма, с текст-input и выпадющий список и кнопка
//  +  // запрос к серверу для получения json-файла 
//    //  json-файла распарсить и отобразить на странице

// после получения фильмов необходимо реализовать пагинацию - (разбивка контента  на страницы)

let btn_search = document.getElementById('btn_search'); // btn_search
//    // запрос к серверу для получения json-файла 
//http://www.omdbapi.com/?apikey=[yourkey]&
const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=23f82659';


function sendRequest(url) {
    return fetch(url).then(response => { return response.json() }) // fetch  возвращает promise    
}

/*GET request */
btn_search.addEventListener('click', function() {
        // механика поиска 
        // t -title
        // url   +   &t= + "hello"
        title = document.getElementById('title').value;
        if (title != '') {
            requestUrl = url + '&t="' + title + '"';
        } else {
            requestUrl = url;
        }
        sendRequest(requestUrl)
            .then(data => (
                get_movie(data))) //в случае успешного выполнения кода
            .catch(err => (
                console.log('error data', err))) //в случае неуспешного выполнения кода
    }

);

//    //  json-файла распарсить и отобразить на странице
function get_movie(obj) {
    // for (el in array) {
    console.log(obj);
    block_movie(obj);


}

//create one the block of movie
function block_movie(obj) {
    /*title */
    title = document.createElement('h3');
    title.innerHTML = obj["Title"];
    document.body.append(title);

    /*poster */
    poster = document.createElement('div');
    poster.innerHTML = '<img style="width:150px; height:300px;" src="' + obj["Poster"] + '">';
    document.body.append(poster);

    /*btn_deatails */
    btn_details = document.createElement('input');
    btn_details.type = "button";
    btn_details.value = "details";
    document.body.append(btn_details);
}