alert('Здравствуйте! Пройдите пожалуйста регистрацию чтоб продолжить.');
name = prompt('Введите ваше имя: ');
info = false;

while(info === false){
	age = 2021 - prompt('Введите ваш год рождения : ');
	if (Number.isNaN(age) || age < 5 || age > 110){
		alert('Введите корректный год рождения !');
	}else{
		info = true;
	}
}

required = 16 - age;

if (required === 1){
	year = 'год';
}else if (1 < required && required < 5){
	year = 'года';
}else{
	year = 'лет';
}

if (age < 16){
	alert(`К сожалению контент нашего сайта предназначен для людей старше 16 лет. Возвращайтесь к нам через ${required} ${year}. `);
	document.body.classList.add('goodbye');
	document.getElementById('btn').classList.remove('visible');
}else{
	genderNumber = prompt('Выберите пол : \n 1 - женский \n 2 - мужской ');
	while(Number.isNaN(genderNumber) || genderNumber < 1 || genderNumber > 2){
	genderNumber = prompt('Выберите (1) или (2). \n 1 - женский \n 2 - мужской');
}

if(genderNumber == 1){
	gender = 'Женщина';
}else{
	gender = 'Мужчина';
}
email = prompt('Укажите ваш электронный адрес: ');
color = prompt('Какая цветовая гамма вам нравится : \n 1 - синий \n 2 - красный');

while(Number.isNaN(color) || color < 1 || color > 2){
	color = prompt('Выберите (1) или (2). \n 1 - синий \n 2 - красный')
}

if(color == 1){
	document.body.classList.add('welcome');
}else{
	document.body.classList.add('welcome-2');
}

document.getElementById("name").innerHTML = name;
document.getElementById("gender").innerHTML = gender;
document.getElementById("age").innerHTML = age;
document.getElementById("email").innerHTML = email;
}

document.getElementById('btn').onclick = function() {
  document.getElementById('info').classList.toggle('active');
}
