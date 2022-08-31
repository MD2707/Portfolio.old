function scrollProjet(){
    const element=document.querySelectorAll(".texte");
    Array.from(element).forEach((t,index) =>
    {
       if(this.scrollY >= t.offsetTop-400 && this.scrollY <= t.offsetTop+400 && t.classList[1]==undefined){
           t.classList.add("affiche");
           console.log(t.classList[2]);
           t.animate([
                {
                    opacity : "0",
                },
                {
                    opacity : "1",
                }],1000);
            t.style.opacity=1; 
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

  function choixAnnee(idAnnee){
     document.getElementById("footer").style.display="flex";
    var tabtotal = document.getElementsByClassName("pres");
    var tabtotal2= document.getElementsByClassName("pres2");
    for(j=0;j<tabtotal.length;j++){
        tabtotal[j].style.display="none"
    }
    for(j=0;j<tabtotal2.length;j++){
        tabtotal2[j].style.display="none"
    }
    var tabProjet= document.getElementsByClassName(idAnnee);
        for(i=0;i<tabProjet.length;i++) tabProjet[i].style.display="flex";
}