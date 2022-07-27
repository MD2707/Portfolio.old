function validForm(){
    var button=document.getElementById("buttonFormDiv");
    var button2=document.getElementById("buttonForm")
    var input =document.getElementsByClassName("formItem");
    var form=document.querySelector("form");
    var img=document.getElementById("boutonFormImg");
    var img2=document.getElementById("boutonFormImg2");
    
    Array.from(input).forEach(element => {
       if(element.checkValidity()){
        img2.style.display="none"; 
          button.style.backgroundColor="green";
          button2.style.backgroundColor="green";
          img.style.display="flex"; 
       }
       else if(!element.checkValidity()){
        img.style.display="none"; 
        button.style.backgroundColor="red";
        button2.style.backgroundColor="red";
        img2.style.display="flex"; 
            form.animate([
                { transform: 'translateX(1rem)' },
                { transform: 'translateX(-1rem)' }
              ], {
                duration: 100,
              });
       }
    });
}

function onClickMenu(){
  var doc=document.getElementById("menu");
  var etat= doc.style.display;
  if(etat== "none")
  doc.style.display="flex";
  else
  doc.style.display="none";
}
