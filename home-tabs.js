(function(){
  var buttons=Array.prototype.slice.call(document.querySelectorAll('[data-home-tab-button]'));
  var sections=Array.prototype.slice.call(document.querySelectorAll('[data-home-tab-section]'));
  var tabs=document.querySelector('.home-tabs');
  if(!buttons.length||!sections.length||!tabs)return;
  document.documentElement.classList.add('home-tabs-ready');
  var aliases={help:'services',services:'services',projects:'work',work:'work',why:'why',local:'why',process:'why',areas:'areas',reviews:'reviews'};
  function show(name,scroll){
    name=aliases[name]||'services';
    buttons.forEach(function(button){var active=button.dataset.homeTabButton===name;button.classList.toggle('active',active);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
    sections.forEach(function(section){section.hidden=section.dataset.homeTabSection!==name;});
    if(scroll)tabs.scrollIntoView({behavior:'smooth',block:'start'});
  }
  buttons.forEach(function(button,index){
    button.addEventListener('click',function(){var name=button.dataset.homeTabButton;history.replaceState(null,'','#'+name);show(name,false);});
    button.addEventListener('keydown',function(event){if(event.key!=='ArrowLeft'&&event.key!=='ArrowRight')return;event.preventDefault();var next=(index+(event.key==='ArrowRight'?1:-1)+buttons.length)%buttons.length;buttons[next].focus();buttons[next].click();});
  });
  document.addEventListener('click',function(event){var link=event.target.closest('a[href^="#"]');if(!link)return;var id=link.getAttribute('href').slice(1);if(aliases[id])show(id,false);});
  window.addEventListener('hashchange',function(){show(location.hash.slice(1),false);});
  show(location.hash.slice(1),false);
})();
