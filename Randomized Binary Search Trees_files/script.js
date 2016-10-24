var adDiv;
var animPF;
var thisSpeed = .35;
var holdSpeed;




function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }

	if( typeof document.createElement('div').style.animationName !== 'undefined' ) { animPF="animation" } else { animPF="WebkitAnimation" };
	anim();

}



function startAd() {
    adDiv = document.getElementById("ad");
    addEventListeners();
}

function addEventListeners() {
    document.getElementById("container").addEventListener("click", clickthrough);
	document.getElementsByTagName("html")[0].style.display = "block";
	document.getElementById("replay").addEventListener('click', replayBanner);

}

function clickthrough() {
    EB.clickthrough();
}


function anim(){
	//frame1-4
	
	holdSpeed = .5;
	
	document.getElementById("txt1").style[animPF] = thisSpeed + "s fade-in linear forwards";
	
	document.getElementById("circ1").style[animPF] = thisSpeed + "s circle1-in ease-out forwards";
	
	document.getElementById("circ1").style[animPF] += ", " + thisSpeed + "s "+ (thisSpeed + holdSpeed) + "s circle-out ease-in forwards";
	document.getElementById("circ2").style[animPF] = thisSpeed + "s " + (thisSpeed*2 + holdSpeed) + "s circle-in ease-out forwards";
	
	document.getElementById("circ2").style[animPF] += ", " + thisSpeed + "s " + (thisSpeed*3 + holdSpeed*3) + "s circle-out ease-in forwards";
	document.getElementById("circ3").style[animPF] = thisSpeed + "s " + (thisSpeed*4 + holdSpeed*3) + "s circle-in ease-out forwards";
	
	//frame5
	
	var slideSpeed = .5;
	holdSpeed = 5;
	
	for (var i=0; i<=2; i++){
		document.getElementsByClassName("one")[i].style[animPF] = slideSpeed + "s " + holdSpeed + "s slide-down ease-out forwards";
		document.getElementsByClassName("two")[i].style[animPF] = slideSpeed + "s " + (holdSpeed + .15) + "s slide-down ease-out forwards";
		document.getElementsByClassName("three")[i].style[animPF] = slideSpeed + "s " + (holdSpeed + .15*2) + "s slide-down ease-out forwards";
		document.getElementsByClassName("four")[i].style[animPF] = slideSpeed + "s " + (holdSpeed + .15*3) + "s slide-down ease-out forwards";
		document.getElementsByClassName("five")[i].style[animPF] = slideSpeed + "s " + (holdSpeed + .15*4) + "s slide-down ease-out forwards";
		document.getElementsByClassName("six")[i].style[animPF] = slideSpeed + "s " + (holdSpeed + .15*5) + "s slide-down ease-out forwards";
		document.getElementsByClassName("seven")[i].style[animPF] = slideSpeed + "s " + (holdSpeed + .15*6) + "s slide-down ease-out forwards";
		document.getElementsByClassName("eight")[i].style[animPF] = slideSpeed + "s " + (holdSpeed + .15*7) + "s slide-down ease-out forwards";
	}
	
	holdSpeed = 8.3;
	
	document.getElementById("txt1").style[animPF] += ", .1s " + holdSpeed + "s fade-out linear forwards";
	document.getElementById("circ3").style[animPF] += ", .1s " + holdSpeed + "s fade-out linear forwards";
	document.getElementById("globe").style[animPF] = ".1s " + holdSpeed + "s fade-in linear forwards";
	document.getElementById("logo").style[animPF] = ".1s " + holdSpeed + "s fade-in linear forwards";
	
	document.getElementById("sw2Inner").style[animPF] = slideSpeed + "s " + (holdSpeed + thisSpeed) + "s peel-layer linear forwards";
	document.getElementById("slice_wrapper3").style[animPF] = slideSpeed + "s " + (holdSpeed + thisSpeed) + "s peel-curl linear forwards";
    //resume time
	document.getElementById("txt2").style[animPF] = thisSpeed + "s " + (holdSpeed + thisSpeed*2 + slideSpeed ) + "s text-in ease-out forwards";
	/*document.getElementById("txt2").style[animPF] = thisSpeed + "s " + (holdSpeed + thisSpeed + slideSpeed) + "s text-in ease-out forwards";*/

	//frame6
	
	holdSpeed = 12.5;
	
	document.getElementById("txt2").style[animPF] += ", " + thisSpeed + "s " + holdSpeed + "s fade-out linear forwards";
	document.getElementById("txt3").style[animPF] = thisSpeed + "s " + (holdSpeed + thisSpeed) + "s text-in ease-out forwards";
	document.getElementById("cta").style[animPF] = thisSpeed + "s " + (holdSpeed + thisSpeed*2) + "s fade-in linear forwards";
	document.getElementById("replay").style[animPF] = thisSpeed + "s " + (holdSpeed + thisSpeed*2) + "s fade-in linear forwards";
	
}

function replayBanner(){
	document.getElementById("txt1").style[animPF] = "";
	document.getElementById("circ1").style[animPF] = "";
	document.getElementById("circ2").style[animPF] = "";
	document.getElementById("circ3").style[animPF] = "";
	document.getElementById("txt2").style[animPF] = "";
	document.getElementById("globe").style[animPF] = "";
	document.getElementById("logo").style[animPF] = "";
	document.getElementById("sw2Inner").style[animPF] = "";
	document.getElementById("slice_wrapper3").style[animPF] = "";
	document.getElementById("txt3").style[animPF] = "";
	document.getElementById("cta").style[animPF] = "";
	document.getElementById("replay").style[animPF] = "";
	
	for (var i=0; i<=2; i++){
		document.getElementsByClassName("one")[i].style[animPF] = "";
		document.getElementsByClassName("two")[i].style[animPF] = "";
		document.getElementsByClassName("three")[i].style[animPF] = "";
		document.getElementsByClassName("four")[i].style[animPF] = "";
		document.getElementsByClassName("five")[i].style[animPF] = "";
		document.getElementsByClassName("six")[i].style[animPF] = "";
		document.getElementsByClassName("seven")[i].style[animPF] = "";
		document.getElementsByClassName("eight")[i].style[animPF] = "";
	}
	
	setTimeout(function(){
		anim();
	}, 100);
}


window.addEventListener("load", initEB);
