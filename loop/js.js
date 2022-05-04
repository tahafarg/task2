var i =0
var images = ["marble1.jpg", "marble2.jpg", "marble3.jpg"];
// setInterval(function(){
//     document.images[i].src="marble3.jpg"
//     document.images[i+1].src="marble2.jpg"
//     //document.images[i-1].src="marble1.jpg"
//     i++
//     if(i==3)
// {
//     document.images[i].src="marble1.jpg"
//     i=0
//     document.images[i+1].src="marble3.jpg"
//     //document.images[i-1].src="marble1.jpg"
    
// }
// if(i < imags.length - 1){
//     i++; 
//   } else { 
//       i = 0;
//   }
// img.setAttribute("src",imags[i])
// },1000)
console.log(images.length)
function changeImg (){
    i++;
	if(i < images.length-1 ){
      //  ++i;
        console.log(i) 
    document.images[i].src="marble3.jpg"
  
      document.images[i+1].src="marble1.jpg"
     // document.images[i+2].src="marble2.jpg"
    
	} else { 
       
        document.images[i].src="marble3.jpg"
        i = 0;
        document.images[i+1].src="marble2.jpg"
		
	}
  //img.setAttribute("src",imags[i])
}

 function start(){
     setInterval(changeImg,1000)
  }