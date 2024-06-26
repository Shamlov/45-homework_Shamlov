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

/*Создать html-страницу с формой для регистрации пользова-
теля. Форма должна состоять из указания почты, логина, пароля 
(2 раза). После заполнения формы вывести на экран: «На почту 
такую-то отправлено письмо с подтверждением». */


const btnUserRegistration = document.querySelector('#btnUserRegistration')
function showNewUserInfo(e) {
    e.preventDefault(e);
    const email = document.querySelector('#email')
    const newPassword = document.querySelector('#newPassword')
    const newPasswordRepeat = document.querySelector('#newPasswordRepeat')
    const newLogin =  document.querySelector('#newLogin')
    if(email.value.length == 0 || newPassword.value.length == 0 || newPasswordRepeat.value.length == 0 || newLogin.value.length == 0) {
        alert('введите данные')
        return
    }
    if(newPassword.value != newPasswordRepeat.value ) {
        alert('ПАРОЛИ НЕ СОВПАДАЮТ')
    }
    alert(`На почту ${email.value} отправлено письмо с подтверждением`)
}

btnUserRegistration.addEventListener('click', showNewUserInfo)

/////////////////////////////////////////////////////////////////////////

/*Создать html-страницу с формой для заполнения информации 
о пользователе. После заполнения формы вывести всю введенную 
информацию в текстовом виде. */

const saveBtn = document.querySelector('#saveBtn')
const citiesListArr = [
    ['Москва' , 'Рязань' , 'Воронеж'],
    ['Вашингтон' , 'Нью-Йорк'],
    ['Торонто' , 'Монреаль'],
    ['Акаа' , 'Карккила'],
    ['Токио' , 'Хиросима'],
    ['Шанхай' , 'Пекин' , 'Шенгжень'],
]

function showRegistrationForm() {

}
let country = document.querySelector('#country')
let countryText
let cities = document.querySelector('#cities')
function collectFormData(e) {
    e.preventDefault(e);
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let date = document.querySelector('#date').value
    let getder = document.querySelectorAll('input[name="getder"]')
    let skills = document.querySelectorAll('.skills input[type="checkbox"]')
    let skillsUser = ''

    getder.forEach((element) => {
        if(element.checked) {     
            if(element.value == 'male') {
                getder = 'Мужчина'
            }
            if(element.value == 'female') {
                getder = 'Женщина'
            }
        }
    })

    skills.forEach((element) => {
        if(element.checked) {
            skillsUser += `${element.value}, `   // !!!!!! как убрать в последнем элементе запятую и пробел
        }
    }
    )
}

function onChange() {
    countryText = country.options[country.selectedIndex].text;
    if(country.value == 'false') {
        return
    }
    if(country.value == '0') {     // тут конечно сделал не правильно . страны необходимо загнать тоже в массив и работать с ними в JS. но сделал так  для отработки 
        cities.innerHTML =''
        citiesListArr[0].forEach((el, index) => {
            cities.append(document.createElement('option'))
            cities.querySelectorAll('option')[index].textContent = el
        }
        )        
    }
    if(country.value == '1') {
        cities.innerHTML =''
        citiesListArr[1].forEach((el, index) => {
            cities.append(document.createElement('option'))
            cities.querySelectorAll('option')[index].textContent = el
        }
        )        
    }
    if(country.value == '2') {
        cities.innerHTML =''
        citiesListArr[2].forEach((el, index) => {
            cities.append(document.createElement('option'))
            cities.querySelectorAll('option')[index].textContent = el
        }
        )        
    }
    if(country.value == '3') {
        cities.innerHTML =''
        citiesListArr[3].forEach((el, index) => {
            cities.append(document.createElement('option'))
            cities.querySelectorAll('option')[index].textContent = el
        }
        )        
    }
    if(country.value == '4') {
        cities.innerHTML =''
        citiesListArr[4].forEach((el, index) => {
            cities.append(document.createElement('option'))
            cities.querySelectorAll('option')[index].textContent = el
        }
        )        
    }
    if(country.value == '5') {
        cities.innerHTML =''
        citiesListArr[5].forEach((el, index) => {
            cities.append(document.createElement('option'))
            cities.querySelectorAll('option')[index].textContent = el
        }
        )        
    }
}
country.onchange = onChange;
onChange();

saveBtn.addEventListener('click', collectFormData)


/////////////////////////////////////////////////////////////////////////