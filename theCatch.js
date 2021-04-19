var count = 0;
var button = document.getElementById("brobutton");

button.onclick = function(){
    count++;
    //alert("bruh "+ count);

    if(count==1){
    	document.getElementsByClassName("emoticon_box")[0].style.opacity = "1" ;	
    }
    if(count==2){
    	document.getElementsByClassName("eyeR")[0].style.opacity = "1" ;
    	document.getElementsByClassName("eyeL")[0].style.opacity = "1" ;
    }
    if(count==3){
    	document.getElementsByClassName("armHL1")[0].style.opacity = "1" ;
    	document.getElementsByClassName("armHL2")[0].style.opacity = "1" ;
    	document.getElementsByClassName("armHL3")[0].style.opacity = "1" ;
    	document.getElementsByClassName("armHR1")[0].style.opacity = "1" ;
    	document.getElementsByClassName("armHR2")[0].style.opacity = "1" ;
    	document.getElementsByClassName("armHR3")[0].style.opacity = "1" ;
    }
    if(count==4){
    	document.getElementsByClassName("jointL1")[0].style.opacity = "1" ;
    	document.getElementsByClassName("jointL2")[0].style.opacity = "1" ;
    	document.getElementsByClassName("jointL3")[0].style.opacity = "1" ;
    	document.getElementsByClassName("jointR1")[0].style.opacity = "1" ;
    	document.getElementsByClassName("jointR2")[0].style.opacity = "1" ;
    	document.getElementsByClassName("jointR3")[0].style.opacity = "1" ;
    }
    if(count==5){
    	document.getElementsByClassName("armDL1b")[0].style.opacity = "1" ;
    	document.getElementsByClassName("armDL2b")[0].style.opacity = "1" ;
    	document.getElementsByClassName("armDL3b")[0].style.opacity = "1" ;
    	document.getElementsByClassName("armDR1b")[0].style.opacity = "1" ;
    	document.getElementsByClassName("armDR2b")[0].style.opacity = "1" ;
    	document.getElementsByClassName("armDR3b")[0].style.opacity = "1" ;
    }
    if(count==6){
    	window.location.href = "file:thisOneFollows.html";
    }
}
