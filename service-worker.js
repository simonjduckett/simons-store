"use strict";var precacheConfig=[["/simons-store/index.html","28a5025f6b64e1447a9ca728186c42f2"],["/simons-store/static/css/main.a869c78e.css","574fdb638dc795538a0eb3d83ff7c9a8"],["/simons-store/static/js/main.71ba8fac.js","3ff565a01cd84833f73dca28b6ec2f9f"],["/simons-store/static/media/accessories.8a20a99b.png","8a20a99bf93c712733188ce2b7194b65"],["/simons-store/static/media/banner.3aae97b0.png","3aae97b00fe2e76999fc4fa3cdb4559d"],["/simons-store/static/media/belt.071bf189.png","071bf189edb1e7148af921f3c6492421"],["/simons-store/static/media/hoodie-boys.9bfec980.png","9bfec9806a5ac014f84ea4340c8f57f5"],["/simons-store/static/media/jacket-girls.36e2e9d8.png","36e2e9d8e77dd94b0d0f28e7604e0edc"],["/simons-store/static/media/jacket.9aea2bbb.png","9aea2bbb4eaca3e2b0472782ba64b55d"],["/simons-store/static/media/jeans-boys.d94a2ce1.png","d94a2ce102b94e592f20cfac49474472"],["/simons-store/static/media/jeans-boys2.0bcb08a2.png","0bcb08a2ad18c9bc71e2dda267d72c19"],["/simons-store/static/media/jeans-girls.ebd53bfd.png","ebd53bfd38cf0dc6d77599ce16bd2655"],["/simons-store/static/media/jeans-girls2.ab7e12dc.png","ab7e12dce2d157431e99928dc1449fa7"],["/simons-store/static/media/jeans.4889f64c.jpg","4889f64c418b0c1160eca3c0a8208f20"],["/simons-store/static/media/jeans.89ad854c.png","89ad854cf00d586eb179b6c8942e0dff"],["/simons-store/static/media/jumper-boys.9d91c3b0.png","9d91c3b06080309105876c9d5af12673"],["/simons-store/static/media/kids2.6c089d00.jpg","6c089d005664bf68e4940475674646da"],["/simons-store/static/media/men3.47ab60bc.jpg","47ab60bc7e28914608135304e5a4cbe0"],["/simons-store/static/media/mensale.871b9b5e.png","871b9b5ef46d1c535e9efdedc03c08ad"],["/simons-store/static/media/outwear.9a36af80.png","9a36af80fdad0b81e66bd331372ec0f6"],["/simons-store/static/media/outwear.baabcd1d.png","baabcd1d0328a67fe8ff312aa4b849e7"],["/simons-store/static/media/paypal.96eb97b3.png","96eb97b30b2c27d59b46e481e768307d"],["/simons-store/static/media/shirt.272f8886.png","272f88863567281ee88645edeac9c2c1"],["/simons-store/static/media/shoes.b4b2e58f.png","b4b2e58f1f4fb757479e0c601d53a929"],["/simons-store/static/media/shorts.6408bdb8.png","6408bdb80f0ff40721d25f34ec80f1cf"],["/simons-store/static/media/shorts.6e7d0785.png","6e7d07859682de0d165a2fc8018d3486"],["/simons-store/static/media/sweater.529db4b3.png","529db4b33a49129015a86f9ac7363db9"],["/simons-store/static/media/sweater.86667824.png","8666782493d3cc0b2e06fe2e61624783"],["/simons-store/static/media/top.61b2f78c.png","61b2f78cf9e2fab0c57d854488db46e1"],["/simons-store/static/media/trousers.075cfdc8.png","075cfdc8c449aa6663894abb59dce68a"],["/simons-store/static/media/trousers.be28a329.png","be28a3290816d635bf6165f73297c514"],["/simons-store/static/media/tshirt-boys.15e52451.png","15e5245175d3c3fa6a1768c579a6bff4"],["/simons-store/static/media/tshirt-girls.18aae958.png","18aae9588cd0a8f367f6bd7a36fe2a50"],["/simons-store/static/media/tshirt-girls2.ea5c0a7e.png","ea5c0a7ece28913472aa0d2b9d88cf9e"],["/simons-store/static/media/tshirt-girls3.82585a59.png","82585a596b98c6db8d71a377f08f2540"],["/simons-store/static/media/tshirt.019fbfcf.png","019fbfcf3f592f9c6904345d64a3ed7f"],["/simons-store/static/media/tshirt.e99b6d43.png","e99b6d438a18ed84679a3ac0c2fe5afe"],["/simons-store/static/media/tshirt2-boys.30fa7164.png","30fa71649e52e657f7878ff550d2cf3c"],["/simons-store/static/media/women2.36075226.jpg","360752266d5743d90bcc6e8696fd9a04"],["/simons-store/static/media/womensale.beb3cd23.png","beb3cd23d574b9fea89d5a7545dd91c6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,s){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=s),t.toString()},cleanResponse=function(s){return s.redirected?("body"in s?Promise.resolve(s.body):s.blob()).then(function(e){return new Response(e,{headers:s.headers,status:s.status,statusText:s.statusText})}):Promise.resolve(s)},createCacheKey=function(e,s,t,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(s)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,s){if(0===e.length)return!0;var t=new URL(s).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(s){return t.every(function(e){return!e.test(s[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var s=e[0],t=e[1],a=new URL(s,self.location),n=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!t.has(s)){var e=new Request(s,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+s+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(s,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(s){return s.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return s.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(s){if("GET"===s.request.method){var e,t=stripIgnoredUrlParameters(s.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t));var n="/simons-store/index.html";!e&&"navigate"===s.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],s.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&s.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',s.request.url,e),fetch(s.request)}))}});