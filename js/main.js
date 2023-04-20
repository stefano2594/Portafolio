// AL ejecutar se muestra centrado enfocando  al logo
window.addEventListener("load", () => {
  const miElemento = document.querySelector(".nom1");
  miElemento.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
});

function Renderizar_llenarBarra() {
  let barras = document.querySelectorAll("#progress");
  let estilos;
  barras.forEach((bar, index) => {
    switch (index) {
      case 0:
        estilos = window.getComputedStyle(bar, "::after");
        bar.style.setProperty("--miwidth", "80%");
        break;
      case 1:
        estilos = window.getComputedStyle(bar, "::after");
        bar.style.setProperty("--miwidth", "90%");
        break;
      case 2:
        estilos = window.getComputedStyle(bar, "::after");
        bar.style.setProperty("--miwidth", "100%");
        break;
      case 3:
        estilos = window.getComputedStyle(bar, "::after");
        bar.style.setProperty("--miwidth", "70%");
        break;
      case 4:
        estilos = window.getComputedStyle(bar, "::after");
        bar.style.setProperty("--miwidth", "70%");
        break;
      case 5:
        estilos = window.getComputedStyle(bar, "::after");
        bar.style.setProperty("--miwidth", "50%");
        break;
      case 6:
        estilos = window.getComputedStyle(bar, "::after");
        bar.style.setProperty("--miwidth", "40%");
        break;
    }
  });
}

Renderizar_llenarBarra();
let about = document.querySelector(".ul-nav");
let section = document.querySelector(".main-container");
let container = document.querySelector(".container");
let renderizar_About = () => {
  let main_container_article = document.createElement("section");
  main_container_article.classList.add("main-container-article");
  let articulo = document.createElement("article");

  let titulo = document.createElement("h1");
  titulo.innerText = `Hi, My name is Stefano Clausen , 
                I´m a Front-End developer `;
  let contenido = document.createElement("p");
  contenido.style.whiteSpace = "pre-line";
  contenido.style.textAlign = "justify";
  contenido.style.textJustify = "inter-word";
  contenido.innerText = `I’m a Front-End Developer with Back-End Experience located in Peru, region Lima capital. I have a serious passion for UI effects,animations
                         and creating intuitive,dynamic user experiences. Innovative developer and entrepreneur committed to making the world a better and connected 
                         place, mastery of the phases of software development and working with different data structures.Graduated with a bachelor's degree in Systems Engineering from the Universidad Autónoma del Perú `;
  contenido.innerText = contenido.innerText.replace(/<br>/g, " ");
  articulo.appendChild(titulo);
  articulo.appendChild(contenido);
  main_container_article.appendChild(articulo);
  let seconchild = container.children[1];
  container.insertBefore(main_container_article, seconchild);
};

// renderizo los proyectos que presento
let renderizar_project = (pro) => {
  const main_container = document.createElement("div");
  main_container.classList.add("main-container");
  pro.forEach((p) => {
    let project = document.createElement("div");
    project.classList.add("project-card");
    let imgproject = document.createElement("img");
    imgproject.setAttribute("src", p.img);

    let divInfo = document.createElement("div");
    divInfo.classList.add("project-info");
    let titleProject = document.createElement("h1");
    titleProject.innerText = p.title;
    let fechaProject = document.createElement("p");
    fechaProject.innerText = p.fecha + " - was realeased ";
    let descrProject = document.createElement("p");
    descrProject.innerText = p.descr;

    divInfo.appendChild(titleProject);
    divInfo.appendChild(fechaProject);
    divInfo.appendChild(descrProject);

    let divIcono = document.createElement("div");
    divIcono.classList.add("iconosproject");

    let divLink = document.createElement("div");
    divLink.setAttribute("id", "clink");
    divLink.addEventListener("click", (e) => {
      window.location.href = p.enlaceEjecutable;
    });
    let imgLink = document.createElement("img");
    imgLink.setAttribute("src", "../logos/link.png");
    divLink.appendChild(imgLink);
    let divHub = document.createElement("div");
    divHub.setAttribute("id", "chub");
    divHub.addEventListener("click", (e) => {
      window.location.href = p.enlacehub;
    });
    let imgHub = document.createElement("img");
    imgHub.setAttribute("src", "../logos/githubp.png");

    divHub.appendChild(imgHub);
    divIcono.append(divLink, divHub);

    project.appendChild(imgproject);
    project.appendChild(divInfo);
    project.appendChild(divIcono);

    // container.append(main_container);
    main_container.appendChild(project);
  });

  const seconchild = container.children[1];
  container.insertBefore(main_container, seconchild);
};
let projects = [];
projects.push({
  id: 1,
  img: "../imagenes/CarritoCara.PNG",
  title: "Carrito de Compras",
  fecha: "7/02/2023",
  descr: "Una aplicacion para hacer tus comprar con javascript",
  enlacehub: "https://github.com/stefano2594/jsVanilla1",
  enlaceEjecutable: "https://stefano2594.github.io/jsVanilla1/",
});
projects.push({
  id: 2,
  img: "../imagenes/NewsBitcoin.PNG",
  title: "Noticias  Bitcoin",
  fecha: "12/06/2022",
  descr: "Noticias bitcoin,hecho con Next.js y SSR",
  enlacehub:
    "https://github.com/stefano2594/Bitcoint-Noticias-Proyecto-con-Next.js-y-SSR",
  enlaceEjecutable:
    "https://stefano2594.github.io/Bitcoint-Noticias-Proyecto-con-Next.js-y-SSR/",
});

let navContact = about.children[3];
navContact.addEventListener("click", (e) => {
  setTimeout(() => {
    let miElemento = document.querySelector(".final-footer");
    miElemento.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, 1000);
});

renderizar_project(projects);
let navProject = about.children[2];

navProject.addEventListener("click", (e) => {
  refresh_render();
  renderizar_project(projects);

  setTimeout(() => {
    let miElemento = document.querySelector(".main-container");
    miElemento.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, 1800);
});
let navSkills = about.children[1];
navSkills.addEventListener("click", (e) => {
  setTimeout(() => {
    let miElemento1 = document.querySelector(".sub-containe2");
    miElemento1.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, 1800);
});
let navAbout = about.children[0];
console.log(navAbout);
navAbout.addEventListener("click", (e) => {
  refresh_render();
  renderizar_About();

  setTimeout(() => {
    let miElemento = document.querySelector(".main-container-article");
    miElemento.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, 2000);
});

const refresh_render = () => {
  let project = document.querySelectorAll(".project-card");
  project.forEach((p) => {
    p.remove();
  });
  let main_conta = document.querySelector(".main-container");
  if (main_conta) {
    main_conta.remove();
  }
  let artic = document.querySelector(".main-container-article");
  if (artic) {
    artic.remove();
  }
};

function darlinkIconos() {
  const Sul_ico = document.querySelector(".social");
  let SprimerHijo = Sul_ico.children[0].children[0];
  let SsegundoHijo = Sul_ico.children[1].children[0];

  SprimerHijo.setAttribute("target", "_self");
  SprimerHijo.setAttribute("href", "https://github.com/stefano2594");

  SsegundoHijo.setAttribute("target", "_self");
  SsegundoHijo.setAttribute(
    "href",
    "https://www.linkedin.com/in/stefano-clausen-portocarrero-3783aa163/"
  );
  SsegundoHijo.setAttribute("rel", "noopener noreferrer");
  // noopener noreferrer
  // SprimerHijo.setAttribute()
}

document.addEventListener("DOMContentLoaded", function () {
  darlinkIconos();
});

// MyOrders.setAttribute("href", "./clase9.html");
// renderizar_About();
