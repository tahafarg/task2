var s = document.getElementById("ee")
// s.match
function start(s,visible){
    if (s.src.match==true)
    {
    var x =document.createElement("img");
    x.src="dom.jpg"
   x.style.position="absolute"
   x.style.top="0px"
   x.style.right="0px" 
   var d =document.createElement("img");
   d.src="dom.jpg"
  d.style.align="bottom"
   s.style.visibility = (visible ? 'visible' : 'hidden');
// img {
//     position: absolute;
//     top: 0px;
//     right: 0px;
//  }
// #hp  {
//     float: right;    
//      margin: 0 0 0 15px;
//     }

}
}