import{a as l,S as M,i as g}from"./assets/vendor-64b55ca9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const d="https://pixabay.com/api/",p="42120259-494341598d0c2875f9db82d6d",m=15;class w{constructor(){}async getImages(r){const o={key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:m},n=`${d}`;return l.get(n,{params:o}).then(t=>t.data)}async getMoreImages(r,o){o++;const n={key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:m},t=`${d}`;return l.get(t,{params:n}).then(a=>a.data)}}const E={captionsData:"alt",captionDelay:250};let h=new M(".gallery-link",E);function v(e,r){r.innerHTML="";const o=e.hits.map(n=>y(n)).join("");r.innerHTML=o,h.refresh()}function P(e,r){r.innerHTML="";const o=e.hits.map(n=>y(n)).join("");r.insertAdjacentHTML("beforeend",o),h.refresh()}function u(){g.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function y(e){return`
        <div class="photo-container">
            <a class="gallery-link" href="${e.largeImageURL}" data-lightbox="image">
                <img src="${e.webformatURL}" alt="${e.tags}" class="photo" />
            </a>
            <div class="photo-body">
                <p class="photo-name">
                <span>Likes</span>
                <span>${e.likes}</span>
                </p>
                <p class="photo-name">
                <span>Views</span>
                <span>${e.views}</span>
              </p>
                <p class="photo-name">
                <span>Comments</span>
                <span>${e.comments}</span>
                </p>
                <p class="photo-name">
                <span>Downloads</span>
                <span>${e.downloads}</span>
                 </p>
            </div>
        </div>
    `}const s={formEl:document.querySelector(".js-search-form"),imgEl:document.querySelector(".js-image-container"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".loadmore-btn")};let c=1,L="";function I(){s.loader.classList.remove("hidden")}function f(){s.loader.classList.add("hidden")}s.formEl.addEventListener("submit",S);s.btnLoadMore.addEventListener("click",q);const b=new w;async function S(e){e.preventDefault(),I();const r=e.target.elements.text.value.trim();if(!r.trim()){f(),u(),s.imgEl.innerHTML="",s.btnLoadMore.style.display="none";return}L=r,c=1;try{const o=await b.getImages(r);if(v(o,s.imgEl),o.hits.length===0)throw new Error("No images found");s.btnLoadMore.style.display="block"}catch{u()}finally{f()}}async function q(){try{const e=await b.getMoreImages(L,c);P(e,s.imgEl),c++,e.hits.length<15&&(s.btnLoadMore.style.display="none",g.show({title:"",message:"We're sorry, but you've reached the end of search results.",color:"red",position:"topRight"}))}catch{throw new Error("No images found")}}
//# sourceMappingURL=commonHelpers.js.map
