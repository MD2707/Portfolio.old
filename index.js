let interval;


function functionViewOnLoad() {
    window.scroll(10000-window.innerWidth/2,19900);
    var element = document.getElementById("conteneurFusee");
    element.style.left=5000+window.innerWidth/2.25+"px";
    element.style.top=20000+"px";
    maFonction();
}

function leftArrowPressed(vitesse) {
    var element = document.getElementById("conteneurFusee");
    element.style.transform = 'rotate(-90deg)';
    element.style.left =(parseInt(element.style.left) - vitesse)+"px";
}
function rightArrowPressed(vitesse) {
    var element = document.getElementById("conteneurFusee");
    element.style.transform = 'rotate(90deg)';
    element.style.left =(parseInt(element.offsetLeft) + vitesse)+"px";

}
function upArrowPressed(vitesse) {
    
    var element = document.getElementById("conteneurFusee");
    element.style.transform = 'rotate(0deg)';
    element.style.top = (parseInt(element.style.top) - vitesse)+"px";
}
function downArrowPressed(vitesse) {
    var element = document.getElementById("conteneurFusee");
    element.style.transform = 'rotate(180deg)';
    element.style.top = (parseInt(element.offsetTop) + vitesse)+"px";
}

function maFonction(event){
    const vitesse=25;
    const NombreCercle=50;
    var element = document.getElementById("conteneurFusee");
    window.scroll(parseInt(element.style.left)- window.innerWidth/2.25,parseInt(element.style.top)-window.innerHeight/2.25); 
    animConteneurProjet();
    if(event!=null){
        displayProject(event);
    switch(event.code) {
        case "KeyS":
        case "ArrowDown":
            event.preventDefault();
            downArrowPressed(vitesse);
            circleInRectangle(1);
            break;
        case "KeyW":
        case "ArrowUp":
            event.preventDefault();
            upArrowPressed(vitesse);
            circleInRectangle(2);
            break;
        case "KeyA":
        case "ArrowLeft":
            event.preventDefault();
            leftArrowPressed(vitesse);
            circleInRectangle(3);
            break;
        case "KeyD":
        case "ArrowRight":
            event.preventDefault();
            rightArrowPressed(vitesse);
            circleInRectangle(4);
            break;
    }
    event.stopPropagation();
    }
    
}
function displayProject(event){
    var element = window.getComputedStyle(document.getElementById("conteneurFusee"));
     tabConteneur=document.getElementsByClassName("conteneurProjet");
    Array.from(tabConteneur).forEach((t,index) =>
    {
        
        var tmp =window.getComputedStyle(t);
        var milieuX=parseInt(element.left)+parseInt(element.width)/2;
        var milieuY=parseInt(element.top)+parseInt(element.height)/2;
        if( milieuX>parseInt(tmp.left)
            && milieuX <parseInt(tmp.left)+parseInt(tmp.width)
            && milieuY<parseInt(tmp.top)+parseInt(tmp.height)
            && milieuY>parseInt(tmp.top)){
                 let lien = t.getElementsByClassName("link");
                 t.style.boxShadow ="white 0px 54px 55px, white 0px -12px 30px, white 0px 4px 6px, white 0px 12px 13px, white 0px -3px 5px";
                if(!(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))){
                    if((event !=null && event.keyCode == 13 )||(event.code!=null & event.code=="Enter")){
                        window.open(lien[0].href)
                    }
                }
            }
            else t.style.boxShadow="none";
    });
}

function animConteneurProjet(){
    var element = document.getElementById("conteneurFusee");
    var nbProjet=document.getElementsByClassName("conteneurProjet").length;
    let arr = new Array(nbProjet);
    let contArr= new Array(nbProjet);
    var tabTitreProjet = document.getElementsByClassName("titreProjet");
    for (let i = 1; i <=nbProjet; i++) {
        arr[i]=document.querySelector("#conteneurProjet"+i);
        contArr[i]=getComputedStyle(arr[i]);

        if(parseInt(element.style.top)<parseInt(contArr[i].top)+400){
            arr[i].animate([
                {
                    opacity : contArr[i].opacity
                },
                {
                    opacity : 1
                }
            ],{duration:500})
            arr[i].style.opacity = 1;
            
        }
        if(parseInt(element.style.top)<parseInt(contArr[i].top)+100)
        tabTitreProjet[i].classList.add("titreProjetOnclick")
    }
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
  function circleInRectangle(direction){
    var rect = document.getElementById("conteneurFusee");
    var body=document.body
    var rectStyle = window.getComputedStyle(rect);
    var circle=document.createElement("div");
    var minLeft=0;
    var maxLeft=0;
    var minTop=0;
    var maxTop=0;

    if(direction==1){
        var minLeft=(parseInt(rectStyle.left));
        var maxLeft=(parseInt(rectStyle.left)+parseInt(100));
        var minTop=(parseInt(rectStyle.top));
        var maxTop=(parseInt(rectStyle.top)-parseInt(100));
    }
    if(direction==2){
        var minLeft=(parseInt(rectStyle.left));
        var maxLeft=(parseInt(rectStyle.left)+parseInt(100));
        var minTop=(parseInt(rectStyle.top)+parseInt(100));
        var maxTop=(parseInt(rectStyle.top)+parseInt(200));
    }
    if(direction==3){
        var minLeft=(parseInt(rectStyle.left)+parseInt(100));
        var maxLeft=(parseInt(rectStyle.left)+parseInt(200));
        var minTop=(parseInt(rectStyle.top)+parseInt(10));
        var maxTop=(parseInt(rectStyle.top)+parseInt(100));
    }
    if(direction==4){
        var minLeft=(parseInt(rectStyle.left)-parseInt(100));
        var maxLeft=(parseInt(rectStyle.left));
        var minTop=(parseInt(rectStyle.top)+parseInt(10));
        var maxTop=(parseInt(rectStyle.top)+parseInt(100));
    }
        circle.id="rond";
        circle.className="cercle"
        circle.style.backgroundImage="url(image/fumee.png)";
        circle.style.backgroundPosition="center";
        circle.style.backgroundSize="cover";
        circle.style.width="2rem";
        circle.style.height="2rem";
        circle.style.position="absolute";   
        circle.style.zIndex="-5";
        circle.style.left=  NombreRandom(minLeft,maxLeft)+"px";
        circle.style.top=  NombreRandom(minTop,maxTop)+"px";
        circle.style.borderRadius="5rem";

        body.appendChild(circle);
  }
function NombreRandom(min,max){
    return Math.random() * (max - min + 1) + min;
}

function supprimerFumee(){
    tab = document.getElementsByClassName("cercle")
    tab[0].remove()
}

function choixAnnee(){
    idAnnee=sessionStorage.getItem('annee');
    if(!(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))){
        document.getElementById("tuto").style.display="flex"
        document.getElementById("leftNav").style.display="flex";
        document.getElementById("conteneurFusee").style.display="flex"
    }
    let tabImageProject =  document.getElementsByClassName("projectImageForaYear")
    let tabTitre = document.getElementsByClassName("titreProjet")
    let tabProjetPdf = document.getElementsByClassName("linkProject")
    if(idAnnee=="2021-2022"){
        //change le titre de l'accueil
        if(!(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))) document.getElementById("mainTitle").innerHTML +=" (2021-2022)"
        //la liste des titres pour l'année choisit
        let tabTitreProjetFinal = ['La Station Meteo', 'Pong', "Lowatem", 'Creation Entreprise',"Nerd.it", "Creation BD", "Atelier JPO", "Workon", "Plus de projet" ];
        //la liste des noms d'images pour l'année choisit 
        let tabImageSource=['meteo.png','pong.png','lowatem.png','nerditEntreprise.png','nerdit.png','bd.png',"terrain.PNG","workon.png", "DevLight.png", "outilVisu.png"]
        //la liste des fichiers pdf pour chaque projet
        let tabProjetPdfFinal =['stationMeteo.pdf','pong.pdf','Lowatem.pdf','nerdit.pdf','nerdit.pdf','creationBD.pdf','atelierProcessing.pdf','Workon.pdf','devlight.pdf','outilVisu.pdf']
        //projet supplémentaire
        document.getElementsByClassName("lienImg")[0].href="pdf/devlight.pdf#zoom=80"
        document.getElementsByClassName("lienImg")[1].href="pdf/outilVisu.pdf#zoom=80"

        modifierProjet(tabTitre,tabTitreProjetFinal,tabImageProject,tabImageSource,tabProjetPdf,tabProjetPdfFinal);
        afficherProjet(tabProjetPdfFinal)
    }
    if(idAnnee=="2022-2023"){
        //change le titre de l'accueil
        if(!(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))) document.getElementById("mainTitle").innerHTML +=" (2022-2023)"
         //la liste des titres pour l'année choisit
         let tabTitreProjetFinal = ["Labyrinthe Java", "Mini - Shell"," Cryptographie RSA","Filtre de Bloom"," Réseaux et DNS"," Netfloux"];
         //la liste des noms d'images pour l'année choisit 
         let tabImageSource=["labyrinthe.png","meteo.png","RSA.png","meteo.png", "meteo.png","netfloux.png"];
         //la liste des fichiers pdf pour chaque projet
         let tabProjetPdfFinal =["labyrintheJava.pdf","miniShell.pdf","RSA.pdf","FiltreBloom.pdf","DNS.pdf","netfloux.pdf"];
        modifierProjet(tabTitre,tabTitreProjetFinal,tabImageProject,tabImageSource,tabProjetPdf,tabProjetPdfFinal)
        afficherProjet(tabProjetPdfFinal)
    }
}

function modifierProjet(tabTitre,tabTitreProjetFinal,tabImageProject,tabImageSource,tabProjetPdf,tabProjetPdfFinal){
        //changement de titre
        changerTitre(tabTitre,tabTitreProjetFinal)
        //changement d'image
        changerImage(tabImageProject,tabImageSource)
        //changement de pdf
        changerPdf(tabProjetPdf,tabProjetPdfFinal)
}

function afficherProjet(tabProjetPdfFinal){
    let tabProjetDisplayed =  document.getElementsByClassName("listeProjet")
    for(i=0;i<tabProjetPdfFinal.length;i++){
        tabProjetDisplayed[i].style.display="block";
    }
}
function changerTitre(tabDebut,tabFinal){
    for(var i=0; i<tabDebut.length;i++){
        tabDebut[i].innerHTML =tabFinal[i]
    }
}

function changerImage(tabDebut,tabFinal){
    for(var i=0; i<tabDebut.length;i++){
        tabDebut[i].src ="image/"+tabFinal[i]
    }
}

function changerPdf(tabDebut,tabFinal){
    for(var i=0; i<tabDebut.length;i++){
        tabDebut[i].href ="pdf/"+tabFinal[i]+"#zoom=80"
    }
}

function animTitreProjet(conteneurFusee){
    var tabTitreProjet = document.getElementsByClassName("titreProjet");
    for(var i=0; i<tabTitreProjet.length;i++){
        var titreStyle = window.getComputedStyle(tabTitreProjet[i]);
            tabTitreProjet[i].classList.remove('titreProjet');
            tabTitreProjet[i].classList.add('titreProjetOnclick'); 
    }
}