const persons = document.getElementById('persons')
const starships = document.getElementById('starships')
const planets = document.getElementById('planets')

fillCounters()
function fillCounters(){
	Promise.all([
		getData('people/'),
		getData('starships/'),
		getData('planets')
	])
	.then(data => {
		persons.style.fontSize = 'Sem'
		starships.style.fontSize = 'Sem'
		planets.style.fontSize = 'Sem'

		persons.innerHTML = data[0].count
		starships.innerHTML = data[1].count
		planets.innerHTML = data[2].count
	})
	.catch(err => console.log('Erro:', err))
}
fillCounters()
function getData(param){
	return fetch(`https://swapi.dev/api/${param}`)
		.then(res => res.json())
}
loadPhrase()
	function loadPhrase(){
	const btn = document.getElementById('btn-phrases')
	const phrase = document.getElementById('phrase')
	btn.addEventListener('click', (event) => {
		return fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
		.then(data => data.json())
		.then(json => {
			console.log(json)
			btn.innerHTML = 'ver mais uma frase!'
			phrase.innerHTML = `"${json.content}"`

			phrase.animate([
				{ transform: 'translateY(-70px)'},
				{ transform: 'translateY(0px)'}
				],{duration:500})
		})
		.catch(err => console.log('Erro:', err))
	})
}

/*7 - Passamos as promises, quando terminar iremos ter uma resposta de sucesso ou erro.
 getData passando os parâmetros que precisamos receber, se der certo irá cair em 
 .then mostrando todos os dados, se der erro irá cair em .catch mostando nosso erro.
 */