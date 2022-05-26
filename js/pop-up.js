(function () {
    var elemTarget;
    const info = document.querySelector(".pop-up");
    document.addEventListener('click', function (e) {
      // если мы кликнули на измобржение расположенное в .img__items, то...
      if (e.target.matches('.dp-wrap img')) {
        elemTarget = e.target;
        // устанавливаем модальному окну title
        info.innerHTML='<div class="pop-up__content">'+
        '<img class="header__bg2" src="./assets/img/online_exhibition/back2.png">'+
        '<div class="pop-up__container"><p class="hero__text__110">' + 
        e.target.dataset.title  + '</p>'+
        '<div class="pop-up__column" style="display:flex"><img src="' + 
        e.target.src + '" alt="' + e.target.alt + '" class="pop-up__image">'+
        '<div style="display:flex; flex-direction:column;"><p class="hero__text__35">' 
        + e.target.dataset.artist  + '</p>'+
        '<p class="hero__text__30">' + e.target.dataset.year  + '</p>'+
        '<p class="hero__text__25">' + e.target.dataset.text  + 
        '</p><a class="close"><img class="button__icon" src="./assets/img/icons/arrow.png">' + 
        '<img class="button__icon__text" src="./assets/img/icons/button_text2.svg"></a>'+
        '</div></div></div></div>';
       
        info.style.display = "flex";
        info.style.animation = "showBlock 0.5s ease-in-out 0s forwards";
      } 
      document.querySelector(".close").onclick = function(){
        info.style.animation = "hideBlock 0.5s ease-in-out 0s forwards";
        setTimeout(function() {
          info.style.display = "none";
        }, 600);
      }
        
    });
    
  })();
