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
    tab[0].remove()
}

function onHover(id){
    var e = document.getElementById(id).src="image/"+id+".png"
}

function onDefault(id){
    let wordHoverLength = 5
    let defaultImageSRC="image/"+id.substring(0,id.length-wordHoverLength)+".png"
    var e = document.getElementById(id).src=defaultImageSRC
    console.log(defaultImageSRC)
}