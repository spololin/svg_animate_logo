
var draw = document.getElementById('draw');
draw.addEventListener('click', function(){
  var logo = document.getElementById('html5-logo');
  logo.setAttribute("class","");
  logo.style.display = "inline-block";
  new Vivus('html5-logo', {
    type:  'scenario', 
    duration: 500, 
    animTimingFunction: Vivus.EASE, 
    pathTimingFunction: Vivus.EASE
  }, function(){
    //console.log(this.el.setAttribute("class","filled"));
  });
  setTimeout(function(){
    logo.setAttribute("class","filled");
  },2000)
  draw.innerHTML = 'Ещё раз нарисовать!'
}, false);




