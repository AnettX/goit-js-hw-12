import{a as l,S as w,i as f}from"./assets/vendor-64b55ca9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const d="https://pixabay.com/api/",p="42120259-494341598d0c2875f9db82d6d",m=15;class E{constructor(){}async getImages(r){const o={key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:m},a=`${d}`;return l.get(a,{params:o}).then(t=>t.data)}async getMoreImages(r,o){o++;const a={key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:m},t=`${d}`;return l.get(t,{params:a}).then(s=>s.data)}}const M={captionsData:"alt",captionDelay:250};let h=new w(".gallery-link",M);function v(e,r){const o=e.hits.map(a=>y(a)).join("");r.innerHTML=o,h.refresh()}function P(e,r){console.log(e.hits);const o=e.hits.map(a=>y(a)).join("");r.insertAdjacentHTML("beforeend",o),h.refresh()}function u(){f.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function y(e){return`
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
    `}const n={formEl:document.querySelector(".js-search-form"),imgEl:document.querySelector(".js-image-container"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".loadmore-btn")};let c=1,L="";function I(){n.loader.classList.remove("hidden")}function g(){n.loader.classList.add("hidden")}n.formEl.addEventListener("submit",S);n.btnLoadMore.addEventListener("click",q);const b=new E;async function S(e){e.preventDefault(),I();const r=e.target.elements.text.value.trim();if(!r.trim()){g(),u(),n.imgEl.innerHTML="",n.btnLoadMore.style.display="none";return}L=r,c=1;try{const o=await b.getImages(r);if(v(o,n.imgEl),o.hits.length===0)throw new Error("No images found");n.btnLoadMore.style.display="block"}catch{u()}finally{g()}}async function q(){try{const e=await b.getMoreImages(L,c);P(e,n.imgEl),c++,e.hits.length<15&&(n.btnLoadMore.style.display="none",f.show({title:"",message:"We're sorry, but you've reached the end of search results.",color:"red",position:"topRight"}))}catch{throw new Error("No images found")}}
//# sourceMappingURL=commonHelpers.js.map
