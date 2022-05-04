let myWindow;

function openWin() {
  myWindow = window.open("", "", "width=250, height=250");
  myWindow.document.write("hello taha")
  //myWindow.close
  setTimeout("myWindow.close()",3000) 
}



// function moveWin() {
//     console.log("taha")
//     var c =10;
//     var s = setInterval(function()
//     {
        
//        myWindow.moveBy(c, c);
//        c+=200;
//     },1000)
// }

// function stop(){
//     clearInterval(s);
// }