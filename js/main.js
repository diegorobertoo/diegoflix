var muralDeFilmes = ['https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-filme-eu-sou-lenda-pode-ser-usado-nas-aulas-biologia-por-abordar-temas-como-doencas-virais-imunizacao-5bcf030bce2eb.jpg', 'https://br.web.img3.acsta.net/medias/nmedia/18/91/21/46/20532444.jpg']; //listaDeFilmes
var nomeDeFilmes = ['Eu Sou a Lenda', 'Guerra Mundial Z'];

//Atualiza a Lista de Filmes no Mural
function listarFilme() {
    const elementoLista = document.querySelector("#listaFilmes");
    var select = document.querySelector("#muralRemover");

    for (var i = select.options.length - 1; i >= 0; i--) {
        select.remove(i);
    }
    elementoLista.innerHTML = "";

    for (var i = 0; i < muralDeFilmes.length; i++) {
        elementoLista.innerHTML += "<figure><img src=" + muralDeFilmes[i] + "><figcaption>" + nomeDeFilmes[i] + "</figcaption></figure>";

    select.add(new Option(nomeDeFilmes[i], nomeDeFilmes[i]));
    }
}

//Verifica o Link do Campo se há erros
function verificarLink() {
    var filmeFavorito = document.getElementById("filme").value;
    var nomeFilmeFavorito = document.getElementById("nomeFilme").value;
    
    if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".jpeg") || filmeFavorito.endsWith(".png")) {
    
        adicionarFilme(filmeFavorito, nomeFilmeFavorito);
    } 
  
    else {
        var erro = document.getElementById("mensagem");
        mensagem.innerHTML = "Endereço de filme inválido, pois não contém arquivo de imagem (JPG, JPEG ou PNG)!";
    }
    document.getElementById("filme").value = "";
    document.getElementById("nomeFilme").value = "";
}

//Efetua a inserção de filmes no mural
function adicionarFilme(filmeFavorito, nomeFilmeFavorito) {
    var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
    var elementoNomeFilmeFavorito = nomeFilmeFavorito;
    
    //Verifica se o filme já existe
    if (muralDeFilmes.includes(filmeFavorito) || nomeDeFilmes.includes(nomeFilmeFavorito)) {
        var mensagem = document.getElementById("mensagem");
        mensagem.innerHTML = "Filme já existente no mural!";
        document.getElementById("listaFilmes").value = "";
    } 
    
    else {
        //Incluir o filme inserido no SELECT para remoção posterior
        var mensagem = document.getElementById("mensagem");
        mensagem.innerHTML = "Filme inserido com sucesso!";
        
        //Insere o filme no ARRAY
        muralDeFilmes.push(filmeFavorito);
        nomeDeFilmes.push(nomeFilmeFavorito);

        //Imprime na tela
        listarFilme();

        document.getElementById("filme").value = "";
        document.getElementById("nomeFilme").value = "";
    }
  }

//Remover Filme do mural
function removerFilme() {
    var mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "Filme removido do mural com sucesso!";
    var elementoRemoverFilme = document.querySelector("#muralRemover").value;
  
    if (nomeDeFilmes.indexOf(elementoRemoverFilme) > -1) {
      var posicao = nomeDeFilmes.indexOf(elementoRemoverFilme);
      nomeDeFilmes.splice(posicao, 1);
      muralDeFilmes.splice(posicao, 1);
    }
    listarFilme();
}