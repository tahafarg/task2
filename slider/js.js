var i = 0; 		
var imags = ["1.jpg", "2.jpg", "3.jpg"];	
var time = 3000;	
var img = document.getElementById("myImg");
var btnstar = document.getElementById("se");
function changeImg (){
	if(i < imags.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
  img.setAttribute("src",imags[i])
}
var timer ;
btnstar.onclick = function(){
  timer= setInterval(changeImg,time)
}
//window.onload=changeImg;

function stop(){
  clearInterval( timer );
  // time=null;
}

function next (){
    if(i < imags.length - 1){
    i++; 
  } else { 
      i = 0;
  }
  img.setAttribute("src",imags[i])
}

function prev(){
    if(i > imags.length - 1){
        i--; 
      } else { 
          i = 0;
      }
      img.setAttribute("src",imags[i])

}