'use strict'
//обработчик на конкретную кнопку
let but = document.getElementById('hide');
console.log(but);











but.addEventListener('click',function(event){
  let goal = document.getElementById(event.target.dataset.toggleId);

  if(goal){
    goal.hidden = !goal.hidden;
  }
  else 
  return;
})

//универсальный обработчик скрыть/показать на любую кнопку c атрибутом 

document.addEventListener('click',function(event){
  let point = event.target.dataset.toggleId
  if(!point) return;

    let goal = document.getElementById(point)
    if (!goal)  return;
    goal.hidden = !goal.hidden
})
.class

class Name {
    constructor name {
        a:2;
    }
}