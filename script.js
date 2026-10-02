const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#mainNav');if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)})}document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.getElementById('year').textContent=new Date().getFullYear();
const galleryLightbox=document.getElementById('galleryLightbox');
const galleryLightboxImage=document.getElementById('galleryLightboxImage');
const galleryLightboxTitle=document.getElementById('galleryLightboxTitle');
const galleryClose=document.querySelector('.gallery-close');
document.querySelectorAll('.gallery-card').forEach(card=>card.addEventListener('click',()=>{
  galleryLightboxImage.src=card.dataset.gallerySrc;
  galleryLightboxImage.alt=card.dataset.galleryTitle;
  galleryLightboxTitle.textContent=card.dataset.galleryTitle;
  galleryLightbox.classList.add('open');
  galleryLightbox.setAttribute('aria-hidden','false');
}));
function closeGallery(){galleryLightbox.classList.remove('open');galleryLightbox.setAttribute('aria-hidden','true');galleryLightboxImage.src='';}
if(galleryClose)galleryClose.addEventListener('click',closeGallery);
if(galleryLightbox)galleryLightbox.addEventListener('click',e=>{if(e.target===galleryLightbox)closeGallery()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeGallery()});
