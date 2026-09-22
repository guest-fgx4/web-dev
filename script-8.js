const catalogo = [
    {
        "id": 0,
        "tituto": "O mito",
        "Tipo": "Serie",
        "ano": 2020,
        "genero": ["comedia", "animacao"],
        "nota": 9.0,
        "assistido": false
    },
    {
        "id": 1,
        "tituto": "O mestre",
        "Tipo": "Filme",
        "ano": 1998,
        "genero": ["Acao", "luta", "porrada", "bomba"],
        "nota": 4.0,
        "assistido": false
    },
    {
        "id": 2,
        "tituto": "Joao",
        "Tipo": "Filme",
        "ano": 2026,
        "genero": ["Drama", "horror"],
        "nota": 7.0,
        "assistido": true
    },
    {
        "id": 3,
        "tituto": "A fuga das galinhas",
        "Tipo": "Filme",
        "ano": 1976,
        "genero": ["comedia", "animacao"],
        "nota": 1.0,
        "assistido": false
    },
]
console.log(catalogo)


catalogo.forEach(e => {
    console.log(`[${e.Tipo}] ${e.tituto} (${e.ano})`)
});

const map1 = catalogo.map((x) => x.tituto.toUpperCase())

console.log(map1);

const filtro = catalogo.filter((x) => x.assistido == true)

console.log(filtro);

const initValue = 0;
const mediaTotal = catalogo.reduce((soma, e) => soma + e.nota, initValue)

console.log((mediaTotal / catalogo.length).toFixed(2));

const mediaAss = filtro.reduce((soma, e) => soma + e.nota, initValue)
console.log(mediaAss.toFixed(2));

const funAno = (e) => e.ano < 2000;
const funGen = (e) => e.genero.length >= 1;

const funSerie = (e) => e.Tipo == 'Serie';
const funFilme = (e) => e.Tipo == 'Filme';

const exist = catalogo.some(funAno)

const quantSerie = catalogo.filter((e) => funSerie(e))
const quantFilme = catalogo.filter((e) => funFilme(e))

console.log(exist);

const gen = catalogo.every(funGen)

console.log(gen);

var dom = document.getElementById("output")

console.log(dom);


const sortedArray = catalogo.toSorted((a, b) => b.nota - a.nota);



dom.innerHTML = dom.innerHTML + `<h3>Total de items no catalogo: ${catalogo.length}</h3>` +
    `<h3>Total de filmes no catalogo: ${quantFilme.length}</h3>` +
    `<h3>Total de serie no catalogo: ${quantSerie.length}</h3>` +
    `<h3>Quantidade nao assistidos no catalogo: ${filtro.length}</h3>` +
    `<h3>Quantidade nao assistidos no catalogo: ${catalogo.length - filtro.length}</h3>` +
    `<h3>Media geral de notas no catalogo: ${(mediaTotal / catalogo.length).toFixed(2)}</h3>`;

dom.innerHTML = dom.innerHTML + `<br><br>`
dom.innerHTML = dom.innerHTML + `<h3>Filmes com a maior pontuacao</h3>`
dom.innerHTML = dom.innerHTML + `<br><br>`



for (let index = 0; index < 3; index++) {
    dom.innerHTML = dom.innerHTML + `<h3>Nome do filme: ${sortedArray[index].tituto}</h3>`
    dom.innerHTML = dom.innerHTML + `<h3>Nome do filme: ${sortedArray[index].nota}</h3>`
    dom.innerHTML = dom.innerHTML + `<br><br>`
}

