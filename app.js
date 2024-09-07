function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // se campoPesquisa estiver vazio ou conter apenas espaços em branco
    if (campoPesquisa.trim() === "") {
      section.innerHTML = ` <p class="descricao-meta">Por favor, digite um termo de pesquisa válido.</p>`;
    return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()
          
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let sinopse = "";
    let gênero = "";
    let autor = "";
    let publicação = "";
    let tags = "";
             
    // Itera sobre cada dado da lista externa
    for (let dados of dados_externos) {
      titulo = dados.titulo.toLowerCase()
      sinopse = dados.sinopse.toLowerCase()
      gênero = dados.gênero.toLowerCase()
      autor = dados.autor.toLowerCase()
      // Convertendo publicação e tags para string antes de aplicar toLowerCase()
      publicação = String(dados.publicação).toLowerCase();
      tags = String(dados.tags).toLowerCase()
      
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || gênero.includes(campoPesquisa) || autor.includes(campoPesquisa) || publicação.includes(campoPesquisa)) {        
          // Cria uma div para cada resultado
          resultados += `
          <div class="item-resultado">
            <h2>
            <a href="#" target="_blank">${dados.titulo}</a>
            </h2>
            <p class="descricao-meta">${dados.sinopse}</p>
            <p class="descricao-meta">${dados.gênero}</p>
            <p class="descricao-meta">${dados.autor}</p>
            <p class="descricao-meta">${dados.publicação}</p>
          </div>
          `;
      }      
    }
      
    // Insere os resultados na seção HTML
    section.innerHTML = resultados;

    // Verificar se a pesquisa retornou resultados
    if (!resultados) {
      section.innerHTML = `<p class="descricao-meta">Não foram encontrados resultados para "${campoPesquisa}". Verifique a ortografia ou tente outros termos de pesquisa.</p>`;
    } else {
      // Exibir os resultados
    }
  }