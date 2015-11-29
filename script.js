/**
 * Created by User on 29.11.2015.
 */
var draw = document.getElementById('draw');
draw.addEventListener('click', function(){
    var logo = document.getElementById('html5-logo');
    var path1 = document.getElementById('path-html');
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
        path1.classList.add('filled');
    },2000)
    draw.innerHTML = 'Ещё раз нарисовать!'
}, false);
