function checkIfMobile(id){
    window.sessionStorage.setItem('annee',id);
    if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) location.replace('indexMobile.html')
    else location.replace('indexPc.html')
}

function display(id){
        document.getElementById(id).style.display="flex";
}
function hide(id){
    document.getElementById(id).style.display="none";
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
    circle.style.zIndex="-100";
    circle.style.top=  NombreRandom(0,body.clientHeight)+"px";
    circle.style.left=  NombreRandom(0,body.clientWidth)+"px";
    body.appendChild(circle);
}

function NombreRandom(min,max){
    return Math.random() * (max - min + 1) + min;
}
function supprimerElement(){
    tab = document.getElementsByClassName("cercle");
    tab[0].remove();
}

function onHover(id){
    var e = document.getElementById(id).src="image/"+id+".png";
}

function onDefault(id){
    let wordHoverLength = 5;
    let defaultImageSRC="image/"+id.substring(0,id.length-wordHoverLength)+".png";
    var e = document.getElementById(id).src=defaultImageSRC;
    console.log(defaultImageSRC);
}
function changeMode(){
    if(sessionStorage.getItem("mode")=="droitier"){
        sessionStorage.setItem("mode","gaucher");
        document.getElementById("boutonModeJoystick").innerText="Droitier";
    }    
    else {
        sessionStorage.setItem("mode","droitier");
        document.getElementById("boutonModeJoystick").innerText="Gaucher";
    }
}

function afficherCredit(id){
    var e = document.getElementById(id);
    if(e.style.display!="block") e.style.display="block";
    else e.style.display="none";
}

function changerVaisseau(id){
    sessionStorage.setItem("Vaisseau","0");
    var element = document.getElementById(id);
    if(id == "typeVaisseau1")
        sessionStorage.setItem("Vaisseau","1");
    if(id == "typeVaisseau2")
        sessionStorage.setItem("Vaisseau","2");
    if(id == "typeVaisseau3")
    sessionStorage.setItem("Vaisseau","3");
    
}
function changerImageVaisseau(){
    console.log(sessionStorage.getItem("Vaisseau","2"))
    if(sessionStorage.getItem("Vaisseau")== "1")
        document.getElementById("fusee").src="image/vaisseauSW.png";
    if(sessionStorage.getItem("Vaisseau")== "2")
        document.getElementById("fusee").src="image/ovni.png";
    if(sessionStorage.getItem("Vaisseau")== "3")
        document.getElementById("fusee").src="image/fusee.png";
}