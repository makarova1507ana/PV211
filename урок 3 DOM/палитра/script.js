/*1 способ*/
// function setcolored() {
//     document.querySelector('p').style.color = 'red';
// }

// function setcolorblue() {
//     document.querySelector('p').style.color = 'rgb(32, 32, 163)';
// }

// function setcolorlightblue() {
//     document.querySelector('p').style.color = 'rgb(0, 217, 255)';
// }


/*2 способ */
// btns = document.querySelectorAll('button');
// p = document.querySelector('p');
// setcolor = (event) => {
//     //console.log(event.target); // возвращает объект на который было произведено нажатие
//     //console.log(event.target.value)
//     p.style.color = event.target.value;
//     //console.log('č');
// }
// btns.forEach(btn => { // для каждого btn добавиляеться listener 
//     btn.addEventListener('click', setcolor);
//     // console.log(btn)
// });


btns = document.querySelectorAll('button');
p = document.querySelector('p');

btns.forEach(btn => { // для каждого btn добавиляеться listener 
    btn.addEventListener('click', setcolor = (event) => {
        p.style.color = event.target.value;
    })
});