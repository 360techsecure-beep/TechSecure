(function(){
var nav=document.querySelector('header .nav-links');if(!nav)return;
nav.id='site-navigation';var button=document.createElement('button');button.type='button';button.className='mobile-menu-toggle';button.textContent='Menu';button.setAttribute('aria-controls',nav.id);button.setAttribute('aria-expanded','false');
var holder=document.querySelector('header .nav-cta');holder.insertBefore(button,holder.firstChild);
function close(){nav.classList.remove('mobile-open');button.setAttribute('aria-expanded','false');}
button.onclick=function(){var open=button.getAttribute('aria-expanded')!=='true';nav.classList.toggle('mobile-open',open);button.setAttribute('aria-expanded',String(open));};
nav.addEventListener('click',function(e){if(e.target.closest('a'))close();});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&button.getAttribute('aria-expanded')==='true'){close();button.focus();}});
})();
