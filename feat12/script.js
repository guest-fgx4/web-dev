const API_URL = "http://localhost:3000/";

const getMovieList = document.getElementById("movie-list");

function h(tag, classes, innerValue) {
  element = document.createElement(tag);

  if (Array.isArray(classes)) {
    classes.forEach((e) => {
      element.classList.add(e);
    });
  } else {
    console.log("erro: classes is not an array");
  }
  if (innerValue != null) element.innerHTML = innerValue;

  return element;
}

function render(dados) {
  dados.forEach((e) => {
    col = h("div", ["col-3"]);
    root = h("div", ["card", "h-100"]);
    col.appendChild(root);

    img = h("img", ["card-img-top"]);
    img.src = e.imagem;
    root.appendChild(img);

    innerDiv = h("div", ["card-body"]);
    innerDiv.appendChild(h("h5", ["card-title"], e.nome));
    innerDiv.appendChild(h("p", ["card-text"], e.descricao));
    root.appendChild(innerDiv);

    cardFooter = h("div", ["card-footer"]);
    cardFooter.appendChild(
      h(
        "small",
        ["text-body-secondary"],
        `Nota: ${e.categoria} | Ano: ${e.preco}`,
      ),
    );
    root.appendChild(cardFooter);

    getMovieList.appendChild(col);
  });
}



const formSearch = document.getElementById("search-form");

async function searchTitle(event) {
  event.preventDefault();

  const spinnerLoading = document.getElementById("spinner-fetch");
  spinnerLoading.classList.remove("d-none");

  // console.log(event);
  var formEntries = new FormData(formSearch);
  // console.log(formEntries.get('search-term'));
  getMovieList.innerHTML = "";
  fetch(API_URL + "products?" + `q=${formEntries.get("search-term")}`)
    .then((res) => res.json())
    .then((dados) => {
      
      if (dados.length != 0) {
        render(dados);
      } else {
        getMovieList.innerHTML = "<p>SEM FILMES</p>";
      }
    })
    .catch((e) => console.log(e))
    .finally(() => {
      spinnerLoading.classList.add("d-none");
    });
}

async function resetSearch(event) {
  carregarFilmes();
}

async function carregarFilmes() {
  const spinnerLoading = document.getElementById("spinner-fetch");
  spinnerLoading.classList.remove("d-none");

  getMovieList.innerHTML = "";
  fetch(API_URL + "products")
    .then((res) => res.json())
    .then((dados) => {
      
      render(dados);
    })
    .catch((e) => console.log(e))
    .finally(() => {
      spinnerLoading.classList.add("d-none");
    });
}

formSearch.addEventListener("submit", searchTitle);
formSearch.addEventListener("reset", resetSearch);

window.onload = () => {
  carregarFilmes();
};
