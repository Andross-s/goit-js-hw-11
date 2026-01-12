import{a as y,S as d,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="54139037-7f576b0c871bb9407eaf16e34",h="https://pixabay.com/api/";async function b(s){const i={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await y.get(h,{params:i})).data}catch(o){throw new Error(`Failed to fetch images: ${o.message}`)}}const L=new d(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery"),f=document.querySelector(".loader-container");function S(s){const i=s.map(({webformatURL:o,largeImageURL:r,tags:e,likes:t,views:a,comments:p,downloads:m})=>`
      <li class="gallery-item">
        <a href="${r}" class="gallery-link">
          <img src="${o}" alt="${e}" loading="lazy" class="gallery-image"/>
        </a>
        <div class="gallery-info">
          <p class="info-item">
            <b>Likes</b>
            ${t}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${a}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${p}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${m}
          </p>
        </div>
          
      </li>
      `).join("");u.insertAdjacentHTML("beforeend",i),L.refresh()}function q(){u.innerHTML=""}function w(){f.style.display="flex"}function l(){f.style.display="none"}const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const o=c.querySelector('input[name="search-text"]').value.trim();if(!o){n.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}q(),w(),b(o).then(r=>{if(l(),!r.hits||r.hits.length===0){n.info({title:"info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(r.hits)}).catch(r=>{l(),n.error({title:"Error",message:r.message||"Failed to fetch images. Please try again.",position:"topRight"}),console.error(r)})});
//# sourceMappingURL=index.js.map
