var o=document.querySelector(".button-wrapper"),e=document.querySelector(".burger-button"),t=document.querySelector(".navigation__list");t.classList[1]==="navigation__list--show"&&(t.classList.remove("navigation__list--show"),e.classList.remove("burger-button--hide"));o.addEventListener("click",()=>{e.classList.toggle("burger-button--show"),t.classList.toggle("navigation__list--show")});