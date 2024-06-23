/*Создать html-страницу с формой для логина пользователя и 
галочкой «Запомнить меня». После заполнения формы вывести на 
экран: «Привет, Имя! Я тебя запомнил/не запомнил». */

// !!!!!!!!!!!!! не удалось поработать с модальным окном бутстрап
const btnFormUser = document.querySelector('#btnFormUser')
function showUserInformation (e) {
    e.preventDefault(e);
    let username = document.querySelector('#username')
    let exampleCheck = document.querySelector('#exampleCheck').checked
    alert(`«Привет, ${username.value}! ${exampleCheck ? 'я тебя запомнил' : 'я не запомнил' }.`)
    username.value = ''
}
btnFormUser.addEventListener('click', showUserInformation )
//////////////////////////////////////////////////////////////////




