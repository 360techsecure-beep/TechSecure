(function(){
  'use strict';
  function track(name,params){
    if(typeof window.gtag!=='function')return;
    window.gtag('event',name,Object.assign({page_path:location.pathname},params||{}));
  }
  document.addEventListener('click',function(event){
    var link=event.target.closest('a');
    if(link){
      var href=(link.getAttribute('href')||'').trim();
      if(href.indexOf('tel:')===0)track('phone_click',{link_location:link.closest('header')?'header':link.closest('.mobile-bar')?'mobile_bar':'page'});
      else if(href.indexOf('sms:')===0)track('text_click',{link_location:link.closest('.mobile-bar')?'mobile_bar':'page'});
      else if(href==='contact.html'||href.indexOf('#quote')!==-1)track('estimate_click',{link_text:(link.textContent||'').trim().slice(0,80)});
      else if(href==='gallery.html')track('gallery_click',{link_text:(link.textContent||'').trim().slice(0,80)});
    }
    var chatLaunch=event.target.closest('.ts-launch');
    if(chatLaunch&&chatLaunch.getAttribute('aria-expanded')!=='true')track('chatbot_open');
    var chatOption=event.target.closest('#ts-chat .ts-options button,#ts-chat .ts-options a');
    if(chatOption)track('chatbot_choice',{choice:(chatOption.textContent||'').replace(/\s+/g,' ').trim().slice(0,80)});
    var filter=event.target.closest('#blog-filters button[data-filter]');
    if(filter)track('blog_filter',{category:filter.getAttribute('data-filter')});
  });
  var search=document.getElementById('blog-search'),searchTimer;
  if(search)search.addEventListener('input',function(){clearTimeout(searchTimer);searchTimer=setTimeout(function(){if(search.value.trim().length>2)track('blog_search',{search_term_length:search.value.trim().length});},800);});
  var form=document.getElementById('quoteForm'),success=document.getElementById('success'),leadSent=false;
  if(form){
    var started=false;
    form.addEventListener('focusin',function(){if(!started){started=true;track('form_start',{form_name:'estimate'});}});
    form.addEventListener('submit',function(){track('form_submit_attempt',{form_name:'estimate'});});
  }
  if(success){
    new MutationObserver(function(){if(!leadSent&&getComputedStyle(success).display!=='none'){leadSent=true;track('generate_lead',{form_name:'estimate'});}}).observe(success,{attributes:true,attributeFilter:['style','class','hidden']});
  }
})();
