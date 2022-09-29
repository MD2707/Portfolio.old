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
  var img = document.getElementById("burgerMenuImg")
  
  if(doc.style.display== "none"){
    img.src="image/crossMenu.png"
    img.style.backgroundColor="black"
    doc.style.display="flex";
    doc.classList.add('animationBurgerMenu');  
  }
  else{
    img.src="image/burgerMenu.jpg"
    img.style.backgroundColor="white"
    doc.style.display="none";
    doc.classList.add('animationBurgerMenu'); 
  }
}

function generateDot(){
  var body=document.body
  let circle=document.createElement("div");
  circle.id="rond";
  circle.className="cercle"
  circle.style.width="2px";
  circle.style.backgroundColor="white";
  circle.style.height="2px";
  circle.style.position="absolute";   
  circle.style.top=  NombreRandom(0,body.clientHeight)+"px";
  circle.style.left=  NombreRandom(0,body.clientWidth)+"px";
  body.appendChild(circle);
}

function NombreRandom(min,max){
  return Math.random() * (max - min + 1) + min;
}

