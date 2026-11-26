// Shared behaviour for the E1 251 Final Exam pack.
// MCQ: <div class="q mcq" data-answer="c"> ... <ol class="opts"><li data-k="a">...</li>...</ol> <details class="ans">...</details></div>
// Clicking an option marks it right/wrong and opens the answer. Buttons with data-act="show"/"hide" open/close all answers in their section.
(function(){
  function store(k,v){try{ if(v===undefined) return localStorage.getItem(k); localStorage.setItem(k,v);}catch(e){return null}}
  document.addEventListener('click',function(e){
    var li=e.target.closest('ol.opts li');
    if(li){
      var q=li.closest('.mcq'); if(!q) return;
      var ans=(q.getAttribute('data-answer')||'').toLowerCase();
      q.querySelectorAll('ol.opts li').forEach(function(x){x.classList.remove('right','wrong')});
      var k=(li.getAttribute('data-k')||'').toLowerCase();
      li.classList.add(k===ans?'right':'wrong');
      if(k!==ans){ var r=q.querySelector('ol.opts li[data-k="'+ans+'"]'); if(r) r.classList.add('right'); }
      var d=q.querySelector('details.ans'); if(d) d.open=true;
      return;
    }
    var b=e.target.closest('button[data-act]');
    if(b){
      var scope=b.closest('section')||document;
      var open=b.getAttribute('data-act')==='show';
      scope.querySelectorAll('details.ans').forEach(function(d){d.open=open});
      if(!open) scope.querySelectorAll('ol.opts li').forEach(function(x){x.classList.remove('right','wrong')});
    }
  });
  // Progress checkboxes: <input type="checkbox" data-key="m1-concepts">
  document.querySelectorAll('input[type=checkbox][data-key]').forEach(function(c){
    var key='e1251fe:'+c.getAttribute('data-key');
    if(store(key)==='1') c.checked=true;
    c.addEventListener('change',function(){store(key,c.checked?'1':'0')});
  });
  // Auto-number questions inside each section and build "show/hide all" toolbars where asked
  document.querySelectorAll('.toolbar[data-auto]').forEach(function(t){
    t.innerHTML='<button data-act="show">Show all answers</button><button data-act="hide">Hide all answers</button>';
  });
})();
