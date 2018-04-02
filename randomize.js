const students = ['Sofi', 'Eve', 'Shei', 'Pau', 'Sari', 'Vanesa', 'Dana', 'Gise', 'Rodri', 'Pato', 'Lucho', 'Leandro', 'Nico', 'Lean G.', 'Fede', 'Meli', 'Tomás', 'Leo', 'Maxi', 'Gaby'];

const questions = [
	'¿En qué lugar se ejecuta el código PHP?',
	'¿Cuáles son la marcas para la inserción de código PHP en páginas HTML? (Pizarrón)',
	'¿Cómo se puede iniciar un array en PHP de forma correcta? (Pizarrón)',
	'¿Cómo se declara una variable tipo integer de forma correcta? (Pizarrón)',
	'¿Cuáles son operadores de comparación?',
	'¿Cómo se puede concatenar dos strings en PHP?',
	'¿Cuál es la sintaxis correcta de un IF? (Pizarrón)',
	'¿Estructura de control más comun para repetir un bloque de código un número determinado de veces?',
	'¿Cúal es la manera correcta de escribir un if ternario? (Pizarrón)',
	'¿Qué problema tiene la expresión "<?= $algo ?>"?',
	'¿Cuál es la diferencia entre "include" y "require"?',
	'Al enviar algo por $_POST ¿Cuál es la restricción de longitud del query string?',
	'¿Cómo se obtiene la información de un formulario que ha sido enviado mediante el método GET? (Pizarrón)',
	'¿Cómo se encripta una contraseña?',
	'¿Dónde se guarda la información de la $_SESSION?',
	'¿Para qué se usa una $_COOKIE?',
	'¿Cual función se emplea para abrir / escribir / cerrar un archivo de texto?',
	'¿Qué funciones usamos para operar con JSON?',
	'Si quisieramos redireccionar a otro archivo / página ¿qué tenemos que hacer? (Pizarrón)',
	'Cómo hacemos para operar dentro de una función con una variable global'
]

const btnP = document.querySelector('#btn-P');
const btnQ = document.querySelector('#btn-Q');
const btnT = document.querySelector('#btn-T');

const random = () => {
	const h1 = document.querySelector('h1');
	const question = document.querySelector('.question');

	btnP.style.display = 'none';
	btnQ.style.display = 'block';

	if (students.length > 0) {					
		let words1 = ['elegid@', 'afortunad@', 'bendecid@', 'iluminad@', 'ganador@'];
		let words2 = ['sacrificad@', 'damnificad@', 'inmolad@', 'perjudicad@', 'afectad@'];
		let n = Math.floor(Math.random() * students.length);
		let student = students[n];
		students.splice(n, 1);
		question.innerText = 'Pregunta: ';
		h1.innerHTML = student;
		document.querySelector('span').innerHTML = words1[Math.floor(Math.random() * words1.length)];
		document.querySelector('del').innerHTML = words2[Math.floor(Math.random() * words2.length)];
	} else {
		question.style.display = 'none';
		h1.style.fontSize = '4em';
		h1.innerHTML = 'No hay a quien más elegir 😲';
		document.querySelector('#txt').innerHTML = '';
		document.querySelector('.buttons-container').style.display = 'none';
	}
}

btnP.addEventListener('click', random);

const question = () => {
	let n = Math.floor(Math.random() * questions.length);
	document.querySelector('.question').innerText = 'Pregunta: ' + questions[n];
	questions.splice(n, 1);
	btnQ.style.display = 'none';
	btnT.style.display = 'block';
}

btnQ.addEventListener('click', question);

const counter = () => {
	const miliSecondsTxt = document.querySelector('.counter em');

	document.querySelector('.overlay').style.display = 'flex';
	let seconds = 3;
	let miliseconds = 99;
	document.querySelector('.seconds').innerText = seconds;
	miliSecondsTxt.innerText = miliseconds;

	const sec = setInterval( () => {
		if (seconds <= 30 && seconds > 0) {
			--seconds;
			document.querySelector('.counter span').innerText = seconds;
			if (seconds === 0) {
				clearInterval(mili);
				miliSecondsTxt.innerText = '00';
				document.querySelector('.counter').style.animationPlayState = 'paused';
				document.querySelector('audio').play();
			}
		}
	}, 1000);

	const mili = setInterval( () => {
		if (miliseconds < 0) {
			miliseconds = 99;
			miliSecondsTxt.innerText = miliseconds;
		} else if (miliseconds < 10) {
			miliseconds -= 1;
			miliSecondsTxt.innerText = '0' + miliseconds;
		} else {
			miliseconds -= 1;
			miliSecondsTxt.innerText = miliseconds;
		}
	}, 10);

	const close = () => {
		clearInterval(sec);
		clearInterval(mili);
		miliSecondsTxt.innerText = '00';
		document.querySelector('.overlay').style.display = 'none';
		document.querySelector('.seconds').innerText = '0';
		document.querySelector('audio').pause();
		document.querySelector('audio').currentTime = 0;

		let counterWrap = document.querySelector('.counter');

		if (counterWrap.hasAttribute('style')){
			counterWrap.removeAttribute('style');
		}

		btnT.style.display = 'none';
		btnP.style.display = 'block';
	}

	const btnClose = document.querySelector('#close');
	btnClose.addEventListener('click', close);
}

btnT.addEventListener('click', counter);