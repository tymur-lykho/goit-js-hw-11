import{S as f,a as c,i as n}from"./assets/vendor-mYwBqgd4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const p=document.querySelector(".gallery");function g(r){const t=r.map(({webformatURL:s,largeImageURL:i,tags:e,likes:a,views:o,comments:u,downloads:m})=>`<li class="img-card">
				<a href="${i}">
					<img
						class="img"
						src="${s}"
						alt="${e}"
						width="360"
						height="200"
					/>
					<div class="img-data-container">
						<ul class="data">
							<li class="data-item">
								<b class="data-title">Likes</b>
								<p class="data-value" data-likes>${a}</p>
							</li>
							<li class="data-item">
								<b class="data-title">Views</b>
								<p class="data-value" data-views>${o}</p>
							</li>
							<li class="data-item">
								<b class="data-title">Comments</b>
								<p class="data-value" data-comments>${u}</p>
							</li>
							<li class="data-item">
								<b class="data-title">Downloads</b>
								<p class="data-value" data-downloads>${m}</p>
							</li>
						</ul>
					</div>
				</a>
      </li>`).join("");p.innerHTML=t,h()}function h(){let r=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});r.refresh(),r.on("error.simplelightbox",function(t){console.log(t)})}const y="13611713-3ff341a8136eabd4453734908";c.defaults.baseURL="https://pixabay.com/api/";c.defaults.params={key:y,image_type:"photo",orientation:"horizontal",safesearch:!0};function b(r){return c.get("",{params:{q:r}}).then(t=>{if(t.data.hits.length<1)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.data.hits}).catch(t=>{throw new Error(t.message)})}const l=document.querySelector(".search-form"),d=document.querySelector(".js-loader"),v=document.querySelector(".gallery");n.settings({position:"topRight"});l.addEventListener("submit",r=>{r.preventDefault();const t=l.querySelector(".form-input").value;if(t.trim()===""){n.error({message:"Query is not valid!"});return}v.innerHTML="",d.classList.add("loader"),b(t).then(s=>{s&&g(s)}).catch(s=>{n.error({message:s.message})}).finally(()=>{d.classList.remove("loader"),l.reset()})});
//# sourceMappingURL=index.js.map
