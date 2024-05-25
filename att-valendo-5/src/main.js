document.addEventListener("DOMContentLoaded", function () {
    // Função para criar um elemento de texto
    function createTextElement(textContent) {
      return document.createTextNode(textContent);
    }
  
    // Função para carregar o conteúdo principal
    function loadMainContent() {
      // Criação do header
        const header = document.querySelector("header");
        const headerTitle = document.createElement("h1");
        headerTitle.appendChild(createTextElement("Squirtle"));
        header.appendChild(headerTitle);
  
      // Criação da navegação principal
        const nav = document.querySelector("nav");
        const navList = document.createElement("ul");
    
        const infoLink = document.createElement("li");
        const infoAnchor = document.createElement("a");
        infoAnchor.href = "#info-squirtle";
        infoAnchor.appendChild(createTextElement("Informações sobre Squirtle"));
        infoLink.appendChild(infoAnchor);
        navList.appendChild(infoLink);

        const caracLink = document.createElement("li");
        const caracAnchor = document.createElement("a");
        caracAnchor.href = "#caracteristicas";
        caracAnchor.appendChild(createTextElement("Características"));
        caracLink.appendChild(caracAnchor);
        navList.appendChild(caracLink);

        const curiosidadesLink = document.createElement("li");
        const curiosidadesAnchor = document.createElement("a");
        curiosidadesAnchor.href = "#curiosidades";
        curiosidadesAnchor.appendChild(createTextElement("Curiosidades"));
        curiosidadesLink.appendChild(curiosidadesAnchor);
        navList.appendChild(curiosidadesLink);

        const artigoLink = document.createElement("li");
        const artigoAnchor = document.createElement("a");
        artigoAnchor.href = "#artigo-squirtle";
        artigoAnchor.appendChild(createTextElement("Artigo sobre Squirtle"));
        artigoLink.appendChild(artigoAnchor);
        navList.appendChild(artigoLink);

        const recursoLink = document.createElement("li");
        const recursoAnchor = document.createElement("a");
        recursoAnchor.href = "#recurso";
        recursoAnchor.appendChild(createTextElement("Recursos Adicionais"));
        recursoLink.appendChild(recursoAnchor);
        navList.appendChild(recursoLink);

        const evolucaoLink = document.createElement("li");
        const evolucaoAnchor = document.createElement("a");
        evolucaoAnchor.href = "#evolucao";
        evolucaoAnchor.appendChild(createTextElement("Evoluções"));
        evolucaoLink.appendChild(evolucaoAnchor);
        navList.appendChild(evolucaoLink);

    
        nav.appendChild(navList);
    
        // Criação do main
        const main = document.querySelector("main");
    
        const infoSection = document.createElement("section");
        infoSection.id = "info-squirtle";
    
        const infoTitle = document.createElement("h2");
        infoTitle.appendChild(createTextElement("Informações sobre Squirtle"));
        infoSection.appendChild(infoTitle);
        
        const infoDiv = document.createElement("div");
        const squirtleImage1 = document.createElement("img");
        squirtleImage1.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png";
        squirtleImage1.alt = "Squirtle";
        infoDiv.appendChild(squirtleImage1);

        const squirtleImage2 = document.createElement("img");
        squirtleImage2.src = "https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png";
        squirtleImage2.alt = "Squirtle";
        infoDiv.appendChild(squirtleImage2);
        infoSection.appendChild(infoDiv);

        const infoParagraph1 = document.createElement("p");
        infoParagraph1.appendChild(createTextElement("Squirtle é um Pokémon do tipo água. É o Pokémon inicial da região de Kanto e evolui para Wartortle"));
        infoSection.appendChild(infoParagraph1);
    
        main.appendChild(infoSection);


        // Caracateristicas
        const caracteristicaSection = document.createElement("section");
        caracteristicaSection.id = "caracteristicas";

        const caracteristicaTitle = document.createElement("h2");
        caracteristicaTitle.appendChild(createTextElement("Caracteristicas"));
        caracteristicaSection.appendChild(caracteristicaTitle);
    
        const caracteristicaDesc = document.createElement("p");
        caracteristicaDesc.appendChild(createTextElement("Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos como Water Gun e Hydro Pump."));

        caracteristicaSection.appendChild(caracteristicaDesc);
        main.appendChild(caracteristicaSection);


            // Curiosidades
        const curiosidadesArticle = document.createElement("article");
        curiosidadesArticle.id = "curiosidades";
    
        const curiosidadesTitle = document.createElement("h2");
        curiosidadesTitle.appendChild(createTextElement("Curiosidades"));
        curiosidadesArticle.appendChild(curiosidadesTitle);
    
        const curiosidadesList = document.createElement("ul");
    
        const curiosidadesItem1 = document.createElement("li");
        curiosidadesItem1.appendChild(createTextElement("Squirtle é um dos Pokémon mais populares e adoráveis."));
        curiosidadesList.appendChild(curiosidadesItem1);
    
        const curiosidadesItem2 = document.createElement("li");
        curiosidadesItem2.appendChild(createTextElement("Seu nome se deriva da palavra squirrel (esquilo) e turtle (tartaruga)."));
        curiosidadesList.appendChild(curiosidadesItem2);

        const curiosidadesItem3 = document.createElement("li");
        curiosidadesItem3.appendChild(createTextElement("Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon."));
        curiosidadesList.appendChild(curiosidadesItem3);
    
        curiosidadesArticle.appendChild(curiosidadesList);
        main.appendChild(curiosidadesArticle);


            // Artigo sobre Squirtle
        const sobreSquirtleArticle = document.createElement("article");
        sobreSquirtleArticle.id = "artigo-squirtle";

        const sobreSquirtleTitle = document.createElement("h2");
        sobreSquirtleTitle.appendChild(createTextElement("Squirtle: O Amigo Aquático"));
        sobreSquirtleArticle.appendChild(sobreSquirtleTitle);
            
        const sobreSquirtleList = document.createElement("ul");
    
        const squirtleListItem1 = document.createElement("p");
        squirtleListItem1.appendChild(createTextElement("Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes."));
        sobreSquirtleList.appendChild(squirtleListItem1);
    
        const squirtleListItem2 = document.createElement("p");
        squirtleListItem2.appendChild(createTextElement("Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas."));
        sobreSquirtleList.appendChild(squirtleListItem2);

        const squirtleListItem3 = document.createElement("p");
        squirtleListItem3.appendChild(createTextElement("Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas."));
        sobreSquirtleList.appendChild(squirtleListItem3);
    
        sobreSquirtleArticle.appendChild(sobreSquirtleList);
        main.appendChild(sobreSquirtleArticle);


            // Recursos Adicionais
        const recursosAddSection = document.createElement("section");
        recursosAddSection.id = "recurso";

        const recursosAddTitle = document.createElement("h2");
        recursosAddTitle.appendChild(createTextElement("Recursos Adicionais"));
        recursosAddSection.appendChild(recursosAddTitle);

        const recursosAddList = document.createElement("ul");

        const recursosAddItem1 = document.createElement("li");
        const recursoAddAnchor = document.createElement("a");
        recursoAddAnchor.href = "https://www.pokemon.com/br/pokedex/squirtle";
        recursoAddAnchor.appendChild(createTextElement("Pokédex - Squirtle"));
        recursosAddItem1.appendChild(recursoAddAnchor);
        recursosAddList.appendChild(recursosAddItem1);


        const recursosAddItem2 = document.createElement("li");
        const recursoAddAnchor2 = document.createElement("a");
        recursoAddAnchor2.href = "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)";
        recursoAddAnchor2.appendChild(createTextElement("Bulbapedia - Squirtle"));
        recursosAddItem2.appendChild(recursoAddAnchor2);
        recursosAddList.appendChild(recursosAddItem2);

        recursosAddSection.appendChild(recursosAddList);
        main.appendChild(recursosAddSection);


            // Evolucao
        const evolucaoSection = document.createElement("section");
        evolucaoSection.id = "evolucao";
    
        const evolucaoTitle = document.createElement("h2");
        evolucaoTitle.appendChild(createTextElement("Evoluções"));
        evolucaoSection.appendChild(evolucaoTitle);
    
        const evolucaoList = document.createElement("ul");
    
        const squirtleItem = document.createElement("li");
        const squirtleAnchor = document.createElement("a");
        squirtleAnchor.href = "#";
        squirtleItem.appendChild(squirtleAnchor);
    
        const squirtleImageEvolucao = document.createElement("img");
        squirtleImageEvolucao.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png";
        squirtleImageEvolucao.alt = "Squirtle";
        squirtleItem.appendChild(squirtleImageEvolucao);
    
        const squirtleCaption = document.createElement("figcaption");
        squirtleCaption.appendChild(createTextElement("1. Squirtle"));
        squirtleItem.appendChild(squirtleCaption);
    
        evolucaoList.appendChild(squirtleItem);
    
        const wartortleItem = document.createElement("li");
        const wartortleAnchor = document.createElement("a");
        wartortleAnchor.href = "#";
        wartortleItem.appendChild(wartortleAnchor);
    
        const wartortleImageEvolucao = document.createElement("img");
        wartortleImageEvolucao.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png";
        wartortleImageEvolucao.alt = "Wartortle";
        wartortleItem.appendChild(wartortleImageEvolucao);
    
        const wartortleCaption = document.createElement("figcaption");
        wartortleCaption.appendChild(createTextElement("2. Wartortle"));
        wartortleItem.appendChild(wartortleCaption);
    
        evolucaoList.appendChild(wartortleItem);
    
        const blastoiseItem = document.createElement("li");
        const blastoiseAnchor = document.createElement("a");
        blastoiseAnchor.href = "#";
        blastoiseItem.appendChild(blastoiseAnchor);
    
        const blastoiseImageEvolucao = document.createElement("img");
        blastoiseImageEvolucao.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png";
        blastoiseImageEvolucao.alt = "Blastoise";
        blastoiseItem.appendChild(blastoiseImageEvolucao);
    
        const blastoiseCaption = document.createElement("figcaption");
        blastoiseCaption.appendChild(createTextElement("3. Blastoise"));
        blastoiseItem.appendChild(blastoiseCaption);
    
        evolucaoList.appendChild(blastoiseItem);
    
        evolucaoSection.appendChild(evolucaoList);
        main.appendChild(evolucaoSection);
    
        // Criação do rodapé

        const footer = document.querySelector("footer");

        const footerParagraph1 = document.createElement("p");
        footerParagraph1.appendChild(createTextElement("© 2024 Página do Pokémon Squirtle. Todos os direitos reservados."));
        footer.appendChild(footerParagraph1);

        const footerParagraph2 = document.createElement("p");
        footerParagraph2.appendChild(createTextElement("Voltar para o topo"));
        footer.appendChild(footerParagraph2);

        const footerParagraph3 = document.createElement("p");
        const footerAnchor3 = document.createElement("a");
        footerAnchor3.href ='mailto';
        footerAnchor3.appendChild(createTextElement("Contato via e-mail"));
        footer.appendChild(footerAnchor3);
        footer.appendChild(footerParagraph3);

        const footerParagraph4 = document.createElement("p");
        const footerAnchor4 = document.createElement("a");
        footerAnchor4.href ='tel';
        footerAnchor4.appendChild(createTextElement("Telefone: (55) 5555-5555"));
        footer.appendChild(footerAnchor4);
        footer.appendChild(footerParagraph4);

      
        }

        // Chama a função para carregar o conteúdo principal
      loadMainContent();

        // Impedindo a navegação ao clicar nas evoluções
      const evolutionLinks = document.querySelectorAll("#evolucao a");
      evolutionLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
          event.preventDefault();
        });
        });
        });

  