const data = {
    products:
        [
            {
                "id": 1,
                "nome": "Fone de Ouvido Bluetooth",
                "preco": 149.9,
                "categoria": "eletronicos",
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Fone de ouvido sem fio com conexão Bluetooth e bateria de longa duração.",
                "emEstoque": true
            },
            {
                "id": 2,
                "nome": "Teclado Mecânico RGB",
                "preco": 299.90,
                "categoria": "informatica",
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Teclado mecânico compacto com iluminação RGB e switches de alta precisão.",
                "emEstoque": true
            },
            {
                "id": 3,
                "nome": "Mouse Gamer",
                "preco": 179.90,
                "categoria": "informatica",
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Mouse gamer ergonômico com sensor de alta precisão e iluminação RGB.",
                "emEstoque": true
            },
            {
                "id": 4,
                "nome": "Cadeira Gamer",
                "preco": 899.90,
                "categoria": "informatica",
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Cadeira gamer ergonômica com apoio lombar e ajustes de altura e inclinação.",
                "emEstoque": false
            },
            {
                "id": 5,
                "nome": "Smartwatch Esportivo",
                "preco": 399.90,
                "categoria": "eletronicos",
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Smartwatch com monitoramento de atividades físicas, batimentos cardíacos e notificações.",
                "emEstoque": true
            },
            {
                "id": 6,
                "nome": "Mochila para Notebook",
                "preco": 129.90,
                "categoria": "acessorios",
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Mochila resistente com compartimento acolchoado para notebooks de até 15,6 polegadas.",
                "emEstoque": true
            },
            {
                "id": 7,
                "nome": "Garrafa Térmica Inox",
                "preco": 89.90,
                "categoria": "casa",
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Garrafa térmica de aço inoxidável com capacidade de 750ml.",
                "emEstoque": true
            },
            {
                "id": 8,
                "nome": "Tênis Esportivo",
                "preco": 249.90,
                "categoria": "calcados",
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Tênis leve e confortável para corridas, caminhadas e atividades físicas.",
                "emEstoque": true
            },
            {
                "id": 9,
                "nome": "Camiseta Básica",
                "preco": 59.90,
                "categoria": "roupas",
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Camiseta básica de algodão, confortável e disponível em diversas cores.",
                "emEstoque": true
            },
            {
                "id": 10,
                "nome": "Luminária de Mesa LED",
                "preco": 79.90,
                "categoria": "casa",
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Luminária de mesa LED com controle de intensidade e diferentes temperaturas de luz.",
                "emEstoque": false
            },
            {
                "id": 11,
                "nome": "Power Bank 20000mAh",
                "preco": 159.90,
                "categoria": "eletronicos",
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Bateria portátil de 20000mAh com duas portas USB para carregamento simultâneo.",
                "emEstoque": true
            },
            {
                "id": 12,
                "nome": "Livro de Programação",
                "preco": 119.90,
                "categoria": "livros",
                "imagem": "https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "descricao": "Livro introdutório sobre programação e desenvolvimento de aplicações modernas.",
                "emEstoque": true
            }


        ]
}

function createCard(element) {
    let cardHtml = `<div class="col">
                        <div id="card-${element.id}" class="card" style="width: 18rem;">
                            <img src="https://images.unsplash.com/photo-1779896412317-5768a1911afb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" style="height: 150px;" alt="...">
                            <div class="card-body">
                                <h5 class="card-title card-id">${element.id}</h5>
                                <h5 class="card-title card-name">${element.nome}</h5>
                                <h5 class="card-title card-price">${element.preco}</h5>
                                <p class="card-text card-category">${element.categoria}</p>
                                <p class="card-text product-details">${element.descricao}</p>
                                <a href="#" class="btn btn-primary">ok</a>
                            </div>
                        </div>
                    </div>\n`

    return cardHtml;
}

function formatPrice(params) {

    console.log(params);

    let item = data.products.find((e) => e.id == params)

    console.log(item);

    const itemCard = document.getElementById(`card-${params}`)

    console.log(itemCard);
    console.log(itemCard.getElementsByClassName("card-price"));
    console.log(itemCard.getElementsByClassName("card-price")[0].innerHTML);

    let price = itemCard.getElementsByClassName("card-price")[0].innerHTML
    

    if (price.includes("R$"))
    {
        console.log("ok");
    }
    else
    {
        console.log("nok");
        itemCard.getElementsByClassName("card-price")[0].innerHTML = "R$ " + Number(price).toFixed(2)
        console.log(price);
        
    }
}


addEventListener

const selectElement = document.getElementById("category-format")
const getProductList = document.querySelector("#product-list")
const getProductdetails = document.querySelectorAll(".product-details")
const getProductCards = document.querySelectorAll(".card")
const productDetailResult = document.getElementById("result-show-product")


const btnformat = document.getElementById("btn-format-price")


console.log(selectElement);
console.log(getProductList);
console.log(getProductdetails);
console.log(getProductCards);




data.products.forEach(element => {
    selectElement.innerHTML += `<option value="${element.id}">${element.nome}</option>`
});

data.products.forEach(e => {
    getProductList.innerHTML += createCard(e)
})

btnformat.addEventListener("click", () => {
    // console.log("Hello");
    formatPrice(selectElement.value)
})
