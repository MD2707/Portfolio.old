 //Joystick made by stemkoski , available on https://github.com/stemkoski/HTML-Joysticks
class JoystickController
{
	// stickID: ID of HTML element (representing joystick) that will be dragged
	// maxDistance: maximum amount joystick can move in any direction
	// deadzone: joystick must move at least this amount from origin to register value change
	constructor( stickID, maxDistance, deadzone )
	{
		this.id = stickID;
		let stick = document.getElementById(stickID);

		// location from which drag begins, used to calculate offsets
		this.dragStart = null;

		// track touch identifier in case multiple joysticks present
		this.touchId = null;
		
		this.active = false;
		this.value = { x: 0, y: 0 }; 

		let self = this;

		function handleDown(event)
		{
		    self.active = true;

			// all drag movements are instantaneous
			stick.style.transition = '0s';

			// touch event fired before mouse event; prevent redundant mouse event from firing
			event.preventDefault();

		    if (event.changedTouches)
		    	self.dragStart = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
		    else
		    	self.dragStart = { x: event.clientX, y: event.clientY };

			// if this is a touch event, keep track of which one
		    if (event.changedTouches)
		    	self.touchId = event.changedTouches[0].identifier;
		}
		
		function handleMove(event) 
		{
		    if ( !self.active ) return;

		    // if this is a touch event, make sure it is the right one
		    // also handle multiple simultaneous touchmove events
		    let touchmoveId = null;
		    if (event.changedTouches)
		    {
		    	for (let i = 0; i < event.changedTouches.length; i++)
		    	{
		    		if (self.touchId == event.changedTouches[i].identifier)
		    		{
		    			touchmoveId = i;
		    			event.clientX = event.changedTouches[i].clientX;
		    			event.clientY = event.changedTouches[i].clientY;
		    		}
		    	}

		    	if (touchmoveId == null) return;
		    }

		    const xDiff = event.clientX - self.dragStart.x;
		    const yDiff = event.clientY - self.dragStart.y;
		    const angle = Math.atan2(yDiff, xDiff);
			const distance = Math.min(maxDistance, Math.hypot(xDiff, yDiff));
			const xPosition = distance * Math.cos(angle);
			const yPosition = distance * Math.sin(angle);

			// move stick image to new position
		    stick.style.transform = `translate3d(${xPosition}px, ${yPosition}px, 0px)`;
            var estyle= document.getElementById("conteneurFusee").style
            estyle.transform = 'rotate3d(0,0,1,'+ (+1.5 +angle+"rad")+')';
			// deadzone adjustment
			const distance2 = (distance < deadzone) ? 0 : maxDistance / (maxDistance - deadzone) * (distance - deadzone);
		    const xPosition2 = distance2 * Math.cos(angle);
			const yPosition2 = distance2 * Math.sin(angle);
		    const xPercent = parseFloat((xPosition2 / maxDistance).toFixed(4));
		    const yPercent = parseFloat((yPosition2 / maxDistance).toFixed(4));
		    
		    self.value = { x: xPercent, y: yPercent };
		  }

		function handleUp(event) 
		{
		    if ( !self.active ) return;

		    // if this is a touch event, make sure it is the right one
		    if (event.changedTouches && self.touchId != event.changedTouches[0].identifier) return;

		    // transition the joystick position back to center
		    stick.style.transition = '.2s';
		    stick.style.transform = `translate3d(0px, 0px, 0px)`;
		    // reset everything
		    self.value = { x: 0, y: 0 };
		    self.touchId = null;
		    self.active = false;
		}
		stick.addEventListener('mousedown', handleDown);
		stick.addEventListener('touchstart', handleDown);
		document.addEventListener('mousemove', handleMove, {passive: false});
		document.addEventListener('touchmove', handleMove, {passive: false});
		document.addEventListener('mouseup', handleUp);
		document.addEventListener('touchend', handleUp);
	}
}


function update()
{
	displayProject(null);
	animConteneurProjet();
    var estyle= document.getElementById("conteneurFusee").style
	window.scroll(parseInt(estyle.left)- window.innerWidth/3,parseInt(estyle.top)-window.innerHeight/3); 
}

	
function loop()
{
var eTop = document.getElementById("conteneurFusee").offsetTop
var eLeft = document.getElementById("conteneurFusee").offsetLeft
var estyle= document.getElementById("conteneurFusee").style
  requestAnimationFrame(loop);
	update();
	if(joystick1.value.y>0.25) {
		eTop+=10;	
	}
	if(joystick1.value.y<-0.25){
		eTop-=10;
	}
if(joystick1.value.x>0.25) {
		eLeft+=8;		
	}
	if(joystick1.value.x<-0.25){
		eLeft-=8;
	}
	estyle.top = String(eTop)+'px';
	estyle.left = String(eLeft)+'px';
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

function firstPosition(){
	let styleFusee = document.getElementById("conteneurFusee").style
	document.body.style.zoom=1.0;this.blur()
	styleFusee.left = parseInt(document.documentElement.clientWidth+styleFusee.width)+"px"

}

function hideArrow(){
	setTimeout(function() {
		document.getElementById("arrowImg").style.display="none"
	  }, 3000);
	  setTimeout(function() {
		document.getElementById("conteneurFusee").style.visibility="visible"
	  }, 3000);
	  setTimeout(function() {
		document.getElementById("conteneurJoystick").style.visibility="visible"
	  }, 3000);
	  
}

function modeJoystick(){
	console.log("fuheihfeihu")
	if(sessionStorage.getItem("mode")=="gaucher"){
		document.getElementById("conteneurJoystick").style.left="5rem"
		
	}
}