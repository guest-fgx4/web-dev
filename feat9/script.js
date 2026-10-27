//TODO: IMPLEMENT OTHER TABLE FOR CATEGORY
const category = ["informatica", "eletronicos", "acessorios", "casa", "calcados", "roupas", "livros"]


const data = {
    products:
        [
            {
                "id": 2,
                "nome": "Teclado Mecânico RGB",
                "preco": 299.90,
                "categoria": 0,
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Teclado mecânico compacto com iluminação RGB e switches de alta precisão.",
                "emEstoque": true
            },
            {
                "id": 3,
                "nome": "Mouse Gamer",
                "preco": 179.90,
                "categoria": 0,
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Mouse gamer ergonômico com sensor de alta precisão e iluminação RGB.",
                "emEstoque": true
            },
            {
                "id": 4,
                "nome": "Cadeira Gamer",
                "preco": 899.90,
                "categoria": 0,
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Cadeira gamer ergonômica com apoio lombar e ajustes de altura e inclinação.",
                "emEstoque": false
            },
            {
                "id": 5,
                "nome": "Smartwatch Esportivo",
                "preco": 399.90,
                "categoria": 1,
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Smartwatch com monitoramento de atividades físicas, batimentos cardíacos e notificações.",
                "emEstoque": true
            },
            {
                "id": 6,
                "nome": "Mochila para Notebook",
                "preco": 129.90,
                "categoria": 2,
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Mochila resistente com compartimento acolchoado para notebooks de até 15,6 polegadas.",
                "emEstoque": true
            },
            {
                "id": 7,
                "nome": "Garrafa Térmica Inox",
                "preco": 89.90,
                "categoria": 3,
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Garrafa térmica de aço inoxidável com capacidade de 750ml.",
                "emEstoque": true
            },
            {
                "id": 8,
                "nome": "Tênis Esportivo",
                "preco": 249.90,
                "categoria": 4,
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Tênis leve e confortável para corridas, caminhadas e atividades físicas.",
                "emEstoque": true
            },
            {
                "id": 9,
                "nome": "Camiseta Básica",
                "preco": 59.90,
                "categoria": 5,
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Camiseta básica de algodão, confortável e disponível em diversas cores.",
                "emEstoque": true
            },
            {
                "id": 10,
                "nome": "Luminária de Mesa LED",
                "preco": 79.90,
                "categoria": 3,
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Luminária de mesa LED com controle de intensidade e diferentes temperaturas de luz.",
                "emEstoque": false
            },
            {
                "id": 11,
                "nome": "Power Bank 20000mAh",
                "preco": 159.90,
                "categoria": 1,
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Bateria portátil de 20000mAh com duas portas USB para carregamento simultâneo.",
                "emEstoque": true
            },
            {
                "id": 12,
                "nome": "Livro de Programação",
                "preco": 119.90,
                "categoria": 6,
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Livro introdutório sobre programação e desenvolvimento de aplicações modernas.",
                "emEstoque": true
            }


        ]
}

pageData = {
    control: { "currentId": 1 },
    data: [{
        "id": 1,
        "nome": "Fone de Ouvido Bluetooth",
        "preco": 149.9,
        "categoria": 1,
        "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "descricao": "Fone de ouvido sem fio com conexão Bluetooth e bateria de longa duração.",
        "emEstoque": true
    },]
}

const selectElement = document.getElementById("category-format")
const selectDetail = document.getElementById("category-detail")
const selectCategory = document.querySelectorAll("#category")
const getProductList = document.querySelector("#product-list")
const getProductdetails = document.querySelectorAll(".product-details")
const getProductCards = document.querySelectorAll(".card")
const productDetailResult = document.getElementById("result-show-product")


const btnformat = document.getElementById("btn-format-price")
const btnCreateCard = document.getElementById("btn-create-card")
const btnFilter = document.getElementById("btn-filter")
const btnFilterReset = document.getElementById("btn-filter-reset")
const btnShowDetail = document.getElementById("btn-show-detail")



function dataToJson(id, nome, preco, categoria, imagem, descricao, emEstoque) {

    return {

        "id": id,
        "nome": nome,
        "preco": preco,
        "categoria": categoria,
        "imagem": imagem,
        "descricao": descricao,
        "emEstoque": emEstoque
    }
}

function updatePage(params, append = false, clearScreen = false) {

    if (clearScreen)
    {
        getProductList.innerHTML = "";
    }

    
    if (!append) {
        params.forEach(e => {
            getProductList.innerHTML += createCard(e)
        })
    }


    selectElement.innerHTML = "";
    pageData.data.forEach(e => {
        selectElement.innerHTML += `<option value="${e.id}">${e.nome}</option>`
    })

    selectDetail.innerHTML = "";
    params.forEach(e => {
        selectDetail.innerHTML += `<option value="${e.id}">${e.nome}</option>`
    })
}


function createCard(element) {
    let cardHtml = `<div class="col">
                        <div id="card-${element.id}" class="card" style="width: 18rem; border-style: dashed; border-color: red">
                            <img src="https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" style="height: 150px;" alt="...">
                            <div class="card-body">
                                <h5 class="card-title card-id">${element.id}</h5>
                                <h5 class="card-title card-name">${element.nome}</h5>
                                <h5 class="card-title card-price">${element.preco}</h5>
                                <p class="card-text card-category">${category[element.categoria]}</p>
                                <!-- <p class="card-text product-details">${element.descricao}</p> -- >
                                <a href="#" class="btn btn-primary">ok</a>
                            </div>
                        </div>
                    </div>\n`

    return cardHtml;
}

function formatPrice(params) {

    console.log("valor formPrice");
    console.log(params);

    let item = data.products.find((e) => e.id == params)

    console.log(item);

    const itemCard = document.getElementById(`card-${params}`)

    console.log(itemCard);
    console.log(itemCard.getElementsByClassName("card-price"));
    console.log(itemCard.getElementsByClassName("card-price")[0].innerHTML);

    let price = itemCard.getElementsByClassName("card-price")[0].innerHTML


    if (price.includes("R$")) {
        console.log("ok");
    }
    else {
        console.log("nok");
        itemCard.getElementsByClassName("card-price")[0].innerHTML = "R$ " + Number(price).toFixed(2)
        console.log(price);

    }
}



function createNewCard(params) {

    let id = 0;
    let nome = "";
    let preco = 0.0;
    let categoria = "";
    let imagem = "";
    let descricao = "";
    let emEstoque = false;

    console.log(params);

    const rawdata = params.children;

    console.log(rawdata);

    id = pageData.control.currentId
    pageData.control.currentId++

    nome = rawdata[1].value

    console.log(nome)

    preco = Number(rawdata[3].value)

    console.log(preco)

    categoria = Number(rawdata[5].value)
    imagem = "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    descricao = rawdata[10].value

    pageData.data.push(dataToJson(id, nome, preco, categoria, imagem, descricao, emEstoque))

    if (rawdata[13].children[0].checked)
    {
        const newCard = document.createElement("div")
        newCard.classList.add("col")

        const nestedDiv = document.createElement("div")
        nestedDiv.id = `card-${id}`
        nestedDiv.classList.add("card")
        nestedDiv.style.width = "18rem"
        nestedDiv.style.borderStyle = "dashed"
        nestedDiv.style.borderColor = "blue"
        newCard.appendChild(nestedDiv)

        const img = document.createElement("img");
        img.classList.add("card-img-top")
        img.style.height = "150px"
        img.src = imagem;
        nestedDiv.appendChild(img)

        const nesNesDiv = document.createElement("div")
        nesNesDiv.classList.add("card-body")
        nestedDiv.appendChild(nesNesDiv)

        const h5Id = document.createElement("h5")
        h5Id.classList.add("card-title")
        h5Id.classList.add("card-id")
        h5Id.innerHTML = id
        nesNesDiv.appendChild(h5Id)

        const h5Name = document.createElement("h5")
        h5Name.classList.add("card-title")
        h5Name.classList.add("card-name")
        h5Name.innerHTML = nome
        nesNesDiv.appendChild(h5Name)

        
        const h5Price = document.createElement("h5")
        h5Price.classList.add("card-title")
        h5Price.classList.add("card-price")
        h5Price.innerHTML = preco
        nesNesDiv.appendChild(h5Price)

        const pcategory = document.createElement("p")
        pcategory.classList.add("card-text")
        pcategory.classList.add("card-category")
        pcategory.innerHTML = category[categoria]
        nesNesDiv.appendChild(pcategory)


        getProductList.appendChild(newCard)
    }
    

    // updatePage(pageData.data)
    updatePage(pageData.data,rawdata[13].children[0].checked)

    rawdata[1].value = ""
    rawdata[3].value = 0
    rawdata[5].value = 0
    rawdata[10].value = ""
}


console.log(selectElement);
console.log(getProductList);
console.log(getProductdetails);
console.log(getProductCards);


console.log(pageData);



// data.products.forEach(element => {
//     // selectElement.innerHTML += `<option value="${element.id}">${element.nome}</option>`
//     pageData.push(element)
// });

function render() {
    pageData.data.forEach(e => {
        getProductList.innerHTML += createCard(e)
        pageData.control.currentId++;
    })

    console.log(selectCategory);

    pageData.data.forEach(e => {
        selectElement.innerHTML += `<option value="${e.id}">${e.nome}</option>`
    })

    selectCategory.forEach(e => {
        let index = 0;
        category.forEach(y => {
            e.innerHTML += `<option value="${index}">${category[index++]}</option>`
        })
    })

    pageData.data.forEach(e => {
        selectDetail.innerHTML += `<option value="${e.id}">${e.nome}</option>`
    })
}

render()


btnformat.addEventListener("click", () => {
    // console.log("Hello");
    formatPrice(selectElement.value)
})

btnCreateCard.addEventListener("click", () => {
    let currentForm = document.getElementById("create-form-like")
    createNewCard(currentForm)
})

btnFilter.addEventListener("click", () => {
    let selectedCategory = document.getElementsByClassName("btn-filter-selection")[0].value
    updatePage(pageData.data.filter((e) => e.categoria == selectedCategory))
})

btnFilterReset.addEventListener("click", () => {
    updatePage(pageData.data)
})

btnShowDetail.addEventListener("click", () => {
    alert(pageData.data.filter((e) => e.id == selectDetail.value)[0].descricao)
})