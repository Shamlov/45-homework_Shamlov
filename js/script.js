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


let country = document.querySelector('#country')
let countryText
let cities = document.querySelector('#cities')
let citiesText
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

    let result = document.querySelector('#result')
    result.innerHTML = `
            <p>result</p>
        <table class="w-100">
          <tr>
            <td>Имя</td>
            <td>${firstName}</td>
          </tr>
          <tr>
            <td>Фамилия</td>
            <td>${lastName}</td>
          </tr>
          <tr>
            <td>Дата рождения</td>
            <td>${date}</td>
          </tr>
          <tr>
            <td>Пол</td>
            <td>${getder}</td>
          </tr>
          <tr>
            <td>Страна</td>
            <td>${countryText}</td>
          </tr>
          <tr>
            <td>Город</td>
            <td>${citiesText}</td>
          </tr>
          <tr>
            <td>Навыки</td>
            <td>${skillsUser}</td>
          </tr>
        </table>
      </div>
    
    `



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


function onChange1() {
    citiesText = cities.options[cities.selectedIndex].text;
}
cities.onchange = onChange1;
onChange1();

saveBtn.addEventListener('click', collectFormData)
// нужно еще допиливать мелкие проверки на пустые строки и пр. но само построение ясно. В HTML не все впорядке со вложенностью блоков по Бутстрапу . не успел допилить 
/////////////////////////////////////////////////////////////////////////


// дальше уже не хватило времени. 