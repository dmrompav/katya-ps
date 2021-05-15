let horButtons = document.querySelectorAll('.hor-sli__item')
let verSliders = document.querySelectorAll('.ver-sli')
let verButtons = []

for (let i = 0; i < verSliders.length; i++) {
	verButtons[i] = verSliders[i].querySelectorAll('.ver-sli__item')
}

let ModalContent = [
	[
		{
			name: 'Обо мне',
			p: 'Я ученица 10А класса МБОУ "ПМШ №44". Я увлекаюсь информатикой и программированием. В будущем я хочу стать frontend-разработчиком.'
		},
		{
			name: 'О проекте',
			p: 'Данная страница является частью проектной работы на тему "Разработка frontend части web-приложения<br/><br/>Этот сайт является сайтом-резюме, который поможет потенциалному работаделю узнать о моих навыках и умениях, а также связаться со мной.'
		},
	],
	[
		{
			name: 'Английский',
			p: 'На данный момент мой уровень знания английского языка Advanced(C1)'
		},
		{
			name: 'Немецкий',
			p: 'На данный момент мой уровень знания немецкого языка Begginer(A1)'
		},
		{
			name: 'HTML',
			p: 'Прошла курс из 50 блоков в прилоении SoloLearn'
		},
		{
			name: 'CSS',
			p: 'Прошла курс из 35 блоков в приложении SoloLearn'
		},
		{
			name: 'JS',
			p: 'Прошло курс из 47 блоков в приложении SoloLearn'
		},
	],
	[],
	[
		{
			name: 'Мама',
			p: 'Моя дочь очень хорошая программистка! Она умеет включать компьютер и налаживать принтер! Вау! Я в шоке!'
		},
	],
	[],
];

let x = 0
let y = [0,0,0,0,0]

horButtons.forEach((btn, ind) => {
	btn.addEventListener('click', function () {
		horButtons[x].classList.remove('hor-sli__item--selected')
		horButtons[x].classList.add('hor-sli__item--selectable')
		document.querySelector('.hor-sli').classList.remove(`hor-sli--${x}`)
		document.querySelector('.all-ver').classList.remove(`all-ver--${x}`)
		document.querySelectorAll('.all-ver__ver-sli')[x].classList.add('all-ver__ver-sli--selectable')
		document.querySelectorAll('.all-ver__ver-sli')[x].classList.remove('all-ver__ver-sli--selected')
		x = ind
		horButtons[x].classList.add('hor-sli__item--selected')
		horButtons[x].classList.remove('hor-sli__item--selectable')
		document.querySelector('.hor-sli').classList.add(`hor-sli--${x}`)
		document.querySelector('.all-ver').classList.add(`all-ver--${x}`)
		document.querySelectorAll('.all-ver__ver-sli')[x].classList.add('all-ver__ver-sli--selected')
		document.querySelectorAll('.all-ver__ver-sli')[x].classList.remove('all-ver__ver-sli--selectable')
	})
})

verButtons.forEach(slider => {
	slider.forEach((btn, ind) => {
		btn.addEventListener('click', function () {
			verButtons[x][y[x]].classList.add('ver-sli__item--selectable')
			verButtons[x][y[x]].classList.remove('ver-sli__item--selected')
			verSliders[x].classList.remove(`ver-sli--${y[x]}`)
			y[x] = ind
			verButtons[x][y[x]].classList.add('ver-sli__item--selected')
			verButtons[x][y[x]].classList.remove('ver-sli__item--selectable')
			verSliders[x].classList.add(`ver-sli--${y[x]}`)
			if (btn.classList.contains('openable')) {
				CallModal()
			}
		})
	})
})

function CallModal() {
	document.querySelector('.modal').classList.add('modal--opened')
	document.querySelector('.modal__name').innerHTML = ModalContent[x][y[x]].name
	document.querySelector('.modal__content').innerHTML = ModalContent[x][y[x]].p
	document.querySelector('.modal__tapfield').addEventListener('click', CloseModal, false)
}

function CloseModal() {
	document.querySelector('.modal').classList.remove('modal--opened')
}

