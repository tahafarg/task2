function myFunction(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("demo").style.fontFamily = listValue;}

    function ChangeFont(RadioNodeList) {
        if(RadioNodeList ='times new roman'){
        document.getElementById("PAR").style.fontFamily = "Times New Roman";
      }
      else if (RadioNodeList ='verdana')
      {
            document.getElementById("PAR").style.fontFamily="verdana";
      }
      else if (RadioNodeList ='impact')
      {
        document.getElementById("PAR").style.fontFamily="impact";
      }
      else if (RadioNodeList ='georgia')
      {
        document.getElementById("PAR").style.fontFamily="georgia";
      }
      else if (RadioNodeList ='courier')
      {
        document.getElementById("PAR").style.fontFamily="courier";
      }
      else 
      {
        document.getElementById("PAR").style.fontFamily="arial";

      }
    }
      
      function bschan() {
        document.getElementsByClassName("pedfields").style.fontFamily = "Brush Script MT";
        document.getElementById("preview").style.fontFamily = "Brush Script MT";
      }

    var s = document.getElementById("PAR");
    function ChangeFont(val)
    {
        s.style.fontFamily=val;
    }
    function ChangeAlign (val)
    {
      s.style.textAlign=val;
    }
    function ChangeHeight (val)
    {
      s.style.lineHeight=val;
    }
    function ChangeLSpace (val)
    {
      s.style.letterSpacing=val;
    }
    
    function ChangeIndent (val)
    {
      s.style.textIndent=val;
    }
    
    function ChangeTransform (val)
    {
      s.style.textTransform=val;
    }
    
    function ChangeDecorate (val)
    {
      s.style.textDecoration=val;
    }

    function ChangeBorderColor (val)
    {
      s.style.borderColor=val;
    }
