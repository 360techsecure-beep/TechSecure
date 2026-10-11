(function(){
  var grid=document.querySelector('.blog-grid'),search=document.getElementById('blog-search'),filters=document.getElementById('blog-filters'),count=document.getElementById('blog-count');
  if(!grid||!search||!filters)return;
  var cards=Array.prototype.slice.call(grid.querySelectorAll('.blog-card')),active='all';
  function update(){var query=search.value.trim().toLowerCase(),visible=0;cards.forEach(function(card){var category=(card.querySelector('.cat')||{}).textContent||'';var show=(active==='all'||category.trim()===active)&&(!query||card.textContent.toLowerCase().indexOf(query)!==-1);card.hidden=!show;if(show)visible++;});count.textContent=visible+(visible===1?' guide':' guides');}
  filters.addEventListener('click',function(event){var button=event.target.closest('button[data-filter]');if(!button)return;active=button.getAttribute('data-filter');filters.querySelectorAll('button').forEach(function(item){item.classList.toggle('active',item===button);});update();});
  search.addEventListener('input',update);update();
})();
